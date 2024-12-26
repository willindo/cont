'use client'; // Ensure this is at the top of your file

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={1} />;
}

function Shape() {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} intensity={1} />

        {/* Adding Plane */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
          <planeBufferGeometry attach="geometry" args={[10, 10]} />
          <meshStandardMaterial attach="material" color="lightblue" />
        </mesh>

        {/* Adding Sphere */}
        <mesh position={[0, 1, 0]}>
          <sphereBufferGeometry attach="geometry" args={[0.5, 32, 32]} />
          <meshStandardMaterial attach="material" color="orange" />
        </mesh>

        {/* <Model url="/models/your`-model.gltf" /> */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default Shape;
