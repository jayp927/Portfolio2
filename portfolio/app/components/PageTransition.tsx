'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()

  return (
    <motion.div
      key={pathname}
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.5
      }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  )
}

export default PageTransition 