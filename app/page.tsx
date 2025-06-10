'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs } from 'react-icons/si'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  return (
    <motion.main 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      
      {/* Social Links - will be repositioned and styled */}
      <SocialLinks />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden p-4 md:p-8">
        {/* Sticky Background Image */}
        <div className="fixed inset-0 w-full h-full">
          <Image
            src="/images/background.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" /> {/* Overlay for better text readability */}
        </div>
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between h-full text-center lg:text-left gap-8">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center lg:items-start"
          >
            <p className="text-blue-300 text-lg mb-2">Welcome to my portfolio!</p>
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-6">
              Hello, my <br /> name&apos;s <span className="text-blue-500">Ben.</span>
            </h1>
            <p className="text-gray-300 text-xl md:text-2xl mb-8 max-w-md">
              I&apos;m a visual designer from London. Currently working with <span className="text-blue-400">@Ideo</span> as a UI Consultant.
            </p>
            <div className="flex space-x-4">
              <a
                href="/Ben_Parker_CV.pdf"
                download
                className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                Download cv
              </a>
              <a
                href="#projects"
                className="border border-white text-white px-6 py-3 rounded-full text-lg hover:bg-white hover:text-blue-600 transition-colors shadow-lg flex items-center"
              >
                See my work <span className="ml-2">→</span>
              </a>
            </div>
          </motion.div>

          {/* Right Content - Image and Circular Ring */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center z-20 animate-pulse-slow"
          >
            {/* Circular ring with pulse animation */}
            <div className="absolute inset-0 rounded-full outline outline-4 outline-blue-500" />
            {/* Image within the ring */}
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl">
              <Image
                src="/images/jay.jpg"
                alt="Jay Pipaliya"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator (Bottom Left) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-8 left-8 text-white flex items-center text-lg"
        >
          <span className="border border-white rounded-full w-8 h-8 flex items-center justify-center mr-2">0</span>
          Scroll down
        </motion.div>

        {/* Scroll to Top Button (Bottom Right) */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors shadow-lg z-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.a>
      </section>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </motion.main>
  )
}
