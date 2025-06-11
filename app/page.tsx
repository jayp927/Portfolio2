'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs } from 'react-icons/si'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

const aboutWords = Array(60).fill('ABOUT').join(' · ');

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

      {/* --- Navigation Bar --- */}
      <nav className="absolute top-0 left-0 right-0 p-4 text-center z-20">
        <ul className="flex justify-center space-x-12 text-white text-lg font-michroma">
          <li><a href="#about" className="hover:text-blue-400 transition-colors">about</a></li>
          <li>·</li>
          <li><a href="#projects" className="hover:text-blue-400 transition-colors">projects</a></li>
          <li>·</li>
          <li><a href="#contact" className="hover:text-blue-400 transition-colors">contact</a></li>
        </ul>
      </nav>

      {/* --- Hero Content --- */}
      <section className="relative min-h-screen flex flex-col items-center justify-end z-10">
        <div className="flex flex-col items-center justify-end w-full h-full relative">
          {/* Name (two lines, bold, uppercase, white) */}
          <h1 className="text-white text-5xl md:text-8xl font-extrabold uppercase font-michroma text-center leading-tight mt-4">
            Jay <br />Pipaliya
          </h1>
          {/* Subtitle */}
          <p className="text-white text-base md:text-xl font-light tracking-wide lowercase mt-2 mb-2 text-center">
            designer - coder - developer
          </p>
          {/* Profile Image (grayscale, rounded-[30px], overlaps carousel) */}
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
          {/* --- ABOUT Carousel (bottom, not fixed, z-0) --- */}
          <div className="relative w-full bg-[#eee] py-2 z-0 overflow-hidden flex flex-col items-center justify-end">
            <div className="relative w-full h-12 flex items-center">
              <div className="whitespace-nowrap font-extrabold text-blue-900 text-3xl tracking-wide px-4 animate-marquee overflow-hidden">
                {aboutWords}
              </div>
            </div>
            <style jsx>{`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-marquee {
                display: inline-block;
                min-width: 200%;
                animation: marquee 18s linear infinite;
              }
            `}</style>
          </div>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
