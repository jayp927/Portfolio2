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
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProjectIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8"
            >
              <div className="relative w-full h-[450px] mb-8 rounded-xl overflow-hidden bg-zinc-900">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
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

              <div className="space-y-6 px-4 md:px-8 lg:px-16 py-4">
                <motion.h3 variants={contentVariants} className="text-4xl font-bold text-white">{currentProject.name}</motion.h3>
                <motion.div variants={contentVariants} className="space-y-4">
                  {currentProject.description.map((paragraph: string, index: number) => (
                    <motion.p key={index} variants={contentVariants} className="text-gray-300 text-lg leading-relaxed">
                      {paragraph}
                    </motion.p>
                  ))}
                </motion.div>
                <motion.div variants={contentVariants}>
                  <h4 className="text-2xl font-bold text-white mb-4">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.techStack.map((tech: string, index: number) => (
                      <motion.span
                        key={index}
                        variants={contentVariants}
                        className="px-4 py-2 bg-yellow-400/10 text-yellow-400 rounded-full text-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
                {currentProject.collaborators && (
                  <motion.div variants={contentVariants}>
                    <h4 className="text-2xl font-bold text-white mb-4">Collaborators:</h4>
                    <div className="flex flex-wrap gap-4">
                      {currentProject.collaborators.map((collaborator: { name: string; role: string; linkedin: string; }, index: number) => (
                        <motion.a
                          key={index}
                          variants={contentVariants}
                          href={collaborator.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-yellow-400 transition-colors border-b border-gray-600 hover:border-yellow-400"
                        >
                          {collaborator.name} - {collaborator.role}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}
                <motion.div variants={contentVariants} className="pt-4">
                  <a
                    href={currentProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white text-white px-6 py-3 rounded-full text-lg hover:bg-white hover:text-blue-600 transition-colors shadow-lg inline-flex items-center"
                  >
                    View Project <span className="ml-2">→</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={contentVariants}
            className="flex justify-between items-center bg-white/5 backdrop-blur-sm rounded-xl p-4 mt-8"
          >
            <motion.button
              variants={contentVariants}
              onClick={prevProject}
              className="text-white hover:text-yellow-400 transition-colors"
            >
              ← Previous Project
            </motion.button>
            <motion.span variants={contentVariants} className="text-white text-sm">
              {currentProjectIndex + 1} / {projects.length}
            </motion.span>
            <motion.button
              variants={contentVariants}
              onClick={nextProject}
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Next Project →
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects 