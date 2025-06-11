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

      {/* Navbar (top) */}
      <section className="w-full text-center pt-2 pb-2">
        <nav>
          <ul className="inline-flex items-center justify-center space-x-6 text-white text-sm tracking-wider">
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
        <h1 className="text-white text-5xl md:text-8xl font-extrabold uppercase font-michroma leading-tight">Jay <br />Pipaliya</h1>
        <p className="text-white text-base md:text-xl font-light tracking-wide lowercase mt-2">designer - coder - developer</p>
      </section>

      {/* Image + Carousel (bottom) */}
      <section className="w-full relative flex flex-col items-center justify-end pb-0">
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
