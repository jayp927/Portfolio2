export interface Project {
  name: string;
  description: string[];
  techStack: string[];
  images: string[];
  url: string;
  github?: string;
  collaborators?: {
    name: string;
    role: string;
    linkedin: string;
  }[];
} 