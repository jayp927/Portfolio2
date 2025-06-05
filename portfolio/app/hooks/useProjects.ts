export interface Project {
  name: string;
  description: string[];
  images: string[];
  techStack: string[];
  url: string;
  collaborators?: {
    name: string;
    role: string;
    linkedin: string;
  }[];
}

const projects: Project[] = [
  {
    name: "Portfolio Website",
    description: [
      "A modern portfolio website built with Next.js and TypeScript, featuring smooth animations and a responsive design.",
      "The site showcases my projects and skills with an interactive 3D scene and dynamic content loading."
    ],
    images: [
      "/images/project1.jpg",
      "/images/project2.jpg",
      "/images/project3.jpg"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
    url: "https://github.com/yourusername/portfolio"
  },
  {
    name: "E-commerce Platform",
    description: [
      "A full-featured e-commerce platform with real-time inventory management and secure payment processing.",
      "Built with modern web technologies and optimized for performance and user experience."
    ],
    images: [
      "/images/project4.jpg",
      "/images/project5.jpg"
    ],
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    url: "https://github.com/yourusername/ecommerce",
    collaborators: [
      {
        name: "John Doe",
        role: "Backend Developer",
        linkedin: "https://linkedin.com/in/johndoe"
      }
    ]
  }
];

const useProjects = () => {
  return projects;
};

export default useProjects; 