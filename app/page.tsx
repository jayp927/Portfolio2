'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs } from 'react-icons/si'
import { FaFilePdf } from 'react-icons/fa'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { useState, useEffect } from 'react'

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

export const AnimatedText = ({ text, className = "", onAnimationComplete }: AnimatedTextProps) => {
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

const wordsList = ["designer", "coder", "developer"];

const TypewriterWords = ({ className = "", startAnimation = false }: { className?: string; startAnimation?: boolean }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    if (!startAnimation) return;
    const currentWord = wordsList[currentWordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        setTypingSpeed(100);
      }, 100);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length - 1));
        setTypingSpeed(50);
      }, 50);
    } else if (!isDeleting && displayedText.length === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && displayedText.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % wordsList.length);
      }, 400);
    }
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex, startAnimation]);

  return (
    <div className={`text-white text-base md:text-xl font-light tracking-wide lowercase mt-2 h-8 ${className}`} style={{ minHeight: '2rem' }}>
      {displayedText}
      <span className="inline-block w-1 h-6 ml-1 align-middle bg-white animate-pulse" style={{ opacity: 0.7 }}>|</span>
    </div>
  );
};

export default function Home() {
  const [startSubtitleAnimation, setStartSubtitleAnimation] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="min-h-screen w-full relative overflow-hidden"
    >
      {/* Dark theme background for mobile only */}
      <div className="md:hidden absolute inset-0 bg-gradient-to-b from-zinc-800 via-zinc-900 to-black -z-10" />
      
      {/* Subtle noise texture overlay */}
      <div className="md:hidden absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay -z-10" />

      {/* HERO SECTION WRAPPER START */}
      <div style={{ background: 'var(--main-bg)', color: 'var(--hero-text)' }}>
      {/* Navbar (top) */}
      <section className="w-full text-center pt-2 pb-2 relative">
        {/* Icons on the left */}
        <div className="absolute left-4 top-7 -translate-y-1/2 flex items-center space-x-4">
          <a 
            href="https://drive.google.com/file/d/1MuqtAhoh2Iw8dwx9UhJMX4S5Ki-IVmb0/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-400 transition-colors hidden md:inline-flex"
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
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-fit backdrop-blur-md bg-black/40 border-b border-white/10 rounded-xl px-8 py-3 shadow-lg">
          <ul className="inline-flex items-center justify-center space-x-2 sm:space-x-10 text-white text-sm sm:text-lg font-michroma tracking-wider relative">
            {navLinks.map((link, idx) => (
              <li key={link.href} className="relative">
                <motion.a
                  href={link.href}
                  className="navbar-link px-3 py-1 rounded-md group"
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                  onMouseEnter={() => setHovered(link.href)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <span className="relative z-10 transition-colors duration-200 group-hover:neon-gradient {hovered === link.href ? 'neon-gradient' : ''}">{link.label}</span>
                  <span className="navbar-underline"></span>
                </motion.a>
              </li>
            )).reduce((acc: JSX.Element[], curr: JSX.Element, idx: number) => idx < navLinks.length - 1 ? [...acc, curr, <li key={`dot-${idx}`}>·</li>] : [...acc, curr], [])}
          </ul>
        </nav>
      </section>

      {/* Name & Title Text (middle) */}
      <section className="w-full text-center mt-20 mb-20">
        <AnimatedText 
          text="Jay Pipaliya" 
          className="text-5xl md:text-8xl font-extrabold uppercase font-michroma leading-tight bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_2px_24px_#ffe066cc]"
          onAnimationComplete={() => setStartSubtitleAnimation(true)}
        />
        <TypewriterWords 
          className=""
          startAnimation={startSubtitleAnimation}
        />
      </section>

      {/* Image + Carousel (bottom) */}
      <section className="w-full relative flex flex-col items-center justify-end pt-8">
        {/* Image (overlaps carousel) */}
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-[30px] overflow-hidden border-4 border-white shadow-xl mx-auto z-[10] relative mb-[-20px]">
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
        <div className="relative w-full bg-white py-2 z-0 overflow-hidden flex flex-col items-center justify-end">
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
      </div> {/* HERO SECTION WRAPPER END */}

      <div style={{ background: 'var(--main-bg)', color: 'var(--about-text)' }}><About /></div>
      <div style={{ background: 'var(--main-bg)', color: 'var(--projects-text)' }}><Skills /><Projects /></div>
      <div style={{ background: 'var(--main-bg)', color: 'var(--contact-text)' }}><Contact /></div>

      {/* Footer */}
      <footer style={{ background: 'var(--hero-bg)', color: '#aaa' }} className="w-full text-center py-4 text-xs font-michroma">
        © {new Date().getFullYear()} Jay Pipaliya. All rights reserved.
      </footer>
    </motion.main>
  )
}

