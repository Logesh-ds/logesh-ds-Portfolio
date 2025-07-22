import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Text3D, Center } from "@react-three/drei";
import * as THREE from "three";

// Tech Icon Component
const TechIcon = ({ position, color, scale = 1 }: { position: [number, number, number], color: string, scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <octahedronGeometry args={[0.8]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

// Data Science Symbol
const DataSymbol = ({ position }: { position: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh>
          <torusGeometry args={[1.2, 0.1, 16, 100]} />
          <meshStandardMaterial color="#00FFFF" emissive="#00FFFF" emissiveIntensity={0.2} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.0, 0.08, 16, 100]} />
          <meshStandardMaterial color="#9F7AEA" emissive="#9F7AEA" emissiveIntensity={0.2} />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.8, 0.06, 16, 100]} />
          <meshStandardMaterial color="#00B4D8" emissive="#00B4D8" emissiveIntensity={0.2} />
        </mesh>
      </Float>
    </group>
  );
};

const ThreeScene = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00FFFF" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#9F7AEA" />
          
          {/* Tech Icons */}
          <TechIcon position={[-3, 2, 0]} color="#00FFFF" scale={0.8} />
          <TechIcon position={[3, -1, -1]} color="#9F7AEA" scale={1.2} />
          <TechIcon position={[0, -3, 1]} color="#00B4D8" scale={1} />
          <TechIcon position={[-2, -2, -2]} color="#FFD700" scale={0.6} />
          <TechIcon position={[4, 2, 2]} color="#FF6B6B" scale={0.9} />
          
          {/* Central Data Science Symbol */}
          <DataSymbol position={[0, 0, 0]} />
          
          {/* Controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeScene;