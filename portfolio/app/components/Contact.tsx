'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="w-6 h-6" />,
      url: 'https://github.com/yourusername',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-6 h-6" />,
      url: 'https://linkedin.com/in/yourusername',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Email',
      icon: <FaEnvelope className="w-6 h-6" />,
      url: 'mailto:your.email@example.com',
      color: 'hover:text-red-500'
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-black via-zinc-900 to-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-400/20 via-transparent to-transparent" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-gray-300 text-2xl mb-8">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl text-gray-400 transition-colors ${link.color}`}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <a
            href="mailto:your.email@example.com"
            className="bg-yellow-400 text-black px-8 py-3 rounded-full text-2xl hover:bg-yellow-300 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 