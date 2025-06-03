'use client'

import { useRef, useEffect } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'

export default function Earth3D() {
  const earthRef = useRef<THREE.Mesh>(null)
  
  // Load texture
  const colorMap = useLoader(
    THREE.TextureLoader,
    '/textures/earthmap1k.png',
    (loader) => {
      loader.crossOrigin = 'anonymous'
    }
  )

  useEffect(() => {
    if (colorMap) {
      colorMap.anisotropy = 16
      colorMap.minFilter = THREE.LinearFilter
      colorMap.magFilter = THREE.LinearFilter
    }
  }, [colorMap])

  useEffect(() => {
    return () => {
      colorMap.dispose()
    }
  }, [colorMap])

  useFrame((state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.1
    }
  })

  return (
    <mesh ref={earthRef} scale={[1, 1, 1]} castShadow receiveShadow>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        map={colorMap}
        roughness={0.7}
        metalness={0.1}
      />
      {/* Subtle blue atmosphere glow */}
      <mesh>
        <sphereGeometry args={[1.03, 64, 64]} />
        <meshBasicMaterial color="#3cf" transparent opacity={0.15} />
      </mesh>
      {/* Light source for day/night effect */}
      <pointLight position={[5, 0, 5]} intensity={1.2} color="#fff" />
    </mesh>
  )
} 