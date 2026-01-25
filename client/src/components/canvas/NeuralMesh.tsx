import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function NeuralMesh() {
  const meshRef = useRef<THREE.Points>(null);
  
  const count = 1000; // Reduced count for subtlety
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      // Create a flat, wide horizon-like distribution
      positions[i * 3] = (Math.random() - 0.5) * 50; // Wide X
      positions[i * 3 + 1] = (Math.random() - 0.5) * 5 - 5; // Lower Y (below view)
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20 - 10; // Deep Z

      // Very subtle cyan/blue gradient
      if (Math.random() > 0.5) {
        color.set("#083344"); // Dark Cyan
      } else {
        color.set("#172554"); // Dark Blue
      }
      
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Very slow, calming rotation
    meshRef.current.rotation.y = time * 0.02;
    
    // Gentle undulation
    const positions = meshRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const x = positions[i * 3];
      const z = positions[i * 3 + 2];
      // Create a rolling terrain effect
      positions[i * 3 + 1] = Math.sin(time * 0.2 + x * 0.1) * 0.5 + Math.cos(time * 0.1 + z * 0.1) * 0.5 - 4;
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.4} // Very subtle opacity
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
