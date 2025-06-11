'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs } from 'react-icons/si'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

const aboutWords = Array(60).fill('ABOUT').join(' · ');

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText = ({ text, className = "" }: AnimatedTextProps) => {
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

export default function Home() {
  return (
    <main className="min-h-screen w-full relative overflow-hidden">
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
          className="absolute w-[1050px] h-[1050px] rounded-full blur-3xl"
          style={{
            top: '-300px',
            right: '-300px',
            background: 'radial-gradient(circle at 40% 40%, #1e40af 0%, #6366f1 100%)',
            opacity: 0.6,
            zIndex: 2,
          }}
        />
      </div>

      {/* Navbar (top) */}
      <section className="w-full text-center pt-2 pb-2">
        <nav>
          <ul className="inline-flex items-center justify-center space-x-10 text-white text-lg font-michroma tracking-wider">
            <li><a href="#about" className="hover:text-blue-400 transition-colors">about</a></li>
            <li>·</li>
            <li><a href="#projects" className="hover:text-blue-400 transition-colors">projects</a></li>
            <li>·</li>
            <li><a href="#contact" className="hover:text-blue-400 transition-colors">contact</a></li>
          </ul>
        </nav>
      </section>

      {/* Name & Title Text (middle) */}
      <section className="w-full text-center mt-20 mb-20">
        <AnimatedText 
          text="Jay Pipaliya" 
          className="text-white text-5xl md:text-8xl font-extrabold uppercase font-michroma leading-tight"
        />
        <p className="text-white text-base md:text-xl font-light tracking-wide lowercase mt-2">designer - coder - developer</p>
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
    </main>
  )
}

