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
      <SocialLinks />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
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
        
        {/* Content */} {/* Adjusted layout for responsiveness */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center h-full text-center pt-16 pb-8">
          
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 text-5xl md:text-8xl font-bold leading-none mb-8"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
                JAY<br/>PIPALIYA
              </span>
            </motion.h1>

            
              <motion.div
                initial={{ opacity: 1, scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative z-20 w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden mb-8 -mt-20 md:-mt-51"
              >
                <Image
                  src="/images/jay.jpg"
                  alt="Jay Pipaliya"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            
            {/* Text and Button repositioned after image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative z-10 space-y-6 z-100"
            >
              <p className="text-xl md:text-5xl font-semibold text-yellow-400">
                Full Stack Developer & UI/UX Enthusiast
              </p>
              <a
                href="#projects"
                className="bg-yellow-400 text-black px-8 py-3 rounded-full text-2xl hover:bg-yellow-300 transition-colors inline-block"
              >
                View My Work
              </a>
            </motion.div>
          
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </motion.main>
  )
}
