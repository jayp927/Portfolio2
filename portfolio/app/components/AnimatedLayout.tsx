'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from "./Navbar"
import JPPreloader from "./JPPreloader"

export default function AnimatedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(true)

  // Force a re-render of the preloader when the pathname changes
  useEffect(() => {
    // This will trigger the preloader to show again
    window.scrollTo(0, 0)
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      <JPPreloader />
      {!isLoading && <Navbar />}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  )
} 