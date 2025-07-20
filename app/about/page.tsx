'use client'

import { motion, animate } from 'framer-motion'
import { useState, useEffect } from 'react'
import Skills from '../components/Skills'

export default function About() {
  const [displayedText, setDisplayedText] = useState('')
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  const sentenceVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.05
       }
    }
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const aboutText = "I am a passionate full-stack developer with a keen eye for design and user experience. I love creating beautiful, functional, and responsive web applications that solve real-world problems. My journey in web development started with a curiosity to understand how things work on the internet, which quickly grew into a passion for building interactive and engaging digital experiences. I enjoy turning complex problems into simple, intuitive, and aesthetically pleasing designs. When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and playing video games."

  // Typing animation effect
  useEffect(() => {
    const typingDuration = aboutText.length * 0.015; // Increased typing speed
    
    const controls = animate(0, aboutText.length, {
      duration: typingDuration,
      ease: "linear",
      onUpdate: (latest) => {
        setDisplayedText(aboutText.slice(0, Math.round(latest)));
      },
      onComplete: () => {
        setIsTypingComplete(true);
      }
    });

    return () => controls.stop();
  }, [aboutText]);

  return (
    <main className="min-h-screen bg-[#0A1428] text-white">
      {/* About Me Text Section */}
      <motion.section 
        className="max-w-6xl mx-auto px-4 py-12 pt-20"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-8"
          variants={sectionVariants}
        >
          About Me
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl leading-relaxed inline"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          {displayedText}
          {/* Blinking Cursor */}
          {!isTypingComplete && (
            <motion.span
              className="inline-block w-1 h-6 ml-1 bg-white align-middle"
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
            >
              |
            </motion.span>
          )}
           {/* Keep cursor blinking after typing is complete if needed */}
           {isTypingComplete && (
            <motion.span
              className="inline-block w-1 h-6 ml-1 bg-white align-middle"
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
            >
              |
            </motion.span>
          )}
        </motion.p>
      </motion.section>

      {/* Skills Section */}
      <div className="relative z-10 bg-[#0A1428]">
        <Skills />
      </div>

      {/* Contact Section */}
      <div className="mx-8 my-8">
        <a 
          href="mailto:juanpablojimenez.dev@gmail.com"
          className="block border border-white rounded-[25px] cursor-pointer transition-colors duration-800 hover:bg-yellow-400 group"
        >
          <p className="font-light text-2xl py-3 px-4 text-center text-white group-hover:text-black group-hover:font-bold">
            Get in touch
          </p>
        </a>
      </div>
    </main>
  )
} 