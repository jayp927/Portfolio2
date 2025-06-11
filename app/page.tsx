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
      <div className="fixed inset-0 w-full h-full z-0">
        {/* Split radial background: orange left, blue right */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at 30% 50%, #b55208 0%, transparent 60%), ' +
                'radial-gradient(ellipse at 70% 50%, #003399 0%, transparent 60%)',
              opacity: 0.5,
              zIndex: 0,
              width: '100%',
              height: '100%',
            }}
          />
          {/* Large Orange Circle (Bottom Left) */}
          <div
            className="absolute rounded-full blur-3xl"
            style={{
              background: 'radial-gradient(circle, #b55208 60%, transparent 100%)',
              width: '700px',
              height: '700px',
              left: '-120px',
              bottom: '-80px',
              opacity: 0.7,
              zIndex: 1,
            }}
          />
          {/* Large Blue Circle (Top Right) */}
          <div
            className="absolute rounded-full blur-3xl"
            style={{
              background: 'radial-gradient(circle, #003399 60%, transparent 100%)',
              width: '700px',
              height: '700px',
              right: '-120px',
              top: '-80px',
              opacity: 0.7,
              zIndex: 2,
            }}
          />
          {/* Silver Circle (Under Blue) */}
          <div
            className="absolute rounded-full blur-2xl"
            style={{
              background: 'radial-gradient(circle, #fff 0%, #C0C0C0 100%)',
              width: '250px',
              height: '250px',
              right: '-40px',
              top: '60px',
              opacity: 0.35,
              zIndex: 1,
            }}
          />
        </div>
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
      <section className="relative min-h-screen flex flex-col items-center justify-center z-10">
        <div className="flex flex-col items-center justify-center w-full h-full">
          {/* Name (two lines, bold, uppercase, white) */}
          <h1 className="text-white text-5xl md:text-7xl font-extrabold uppercase font-michroma text-center leading-tight">
            Jay <br />Pipaliya
          </h1>
          {/* Subtitle */}
          <p className="text-white text-base md:text-xl font-light tracking-wide lowercase mt-2 mb-2 text-center">
            designer - coder - developer
          </p>
          {/* Profile Image (square/rounded, grayscale, centered) */}
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden grayscale border-4 border-white shadow-xl mx-auto">
            <Image
              src="/images/jay.jpg"
              alt="Jay Pipaliya"
              width={224}
              height={224}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* --- Fixed Bottom ABOUT Carousel --- */}
      <div className="fixed bottom-0 left-0 w-full bg-white py-2 z-30 overflow-hidden">
        <div className="relative w-full h-10 flex items-center">
          <div className="whitespace-nowrap font-extrabold text-blue-700 text-2xl md:text-3xl px-4 animate-marquee overflow-hidden">
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

      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
