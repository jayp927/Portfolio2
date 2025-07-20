'use client'

import { motion } from 'framer-motion';

const aboutParagraphs = [
  `Driven by curiosity and creativity, I’m a full-stack developer who loves turning ambitious ideas into immersive digital experiences. My approach blends technical expertise with a designer’s eye, ensuring every project is as beautiful as it is functional. From scalable backends to pixel-perfect UIs, I thrive on challenges and never stop learning.`,
  `Outside of coding, I’m a relentless explorer—experimenting with new tech, contributing to open source, and sharing knowledge with the community. I believe in building not just solutions, but stories that inspire, connect, and elevate. Let’s collaborate and create something unforgettable.`
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};
const letter = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function AnimatedText({ text, className }: { text: string; className?: string }) {
  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.7 }}
      aria-label={text}
      style={{ display: 'inline-block', whiteSpace: 'pre-wrap' }}
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          variants={letter}
          style={{ display: char === ' ' ? 'inline-block' : 'inline-block', minWidth: char === ' ' ? '0.3em' : undefined }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-[#0A1428] px-4 py-20 relative overflow-hidden"
    >
      <div className="max-w-3xl w-full flex flex-col items-center gap-12 z-10">
        {/* Animated Heading */}
        <AnimatedText
          text="About Me"
          className="text-5xl md:text-6xl font-extrabold text-center tracking-tight bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_2px_24px_#ffe066cc] mb-2"
        />
        {/* Animated Paragraphs */}
        <div className="flex flex-col gap-8 w-full">
          {aboutParagraphs.map((text, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl px-6 py-8 md:px-10 md:py-12 border border-yellow-100/10 hover:scale-[1.03] hover:shadow-yellow-200/30 transition-all duration-300 cursor-pointer"
              style={{ fontFamily: 'var(--font-libertinus-math)' }}
            >
              <AnimatedText
                text={text}
                className="block text-gray-300 group-hover:text-white text-lg md:text-2xl leading-relaxed font-medium transition-colors duration-300 drop-shadow-[0_2px_12px_#ffe06699]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 