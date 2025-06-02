'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Footer from '../components/Footer'
import Skills from '../components/Skills'

export default function About() {
  const { scrollY } = useScroll()
  const rotateShip = useTransform(scrollY, [0, 700], [0, 360])

  const anim = (variants: any) => ({
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants,
  })

  const shipVariants = {
    initial: {
      y: 200,
      opacity: 0,
    },
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1.2,
        type: 'spring',
        ease: [0.45, 0, 0.55, 1],
      },
    },
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Main Container */}
      <div className="w-full h-[85vh] bg-black text-white rounded-b-[3.3rem] shadow-lg overflow-hidden flex flex-row items-center justify-between px-10 pt-20">
        <div>
          <h1 className="text-4xl md:text-5xl italic font-serif border-t-2 w-fit leading-[4rem]">
            Developer
          </h1>
        </div>

        <Image
          src="/images/jay.jpg"
          alt="Profile picture"
          priority
          width={400}
          height={400}
          className="rounded-[8%] shadow-lg shadow-gray-600"
        />

        <div className="flex flex-row-reverse mb-6 mt-2">
          <h2 className="text-4xl md:text-5xl italic font-serif text-yellow-400 border-b-2 border-yellow-400 w-fit leading-[4rem]">
            Engineer
          </h2>
        </div>
      </div>

      {/* Spaceship Section */}
      <div className="flex justify-center">
        <motion.div
          style={{ rotate: rotateShip }}
          className="relative -top-20 md:-top-24 max-w-fit"
          {...anim(shipVariants)}
        >
          <Image
            src="/images/spaceship.png"
            alt="free astronaut"
            width={200}
            height={400}
            className="object-contain md:w-60"
          />
        </motion.div>
      </div>

      {/* About Text Sections */}
      <div className="px-4 md:px-8 lg:px-16">
        <p className="text-lg md:text-xl mb-10 -mt-2">
          I am a passionate frontend developer and creative engineer, dedicated to transforming ideas into reality through innovative web solutions.
        </p>
        <p className="text-lg md:text-xl mb-10">
          With a strong foundation in modern web technologies and a keen eye for design, I strive to create engaging and user-friendly digital experiences.
        </p>
      </div>

      <Skills />

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

      <Footer />
    </main>
  )
} 