'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import useProjects from '../hooks/useProjects'
import useMedia from '../hooks/useMedia'
import { Project } from '../types'

const projectsWords = Array(60).fill('PROJECTS').join(' · ');

const Projects = () => {
  const projects: Project[] = useProjects()
  const { isMobile } = useMedia()
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const currentProject = projects[currentProjectIndex]

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length)
    setCurrentImageIndex(0)
  }

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentProject.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentProject.images.length) % currentProject.images.length)
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

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
    <section id="projects" className="py-20 px-0 relative">
      {/* PROJECTS Carousel */}
      <div className="relative w-full bg-[#eee] py-2 z-0 overflow-hidden flex flex-col items-center justify-end">
        <div className="relative w-full h-16 flex items-center overflow-hidden">
          <span className="whitespace-nowrap font-extrabold text-blue-900 text-2xl tracking-wide px-2 animate-marquee">
            {projectsWords}
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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="max-w-6xl pt-5 mx-auto relative z-10"
      >
        <motion.h2
          variants={itemVariants}
          className="text-5xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>

        <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentProjectIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.5
              }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8"
            >
              <div className="relative aspect-video mb-8 rounded-xl overflow-hidden">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={`${currentProjectIndex}-${currentImageIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full relative"
                  >
                    <Image
                      src={currentProject.images[currentImageIndex]}
                      alt={currentProject.name}
                      fill
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/70 px-4 py-2 rounded-full">
                  <button onClick={prevImage} className="text-white hover:text-yellow-400 transition-colors">
                    ←
                  </button>
                  <span className="text-white text-sm">
                    {currentImageIndex + 1} / {currentProject.images.length}
                  </span>
                  <button onClick={nextImage} className="text-white hover:text-yellow-400 transition-colors">
                    →
                  </button>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <motion.h3 className="text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-edu-nswact)' }}>{currentProject.name}</motion.h3>
                <motion.div className="space-y-4">
                  {currentProject.description.map((paragraph: string, index: number) => (
                    <motion.p 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="text-gray-300 text-lg leading-relaxed"
                      style={{ fontFamily: 'var(--font-edu-nswact)' }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h4 className="text-2xl font-bold text-white mb-4">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.techStack.map((tech: string, index: number) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="px-4 py-2 bg-yellow-400/10 text-yellow-400 rounded-full text-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="pt-4"
                >
                  <a
                    href={currentProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white text-white px-6 py-3 rounded-full text-lg hover:bg-white hover:text-blue-600 transition-colors shadow-lg inline-flex items-center"
                  >
                    View Project <span className="ml-2">→</span>
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={contentVariants}
            className="flex justify-between items-center bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 mt-6 sm:mt-8"
          >
            <motion.button
              variants={contentVariants}
              onClick={prevProject}
              className="text-white hover:text-yellow-400 transition-colors text-sm sm:text-base whitespace-nowrap"
            >
              <span className="hidden sm:inline">← Previous Project</span>
              <span className="sm:hidden">← Prev</span>
            </motion.button>
            <motion.span variants={contentVariants} className="text-white text-xs sm:text-sm">
              {currentProjectIndex + 1} / {projects.length}
            </motion.span>
            <motion.button
              variants={contentVariants}
              onClick={nextProject}
              className="text-white hover:text-yellow-400 transition-colors text-sm sm:text-base whitespace-nowrap"
            >
              <span className="hidden sm:inline">Next Project →</span>
              <span className="sm:hidden">Next →</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects 