'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiDocumentText } from 'react-icons/hi'

const SocialLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-6 left-6 z-50 flex gap-6"
    >
      <a
        href="https://github.com/jayp927"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl text-[#333] hover:text-[#6e5494] transition-colors"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/jay-pipaliya-117369326/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl text-[#0077b5] hover:text-[#00a0dc] transition-colors"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://drive.google.com/file/d/1MuqtAhoh2Iw8dwx9UhJMX4S5Ki-IVmb0/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl text-[#e74c3c] hover:text-[#c0392b] transition-colors"
      >
        <HiDocumentText />
      </a>
    </motion.div>
  )
}

export default SocialLinks 