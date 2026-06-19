import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";

/**
 * Lazy-loaded R3F hero object: a slowly distorting gradient sphere.
 * Imported via React.lazy so three.js stays out of the initial bundle.
 */
export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 2, 5]} intensity={2} color="#8B5CF6" />
      <directionalLight position={[-4, -2, 2]} intensity={1.4} color="#06B6D4" />
      <Float speed={1.4} rotationIntensity={0.8} floatIntensity={1.1}>
        <Sphere args={[1.4, 96, 96]}>
          <MeshDistortMaterial
            color="#3B82F6"
            attach="material"
            distort={0.42}
            speed={1.6}
            roughness={0.18}
            metalness={0.6}
          />
        </Sphere>
      </Float>
    </Canvas>
  );
}
