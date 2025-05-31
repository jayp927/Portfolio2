'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const menuItemVariants = {
    closed: { opacity: 0, x: 50 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeInOut"
      }
    })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main header bar */}
      <div className="bg-black/80 backdrop-blur-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            JP
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 w-10 h-10 flex flex-col justify-center items-center"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white block mb-1.5"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-white block mb-1.5"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white block"
            />
          </button>
        </div>
      </div>

      {/* Full-screen menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-black/95 backdrop-blur-md"
          >
            <div className="h-full flex flex-col justify-center items-center">
              <nav className="text-center">
                <ul className="space-y-8">
                  {menuItems.map((item, i) => (
                    <motion.li
                      key={item.path}
                      custom={i}
                      variants={menuItemVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      <Link
                        href={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`text-4xl font-light text-white hover:text-yellow-400 transition-colors ${
                          pathname === item.path ? 'text-yellow-400' : ''
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-16 flex space-x-6"
              >
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 transition-colors"
                >
                  Twitter
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header 