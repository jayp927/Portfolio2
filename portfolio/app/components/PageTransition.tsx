'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      initial={{ rotateX: -90, opacity: 0 }}
      animate={{ rotateX: 0, opacity: 1 }}
      exit={{ rotateX: 90, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      }}
      style={{
        transformOrigin: 'top center',
        perspective: '1000px',
        width: '100%',
        minHeight: '100vh',
      }}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition 