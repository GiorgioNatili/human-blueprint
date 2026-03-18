import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function NeuralMesh() {
  const meshRef = useRef<THREE.Points>(null);

  const count = 1000;
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      // Create a flat, wide horizon-like distribution
      pos[i * 3] = (Math.random() - 0.5) * 50; // Wide X
      pos[i * 3 + 1] = (Math.random() - 0.5) * 5 - 5; // Lower Y (below view)
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20 - 10; // Deep Z

      // Very subtle cyan/blue gradient
      if (Math.random() > 0.5) {
        color.set("#083344"); // Dark Cyan
      } else {
        color.set("#172554"); // Dark Blue
      }

      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    return [pos, col];
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();

    // Very slow, calming rotation
    meshRef.current.rotation.y = time * 0.02;

    // Gentle undulation
    const geomPositions = meshRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const x = geomPositions[i * 3];
      const z = geomPositions[i * 3 + 2];
      // Create a rolling terrain effect
      geomPositions[i * 3 + 1] = Math.sin(time * 0.2 + x * 0.1) * 0.5 + Math.cos(time * 0.1 + z * 0.1) * 0.5 - 4;
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.4}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
