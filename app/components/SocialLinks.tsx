'use client'

import { motion } from 'framer-motion'
// Removed: import { FaBehance, FaDribbble, FaLinkedinIn } from 'react-icons/fa'

const SocialLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-6 z-50"
    >
      {/* Removed: <p className="text-white text-sm tracking-widest">FOLLOW ME ON</p> */}
      {/* Removed: <div className="w-px h-16 bg-white opacity-50" /> */}
      {/* Removed the social media icons */}
      {/*
      <div className="flex flex-col space-y-6">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-blue-400 transition-colors"
        >
          <FaBehance />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-pink-400 transition-colors"
        >
          <FaDribbble />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-blue-600 transition-colors"
        >
          <FaLinkedinIn />
        </a>
      </div>
      */}
      {/* Removed: <div className="w-px h-16 bg-white opacity-50" /> */}
    </motion.div>
  )
}

export default SocialLinks 