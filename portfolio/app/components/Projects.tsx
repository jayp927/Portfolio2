'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A full-stack web application built with Next.js and TypeScript",
      image: "/images/project1.jpg",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "Project 2",
      description: "A responsive web application with modern UI/UX",
      image: "/images/project2.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    // Add more projects as needed
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-black via-zinc-900 to-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-400/20 via-transparent to-transparent" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-black/50 rounded-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-full hover:bg-yellow-300 transition-colors"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 