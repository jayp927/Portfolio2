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
  const fadeInUp = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const techStack = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#38BDF8' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  ]

  return (
    <motion.main 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SocialLinks />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black pt-7">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-400/20 via-transparent to-transparent" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center h-full">
          <div className="relative w-full max-w-lg mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-9xl font-bold text-center leading-none relative z-0"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
                JAY PIPALIYA
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute inset-0 flex items-center justify-center z-10 mt-[25vw] translate-y-12"
            >
              <Image
                src="/images/jay.jpg"
                alt="Jay Pipaliya"
                width={300}
                height={250}
                className="object-cover rounded-lg"
                priority
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center text-[23px] relative z-20 mt-[17vw]"
          >
            <p className="text-xl md:text-5xl font-semibold text-yellow-400 mb-8">
              Full Stack Developer & UI/UX Enthusiast
            </p>
            <a
              href="#projects"
              className="bg-yellow-400 text-black px-8 py-3 rounded-full text-2xl hover:bg-yellow-300 transition-colors"
            >
              View My Work
            </a>
          </motion.div>
        </div>
      </section>

      <About />
      <Skills />
      
      {/* Tech Stack Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-black via-zinc-900 to-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-400/20 via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-12"
          >
            Tech Stack
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-5 gap-8"
          >
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                variants={fadeInUp}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 flex items-center justify-center mb-4">
                  <tech.icon className="w-16 h-16" style={{ color: tech.color }} />
                </div>
                <span className="text-gray-300 text-xl">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Projects />
      <Contact />
    </motion.main>
  )
}
