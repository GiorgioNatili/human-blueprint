import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

export default function IcebergModel() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={2} position={[0, -1, 0]}>
        <coneGeometry args={[1.5, 3, 4]} /> {/* Low poly iceberg shape */}
        <meshStandardMaterial
          color="#22d3ee"
          wireframe
          transparent
          opacity={0.3}
          emissive="#22d3ee"
          emissiveIntensity={0.5}
        />
      </mesh>
      {/* Inner solid core */}
      <mesh scale={1.8} position={[0, -1, 0]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[1.4, 2.8, 4]} />
        <meshStandardMaterial
          color="#000000"
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
}
