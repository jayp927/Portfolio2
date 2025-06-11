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
  SiHtml5,
  SiCss3,
  SiCplusplus,
  SiPython,
  SiMysql,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const frontendSkills = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'];
const backendSkills = ['Node.js', 'Express', 'MongoDB', 'Firebase', 'REST APIs', 'JWT'];
const codingSkills = ['C++', 'Data Structures', 'Algorithms', 'LeetCode', 'Codeforces', 'Problem Solving'];

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
    <section id="skills" className="py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-10 text-white">Skills</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6 max-w-5xl mx-auto">
        {/* Frontend Card */}
        <div className="w-[280px] flex flex-col items-center rounded-xl shadow-lg bg-gradient-to-b from-blue-900/60 to-blue-700/40 p-8">
          <h3 className="text-xl font-semibold text-white mb-4">Frontend</h3>
          <div className="flex flex-col items-start space-y-4 px-4">
            <div className="flex items-center gap-2">
              <div className="text-4xl md:text-5xl text-white"><SiHtml5 /></div>
              <span className="text-white text-lg">HTML5</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-4xl md:text-5xl text-white"><SiCss3 /></div>
              <span className="text-white text-lg">CSS3</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-4xl md:text-5xl text-white"><SiJavascript /></div>
              <span className="text-white text-lg">JavaScript</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-4xl md:text-5xl text-white"><SiReact /></div>
              <span className="text-white text-lg">React</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-4xl md:text-5xl text-white"><SiNextdotjs /></div>
              <span className="text-white text-lg">Next.js</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-4xl md:text-5xl text-white"><SiTailwindcss /></div>
              <span className="text-white text-lg">Tailwind CSS</span>
            </div>
          </div>
        </div>
        {/* Backend Card */}
        <div className="w-[280px] flex flex-col items-center rounded-xl shadow-lg bg-gradient-to-b from-green-900/60 to-green-700/40 p-8">
          <h3 className="text-xl font-semibold text-white mb-4">Backend</h3>
          <div className="flex flex-col items-start space-y-4 px-4">
            <div className="flex items-center gap-2">
              <div className="text-4xl md:text-5xl text-white"><SiNodedotjs /></div>
              <span className="text-white text-lg">Node.js</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-4xl md:text-5xl text-white"><SiExpress /></div>
              <span className="text-white text-lg">Express</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-4xl md:text-5xl text-white"><SiMongodb /></div>
              <span className="text-white text-lg">MongoDB</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-4xl md:text-5xl text-white"><SiMysql /></div>
              <span className="text-white text-lg">MySQL</span>
            </div>
          </div>
        </div>
        {/* Coding Card */}
        <div className="w-[280px] flex flex-col items-center rounded-xl shadow-lg bg-gradient-to-b from-yellow-700/60 to-yellow-500/40 p-8">
          <h3 className="text-xl font-semibold text-white mb-4">Coding</h3>
          <div className="flex flex-col items-start space-y-4 px-4">
            <div className="flex items-center gap-2">
              <div className="text-4xl md:text-5xl text-white"><SiCplusplus /></div>
              <span className="text-white text-lg">C++</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-4xl md:text-5xl text-white"><SiPython /></div>
              <span className="text-white text-lg">Python</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-4xl md:text-5xl text-white"><FaJava /></div>
              <span className="text-white text-lg">Java</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 