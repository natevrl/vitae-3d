"use client";

import { useRef } from "react";
import FloatingCan from "./FloatingCan";
import * as THREE from "three";
import { Cloud, Clouds, Environment, OrbitControls, Text } from "@react-three/drei";



function SkyDiveScene(): JSX.Element {
  const groupRef = useRef<THREE.Group>(null);
  const canRef = useRef<THREE.Group>(null);
  const cloud1Ref = useRef<THREE.Group>(null);
  const cloud2Ref = useRef<THREE.Group>(null);
  const cloudsRef = useRef<THREE.Group>(null);
  const wordsRef = useRef<THREE.Group>(null);
  return (
    <group ref={groupRef}>
      {/* Can */}
      <group rotation={[0, 0, 0.5]}>
        <FloatingCan
          ref={canRef}
          // flavor={flavor}
          rotationIntensity={0}
          floatIntensity={3}
          floatSpeed={3}
        >
          <pointLight intensity={30} color="#8C0413" decay={0.6} />
        </FloatingCan>
      </group>

      {/* Clouds */}
      <Clouds ref={cloudsRef}>
        <Cloud ref={cloud1Ref} bounds={[10, 10, 2]} />
        <Cloud ref={cloud2Ref} bounds={[10, 10, 2]} />
      </Clouds
      >
      {/* Text */}

      <OrbitControls/>

      {/* Lights */}
      <ambientLight intensity={2} color="#9DDEFA" />
      <Environment files="/images/hdrs/field.hdr" environmentIntensity={1.5} />
    </group>
  );
}

export default SkyDiveScene;
