import { Project } from '../types'

const useProjects = (): Project[] => {
  return [
    {
      name: 'Helper Buddy',
      description: [
        '🚀 A comprehensive service marketplace platform built during Google Winter of Code at SVNIT, designed to connect users with skilled service providers.',
        'The platform offers a seamless experience for finding and booking various services, from plumbing and electrical work to beauty services, making everyday service needs more accessible and efficient.',
        'Key features include smart service discovery with advanced filters and customer reviews, a comprehensive admin dashboard for analytics, a robust service provider verification system, secure authentication with OTP verification, blog management capabilities, and seamless payment integration with Razorpay.'
      ],
      techStack: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Razorpay',
        'Firebase'
      ],
      images: [
        '/images/projects/project1-1.png',
        '/images/projects/project1-2.png',
        '/images/projects/project1-3.png'
      ],
      url: 'https://helper-buddy.vercel.app'
    },
    {
      name: 'Project Two',
      description: [
        'Description for project two will go here.',
        'This is a placeholder for the second project description.'
      ],
      techStack: [
        'React',
        'Node.js',
        'MongoDB',
        'Express'
      ],
      images: [
        '/images/projects/project1-1.png',
        '/images/projects/project1-2.png',
        '/images/projects/project1-3.png'
      ],
      url: 'https://project-two.com'
    }
  ]
}

export default useProjects 