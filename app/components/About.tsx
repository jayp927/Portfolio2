'use client'

import { motion } from 'framer-motion'

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="min-h-screen py-20 px-4 relative flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-5xl font-bold mb-8 text-center" style={{ fontFamily: 'var(--font-edu-nswact)' }}>About Me</motion.h2>
          <div className="flex flex-col w-full">
            <motion.p variants={itemVariants} className="text-gray-300 text-2xl leading-relaxed max-w-md self-start text-left" style={{ fontFamily: 'var(--font-edu-nswact)' }}>
              I'm a passionate full-stack developer with a keen eye for design and user experience. I love creating beautiful, functional, and responsive web applications that solve real-world problems.
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-300 text-2xl leading-relaxed max-w-md self-end text-right mt-4" style={{ fontFamily: 'var(--font-edu-nswact)' }}>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 