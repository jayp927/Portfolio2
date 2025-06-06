'use client'

import { motion } from 'framer-motion'
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiJavascript,
  SiGit,
  SiDocker,
  SiPostgresql,
  SiRedux,
  SiExpress,
} from 'react-icons/si'

const Skills = () => {
  const skills = [
    {
      name: 'Next.js',
      icon: <SiNextdotjs className="w-12 h-12" />,
      color: 'text-white',
      description: 'Full-stack React framework for production',
    },
    {
      name: 'React',
      icon: <SiReact className="w-12 h-12" />,
      color: 'text-blue-500',
      description: 'JavaScript library for building user interfaces',
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript className="w-12 h-12" />,
      color: 'text-blue-600',
      description: 'Typed superset of JavaScript',
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss className="w-12 h-12" />,
      color: 'text-cyan-500',
      description: 'Utility-first CSS framework',
    },
    {
      name: 'Node.js',
      icon: <SiNodedotjs className="w-12 h-12" />,
      color: 'text-green-600',
      description: 'JavaScript runtime environment',
    },
    {
      name: 'MongoDB',
      icon: <SiMongodb className="w-12 h-12" />,
      color: 'text-green-500',
      description: 'NoSQL database',
    },
    {
      name: 'Firebase',
      icon: <SiFirebase className="w-12 h-12" />,
      color: 'text-orange-500',
      description: 'Backend-as-a-Service platform',
    },
    {
      name: 'JavaScript',
      icon: <SiJavascript className="w-12 h-12" />,
      color: 'text-yellow-500',
      description: 'Programming language of the web',
    },
    {
      name: 'Git',
      icon: <SiGit className="w-12 h-12" />,
      color: 'text-orange-600',
      description: 'Version control system',
    },
    {
      name: 'Express',
      icon: <SiExpress className="w-12 h-12" />,
      color: 'text-gray-200',
      description: 'Web application framework for Node.js',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-white/20"
            >
              <div className={`${skill.color} mb-4`}>{skill.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {skill.name}
              </h3>
              <p className="text-sm text-gray-300 text-center">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 