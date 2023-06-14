import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import "./CubeCanvasStyle.css";
import { Developer } from '../../assets';

const Cube = () => {
  const cubeRef = useRef();
  const textureLoader = new THREE.TextureLoader();
  const texture1 = textureLoader.load(Developer);
  
  useFrame(() => {
    cubeRef.current.rotation.x += 0.01;
    cubeRef.current.rotation.y += 0.01;
    cubeRef.current.rotation.z += 0.01;
  });
  const materials = [
    new THREE.MeshBasicMaterial({ map: texture1 })];
    
  return (
    <mesh rotation={[90,0,20]} ref={cubeRef}>
        <boxBufferGeometry attach="geometry" args={[1.5,1.5,1.5]}/>
        <meshLambertMaterial attach="material" color="white"/>
        <meshBasicMaterial attachArray="material" map={texture1} />
    </mesh>
  )
}
const CubeCanvas = () =>{
    return(
        <Canvas className="canvas">
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={0.75} />
            <directionalLight position={[-2,5,2]} intensity={1} />
            <Cube/> 
        </Canvas>
    );
}

export default CubeCanvas;