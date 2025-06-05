'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const SunScene = dynamic(() => import('./SunScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] flex items-center justify-center bg-black/20 rounded-lg">
      <div className="text-gray-400">Loading 3D Scene...</div>
    </div>
  ),
})

const About = () => {
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

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-black via-zinc-900 to-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-400/20 via-transparent to-transparent" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-5xl font-bold mb-6">About Me</h2>
            <p className="text-gray-300 text-2xl leading-relaxed">
              I'm a passionate full-stack developer with a keen eye for design and user experience.
              I love creating beautiful, functional, and responsive web applications that solve real-world problems.
              My journey in web development started with a curiosity to understand how things work on the internet,
              which quickly grew into a passion for building interactive and engaging digital experiences.
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
  )
}

export default About 