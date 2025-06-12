import { Project } from '../types'

const useProjects = (): Project[] => {
  return [
    {
      "name": "Helper Buddy",
      "description": [
        "🚀 A comprehensive service marketplace platform built during Google Winter of Code at SVNIT, designed to connect users with skilled service providers.",
        "Key features include smart service discovery with advanced filters and customer reviews, a comprehensive admin dashboard for analytics, a robust service provider verification system, secure authentication with OTP verification, blog management capabilities, and seamless payment integration with Razorpay."
      ],
      "techStack": [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Razorpay",
        "Firebase"
      ],
      "images": [
        "/images/projects/project1-1.png",
        "/images/projects/project1-2.png",
        "/images/projects/project1-3.png"
      ],
      "url": "https://dudh-kela.netlify.app/"
    },
    {
      "name": "No Cow Factory",
      "description": [
        "🚀 Introducing No Cow Factory – A Zero Cow Factory Replica! 🐄❌",
        "Excited to share a frontend – No Cow Factory, a replica of Zero Cow Factory's website! 🌱✨ Built using Next.js, Framer Motion, and TypeScript, this project was all about refining our UI/UX and animation skills while crafting a smooth, responsive, and visually appealing experience. Though it's just a frontend showcase, we focused on attention to detail, modern design principles, and seamless interactions to bring our vision to life.",
      ],
      "techStack": ["Next.js", "Framer Motion", "TypeScript"],
      "url": "https://no-cow-factory.vercel.app/",
      "images": [
        "/images/projects/project2-1.png",
        "/images/projects/project2-2.png",
      ]
    }
  ]
}

export default useProjects