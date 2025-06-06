'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import useProjects from '../hooks/useProjects'
import useMedia from '../hooks/useMedia'

const Projects = () => {
  const projects = useProjects()
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

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="max-w-4xl mx-auto">
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

              <div className="space-y-6">
                <h3 className="text-4xl font-bold text-white">{currentProject.name}</h3>
                <div className="space-y-4">
                  {currentProject.description.map((paragraph, index) => (
                    <p key={index} className="text-gray-300 text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-4">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-yellow-400/10 text-yellow-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {currentProject.collaborators && (
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-4">Collaborators:</h4>
                    <div className="flex flex-wrap gap-4">
                      {currentProject.collaborators.map((collaborator, index) => (
                        <a
                          key={index}
                          href={collaborator.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-yellow-400 transition-colors border-b border-gray-600 hover:border-yellow-400"
                        >
                          {collaborator.name} - {collaborator.role}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                <div className="pt-4">
                  <a
                    href={currentProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full text-lg font-bold hover:bg-yellow-300 transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between items-center bg-white/5 backdrop-blur-sm rounded-xl p-4">
            <button
              onClick={prevProject}
              className="text-white hover:text-yellow-400 transition-colors"
            >
              ← Previous Project
            </button>
            <span className="text-white text-sm">
              {currentProjectIndex + 1} / {projects.length}
            </span>
            <button
              onClick={nextProject}
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Next Project →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 