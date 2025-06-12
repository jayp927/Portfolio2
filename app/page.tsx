'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs } from 'react-icons/si'
import { FaFilePdf } from 'react-icons/fa'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { useState } from 'react'

const aboutWords = Array(60).fill('ABOUT').join(' · ');

interface AnimatedTextProps {
  text: string;
  className?: string;
  onAnimationComplete?: () => void;
}

interface AnimatedWordsProps {
  text: string;
  className?: string;
  startAnimation: boolean;
}

const AnimatedText = ({ text, className = "", onAnimationComplete }: AnimatedTextProps) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={`flex flex-col items-center ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
      onAnimationComplete={onAnimationComplete}
    >
      {words.map((word, wordIndex) => (
        <motion.div
          key={wordIndex}
          className="flex justify-center"
          variants={container}
          initial="hidden"
          animate="visible"
          custom={wordIndex}
        >
          {Array.from(word).map((letter, index) => (
            <motion.span
              key={index}
              variants={child}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      ))}
    </motion.div>
  );
};

const AnimatedWords = ({ text, className = "", startAnimation }: AnimatedWordsProps) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={`flex items-center justify-center space-x-2 ${className}`}
      variants={container}
      initial="hidden"
      animate={startAnimation ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
        >
          {word}
          {index < words.length - 1 && <span className="mx-2">-</span>}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function Home() {
  const [startSubtitleAnimation, setStartSubtitleAnimation] = useState(false);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="min-h-screen w-full relative overflow-hidden"
    >
      {/* --- Background Layer --- */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        {/* Orange Circle (Bottom Left, scaled, blurred, gradient) */}
        <div
          className="absolute bottom-0 left-0 w-[1050px] h-[1050px] rounded-full blur-3xl"
          style={{
            transform: 'translate(-50%, 50%)',
            background: 'radial-gradient(circle at 60% 60%, #ea580c 0%, #fbbf24 100%)',
            opacity: 0.6,
            zIndex: 1,
          }}
        />
        {/* Blue Circle (Top Right, scaled, blurred, gradient) */}
        <div
          className="absolute w-[600px] sm:w-[1050px] h-[600px] sm:h-[1050px] rounded-full blur-3xl"
          style={{
            top: '-200px',
            right: '-200px',
            background: 'radial-gradient(circle at 40% 40%, #1e40af 0%, #6366f1 100%)',
            opacity: 0.6,
            zIndex: 2,
          }}
        />
      </div>

      {/* Navbar (top) */}
      <section className="w-full text-center pt-2 pb-2 relative">
        {/* Icons on the left */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center space-x-4">
          <a 
            href="https://drive.google.com/file/d/1MuqtAhoh2Iw8dwx9UhJMX4S5Ki-IVmb0/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-400 transition-colors"
          >
            <FaFilePdf className="h-8 w-8" />
          </a>
          <a 
            href="https://github.com/jayp927" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors hidden sm:block"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-8 w-8" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>

        <nav>
          <ul className="inline-flex items-center justify-center space-x-2 sm:space-x-10 text-white text-sm sm:text-lg font-michroma tracking-wider">
            <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
            <li>·</li>
            <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
            <li>·</li>
            <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </section>

      {/* Name & Title Text (middle) */}
      <section className="w-full text-center mt-20 mb-20">
        <AnimatedText 
          text="Jay Pipaliya" 
          className="text-white text-5xl md:text-8xl font-extrabold uppercase font-michroma leading-tight"
          onAnimationComplete={() => setStartSubtitleAnimation(true)}
        />
        <AnimatedWords 
          text="designer coder developer" 
          className="text-white text-base md:text-xl font-light tracking-wide lowercase mt-2"
          startAnimation={startSubtitleAnimation}
        />
      </section>

      {/* Image + Carousel (bottom) */}
      <section className="w-full relative flex flex-col items-center justify-end pt-8">
        {/* Image (overlaps carousel) */}
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-[30px] overflow-hidden grayscale border-4 border-white shadow-xl mx-auto z-[10] relative mb-[-40px]">
          <Image
            src="/images/jay.jpg"
            alt="Jay Pipaliya"
            width={224}
            height={224}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        {/* ABOUT Carousel (bottom, not fixed, z-0, no text overlap) */}
        <div className="relative w-full bg-[#eee] py-2 z-0 overflow-hidden flex flex-col items-center justify-end">
          <div className="relative w-full h-16 flex items-center overflow-hidden">
            <span className="whitespace-nowrap font-extrabold text-blue-900 text-2xl tracking-wide px-2 animate-marquee">
              {aboutWords}
            </span>
          </div>
          <style jsx>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-100%); }
            }
            .animate-marquee {
              display: inline-block;
              min-width: 100%;
              animation: marquee 24s linear infinite;
            }
          `}</style>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </motion.main>
  )
}

