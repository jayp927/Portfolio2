'use client'

import { motion, Variants } from 'framer-motion'
import { useEffect, useState } from 'react'

const JPPreloader = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Reset loading state when route changes
    setIsLoading(true)
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3200)

    return () => clearTimeout(timer)
  }, [])

  const anim = (variants: Variants) => ({
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants,
  })

  const lettersVariants: Variants = {
    initial: { pathLength: 0, opacity: 0 },
    enter: {
      pathLength: 1,
      opacity: 1,
      transition: { 
        duration: 1.5,
        ease: [0.32, 0, 0.67, 0],
        repeat: 0
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 }
    },
  }

  if (!isLoading) return null

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] flex justify-center items-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <svg
        className="w-32 h-32"
        viewBox="0 0 200 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(30, 0)">
          {/* Letter J */}
          <motion.path
            d="M40 20 L40 60 C40 70 35 75 25 75 L20 75"
            stroke="#FACC15"
            strokeWidth="4"
            strokeLinecap="round"
            {...anim(lettersVariants)}
          />

          {/* Letter P */}
          <motion.path
            d="M80 20 L80 75 M80 20 L100 20 C110 20 120 25 120 35 C120 45 110 50 100 50 L80 50"
            stroke="#FACC15"
            strokeWidth="4"
            strokeLinecap="round"
            {...anim(lettersVariants)}
          />

          {/* Horizontal line */}
          <motion.path
            d="M20 100 L100 100"
            stroke="#FACC15"
            strokeWidth="4"
            strokeLinecap="round"
            {...anim(lettersVariants)}
          />
        </g>
      </svg>
    </motion.div>
  )
}

export default JPPreloader 