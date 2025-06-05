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
  const [isFirstLoad, setIsFirstLoad] = useState(true)

  useEffect(() => {
    if (isFirstLoad) {
      const timer = setTimeout(() => {
        setIsLoading(false)
        setIsFirstLoad(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [isFirstLoad])

  return (
    <>
      {isFirstLoad && <JPPreloader />}
      {!isLoading && <Navbar />}
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </>
  )
} 