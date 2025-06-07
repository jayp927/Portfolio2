'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' },
  ]

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  }

  const menuItemVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: 'easeOut',
      },
    }),
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 right-0 z-40"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16">
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => scrollToSection(item.path.slice(1))}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.path.slice(1)
                      ? 'text-yellow-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <div className="w-6 h-6 flex flex-col justify-between">
                <span className={`block w-full h-0.5 bg-current transform transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                <span className={`block w-full h-0.5 bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-full h-0.5 bg-current transform transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden absolute top-16 right-0 w-48"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item, i) => (
                <motion.button
                  key={item.path}
                  custom={i}
                  variants={menuItemVariants}
                  onClick={() => scrollToSection(item.path.slice(1))}
                  className={`block w-full text-right px-3 py-2 text-base font-medium ${
                    activeSection === item.path.slice(1)
                      ? 'text-yellow-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar 