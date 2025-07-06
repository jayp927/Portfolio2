'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="w-10 h-10" />,
      url: 'https://github.com/jayp927',
      color: 'hover:text-yellow-400'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-10 h-10" />,
      url: 'https://www.linkedin.com/in/jay-pipaliya-117369326/',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Email',
      icon: <FaEnvelope className="w-10 h-10" />,
      url: 'mail.to:jaypipaliya0101@gmail.com',
      color: 'hover:text-red-500'
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 relative min-h-screen">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-stretch">
        {/* Left Side: Info & Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col justify-center mb-12 md:mb-0"
        >
          <h2 className="text-5xl font-bold mb-6 text-left">Let's Work Together</h2>
          <p className="text-gray-300 text-2xl mb-10 text-left">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
          <div className="mt-4">
            <h3 className="text-2xl font-bold mb-6 text-left">Connect with me</h3>
            <div className="flex flex-col gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 text-2xl text-gray-400 transition-colors ${link.color}`}
                >
                  {link.icon}
                  <span style={{ fontFamily: 'var(--font-bitcount-griddouble)', fontSize: '1.2em', letterSpacing: '0.04em' }}>
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col justify-center"
        >
          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={6}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="border border-white text-white px-6 py-3 rounded-full text-lg hover:bg-white hover:text-blue-600 transition-colors shadow-lg flex items-center justify-center mx-auto disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-yellow-400/80 hover:shadow-lg"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'} <span className="ml-2">→</span>
            </button>
            {submitStatus === 'success' && (
              <p className="text-green-400 mt-4">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-400 mt-4">Failed to send message. Please try again.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 