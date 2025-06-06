'use client'

import { motion } from 'framer-motion'

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }

  return (
    <section id="about" className="min-h-screen py-20 px-4 relative flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-5xl font-bold mb-8 text-center">About Me</h2>
            <div className="space-y-6">
              <p className="text-gray-300 text-2xl leading-relaxed">
                I'm a passionate full-stack developer with a keen eye for design and user experience.
                I love creating beautiful, functional, and responsive web applications that solve real-world problems.
              </p>
              <p className="text-gray-300 text-2xl leading-relaxed">
                My journey in web development started with a curiosity to understand how things work on the internet,
                which quickly grew into a passion for building interactive and engaging digital experiences.
              </p>
              <p className="text-gray-300 text-2xl leading-relaxed">
                I specialize in modern web technologies and frameworks, always staying up-to-date with the latest trends
                and best practices in the industry. My goal is to create seamless user experiences that not only look
                great but also perform exceptionally well.
              </p>
              <p className="text-gray-300 text-2xl leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge with the developer community. I believe in continuous learning and pushing the
                boundaries of what's possible on the web.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 