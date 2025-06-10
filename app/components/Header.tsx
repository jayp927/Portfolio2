'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 w-full max-w-7xl mx-auto p-4 md:p-8 flex items-center justify-between"
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="flex items-center text-white text-2xl font-bold"
      >
        {/* Placeholder for logo icon */}
        <div className="w-6 h-6 bg-blue-500 rounded-full mr-2" />
        Ben Parker
      </motion.div>

      {/* Navigation */}
      <nav>
        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1 + navLinks.indexOf(link) * 0.1 }}
            >
              <Link href={link.href}>
                <p className="text-white hover:text-blue-400 transition-colors text-lg">
                  {link.name}
                </p>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
} 