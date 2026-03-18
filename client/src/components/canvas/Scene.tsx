import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { Suspense } from "react";

interface SceneProps {
  children: React.ReactNode;
  "aria-hidden"?: boolean | "true" | "false";
}

export default function Scene({ children, "aria-hidden": ariaHidden }: SceneProps) {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden={ariaHidden}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          {children}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
