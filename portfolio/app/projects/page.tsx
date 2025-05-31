'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'

// Sample project data - replace with your actual projects
const projects = [
  {
    name: "E-Commerce Platform",
    images: [
      "/images/projects/project1-1.png",
      "/images/projects/project1-2.png",
      "/images/projects/project1-3.png",
    ],
    description: [
      "A full-featured e-commerce platform built with Next.js and TypeScript.",
      "Features include user authentication, product search, shopping cart, and payment integration."
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Stripe"],
    collaborators: [
      { name: "John Doe", role: "Backend Developer", linkedin: "https://linkedin.com/in/johndoe" },
      { name: "Jane Smith", role: "UI/UX Designer", linkedin: "https://linkedin.com/in/janesmith" }
    ],
    url: "https://example.com/project"
  },
  // Add more projects here
]

const Projects = () => {
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
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProjectIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8"
          >
            {/* Image Carousel */}
            <div className="relative w-full h-[450px] mb-8 rounded-lg overflow-hidden bg-gray-900">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={currentProject.images[currentImageIndex]}
                    alt={currentProject.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Image Navigation */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/70 px-4 py-2 rounded-full">
                <button
                  onClick={prevImage}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  ←
                </button>
                <span className="text-sm text-white">
                  {currentImageIndex + 1} / {currentProject.images.length}
                </span>
                <button
                  onClick={nextImage}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  →
                </button>
              </div>
            </div>

            {/* Project Info */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">{currentProject.name}</h2>
              
              <div className="space-y-4">
                {currentProject.description.map((paragraph, index) => (
                  <p key={index} className="text-gray-300 text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {currentProject.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/10 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Collaborators */}
              {currentProject.collaborators && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">Collaborators</h3>
                  <div className="flex flex-wrap gap-4">
                    {currentProject.collaborators.map((collaborator, index) => (
                      <a
                        key={index}
                        href={collaborator.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white border-b border-gray-600 hover:border-white transition-colors"
                      >
                        {collaborator.name} - {collaborator.role}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Link */}
              <div className="pt-4">
                <a
                  href={currentProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Project Navigation */}
        <div className="flex justify-between items-center bg-white/5 backdrop-blur-sm rounded-xl p-4">
          <button
            onClick={prevProject}
            className="text-white hover:text-gray-300 transition-colors"
          >
            ← Previous Project
          </button>
          <span className="text-sm text-gray-400">
            {currentProjectIndex + 1} / {projects.length}
          </span>
          <button
            onClick={nextProject}
            className="text-white hover:text-gray-300 transition-colors"
          >
            Next Project →
          </button>
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default Projects 