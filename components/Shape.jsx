"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box, Plane, useGLTF } from "@react-three/drei";
// function Model({ url }) {
//   const { scene } = useGLTF('../untitled (1).gltf');
//   return <primitive object={scene} scale={1} />;
// }
function Scene() {
  return (
    <>
      <Box position={[-1.2, 0, 0]}>
        {" "}
        <meshStandardMaterial attach="material" color="blue" />{" "}
      </Box>{" "}
      <Plane
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1, 0]}
        args={[10, 10]}
      >
        <meshStandardMaterial attach="material" color="lightblue" />{" "}
      </Plane>{" "}
    </>
  );
}
function Shape() {
  return (
    <div style={{ height: "100vh", width: "100%", backgroundColor: "yellow" }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} intensity={1} />
        {/* <Model url="/untitled(1).gltf" /> */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default Shape;
