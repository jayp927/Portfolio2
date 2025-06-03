'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Sun3D() {
  const sunRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (sunRef.current) {
      sunRef.current.rotation.y += delta * 0.2 // Rotate the sun
    }
  })

  return (
    <mesh ref={sunRef} castShadow receiveShadow>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhongMaterial
        color="#FFD700"
        emissive="#FFA500"
        emissiveIntensity={0.8}
        shininess={80}
        specular="#fff59d"
      />
      {/* Add a point light for a glowing effect */}
      <pointLight position={[0, 0, 2]} intensity={1.5} color="#fffde4" />
    </mesh>
  )
} 