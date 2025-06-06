'use client'

import { useRef, useEffect, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'

export default function Earth3D() {
  const earthRef = useRef<THREE.Mesh>(null)
  const [showIndiaMarker, setShowIndiaMarker] = useState(false)
  
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
      colorMap.anisotropy = 32
      colorMap.minFilter = THREE.LinearMipmapLinearFilter
      colorMap.magFilter = THREE.LinearFilter
      colorMap.generateMipmaps = true
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
      
      // Check if India is visible (approximately at rotation.y = 0)
      const rotation = earthRef.current.rotation.y % (Math.PI * 2)
      const isIndiaVisible = Math.abs(rotation) < 0.2 || Math.abs(rotation - Math.PI * 2) < 0.2
      setShowIndiaMarker(isIndiaVisible)
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
      
      {/* India Marker */}
      {showIndiaMarker && (
        <mesh position={[0.3, 0.2, 0.9]}>
          <sphereGeometry args={[0.02, 16, 16]} />
          <meshBasicMaterial color="#ff4444" />
          {/* Glow effect */}
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[0.03, 16, 16]} />
            <meshBasicMaterial color="#ff4444" transparent opacity={0.3} />
          </mesh>
        </mesh>
      )}
    </mesh>
  )
} 