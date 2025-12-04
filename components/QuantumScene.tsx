/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Environment, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const GoldParticle = ({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.position.y = position[1] + Math.sin(t * 0.5 + position[0]) * 0.1;
      ref.current.rotation.x = t * 0.2;
      ref.current.rotation.z = t * 0.1;
    }
  });

  return (
    <Sphere ref={ref} args={[1, 32, 32]} position={position} scale={scale}>
      <MeshDistortMaterial
        color="#C5A059"
        envMapIntensity={2}
        clearcoat={1}
        clearcoatRoughness={0.1}
        metalness={1}
        roughness={0.1}
        distort={0.3}
        speed={1.5}
      />
    </Sphere>
  );
};

const AbstractRing = () => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
       const t = state.clock.getElapsedTime();
       ref.current.rotation.x = Math.PI / 2 + Math.sin(t * 0.2) * 0.1;
       ref.current.rotation.y = t * 0.05;
    }
  });

  return (
    <Torus ref={ref} args={[3.5, 0.05, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
      <meshStandardMaterial color="#C5A059" emissive="#C5A059" emissiveIntensity={0.8} />
    </Torus>
  );
}

export const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#fff" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#C5A059" />
        
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          {/* Main Gold Abstract Form */}
          <GoldParticle position={[0, 0, 0]} scale={1.2} />
          <AbstractRing />
        </Float>
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
           <GoldParticle position={[-3, 1.5, -2]} scale={0.4} />
           <GoldParticle position={[3.5, -1.5, -3]} scale={0.5} />
        </Float>

        <Sparkles count={50} scale={10} size={2} speed={0.4} opacity={0.5} color="#C5A059" />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export const QuantumComputerScene: React.FC = () => {
  // Re-purposing this as an "Abstract Architectural" scene for the Design section
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[5, 10, 5]} angle={0.5} penumbra={1} intensity={2} color="#C5A059" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#blue" />
        <Environment preset="night" />
        
        <Float rotationIntensity={0.2} floatIntensity={0.2} speed={0.5}>
          <group rotation={[0.5, 0.5, 0]}>
             {/* Abstract Geometric Forms representing "Structure/Architecture" */}
             <Torus args={[2, 0.02, 16, 100]} position={[0,0,0]}>
                <meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} />
             </Torus>
             <Torus args={[1.5, 0.02, 16, 100]} position={[0,0,0]} rotation={[0, Math.PI/2, 0]}>
                <meshStandardMaterial color="#C5A059" metalness={0.9} roughness={0.1} />
             </Torus>
             
             {/* Floating Stones */}
             <Sphere args={[0.5, 32, 32]} position={[1, 1, 0]}>
                <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.7} />
             </Sphere>
             <Sphere args={[0.3, 32, 32]} position={[-1, -1, 0.5]}>
                <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.7} />
             </Sphere>
          </group>
        </Float>
      </Canvas>
    </div>
  );
}