'use client'

import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const SocialLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-6 z-50"
    >
    
      {/* Removed: <div className="w-px h-16 bg-white opacity-50" /> */}
      <div className="hidden md:flex fixed top-8 left-8 z-50 space-x-4">
        <a href="https://www.linkedin.com/in/jay-pipaliya-117369326/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
          <FaLinkedin size={32} />
        </a>
        <a href="https://github.com/jayp927" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
          <FaGithub size={32} />
        </a>
      </div>
    </motion.div>
  )
}

export default SocialLinks 