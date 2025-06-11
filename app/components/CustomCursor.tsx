'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    setIsMounted(true)
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  if (!isMounted) return null

  return (
    <div className="hidden md:block">
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none z-50 bg-white/20 border border-white/30 shadow-lg backdrop-blur-md"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1
        }}
      />
    </div>
  )
}

export default CustomCursor 