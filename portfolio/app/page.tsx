'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs } from 'react-icons/si'
import dynamic from 'next/dynamic'

const SunScene = dynamic(() => import('./components/SunScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] flex items-center justify-center bg-black/20 rounded-lg">
      <div className="text-gray-400">Loading 3D Scene...</div>
    </div>
  ),
})

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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-400/20 via-transparent to-transparent" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center">
            {/* Name Text */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-bold text-center leading-none mb-12"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
                JAY PIPALIYA
              </span>
            </motion.h1>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-[300px] h-[200px] mb-12"
            >
              <Image
                src="/images/jay.jpg"
                alt="Jay Pipaliya"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </motion.div>

            {/* Role and CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Full Stack Developer & UI/UX Enthusiast
              </p>
              <Link
                href="/projects"
                className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors"
              >
                View My Work
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate full-stack developer with a keen eye for design and user experience.
                I love creating beautiful, functional, and responsive web applications that solve real-world problems.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <SunScene />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 bg-zinc-900"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
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
                <span className="text-gray-300">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-gray-300 text-lg mb-8">
              Have a project in mind? I'd love to hear about it. Let's create something amazing together.
            </p>
            <Link
              href="/contact"
              className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}
