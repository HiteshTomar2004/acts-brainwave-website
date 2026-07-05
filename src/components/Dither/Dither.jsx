import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

import vertexShader from "./vertex.glsl?raw";
import fragmentShader from "./fragment.glsl?raw";

function FullscreenQuad({
  waveColor,
  waveSpeed,
  waveFrequency,
  waveAmplitude,
  pixelSize,
  mouseRadius,
}) {
  const meshRef = useRef();

  const { size, gl } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: new THREE.Uniform(0),

      uResolution: new THREE.Uniform(
        new THREE.Vector2(size.width, size.height)
      ),

      uMouse: new THREE.Uniform(
        new THREE.Vector2(-1000, -1000)
      ),

      uWaveColor: new THREE.Uniform(
        new THREE.Color(...waveColor)
      ),

      uWaveSpeed: new THREE.Uniform(waveSpeed),

      uWaveFrequency: new THREE.Uniform(waveFrequency),

      uWaveAmplitude: new THREE.Uniform(waveAmplitude),

      uPixelSize: new THREE.Uniform(pixelSize),

      uMouseRadius: new THREE.Uniform(mouseRadius),
    }),
    []
  );

  useFrame(({ clock }) => {
    uniforms.uTime.value = clock.elapsedTime;

    const dpr = gl.getPixelRatio();

    uniforms.uResolution.value.set(
      size.width * dpr,
      size.height * dpr
    );
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />

      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export default function Dither({
  waveColor = [0.94, 0.97, 0.24],

  waveSpeed = 0.08,

  waveFrequency = 2.6,

  waveAmplitude = 0.35,

  pixelSize = 3,

  mouseRadius = 0.25,
}) {
  return (
    <Canvas
      orthographic
      camera={{
        position: [0, 0, 1],
        zoom: 1,
      }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <FullscreenQuad
        waveColor={waveColor}
        waveSpeed={waveSpeed}
        waveFrequency={waveFrequency}
        waveAmplitude={waveAmplitude}
        pixelSize={pixelSize}
        mouseRadius={mouseRadius}
      />
    </Canvas>
  );
}