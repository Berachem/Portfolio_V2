import { IconDefinition } from "@fortawesome/free-brands-svg-icons";


export enum ProjectTag {
  WEB_DEVELOPMENT = "Web Development",
  MOBILE_DEVELOPMENT = "Mobile Development",
  MACHINE_LEARNING = "Machine Learning",
  CYBERSECURITY = "Cybersecurity",
  GAME_DEVELOPMENT = "Game Development",
  DEVOPS = "DevOps",
  OTHER = "Other"
}

export interface Project {

  id: string;
  tags? : ProjectTag[];


  // INFORMATIONS
  title: string;
  description: string;
  longDescription: string;
  technologies:  (string | IconDefinition)[];
  partnersPeople?: Record<string, string>[];
  

  // VISUEL
  thumbnail?: string; // video or image
  gallery: Record<string, string>[]; // { "media": "url", "caption": "text" }
  partners?: Record<string, string>[]; // { "name": "url" }

  // DETAILS
  role?: string;
  duration?: string;
  challenges?: string[];
  feedbacks?: string[];

  // LINKS
  links?: Record<string, string>; // { "github": "url", "website": "url" , "documentation": "url" }
  
  
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: (string | IconDefinition)[];
  partners?: Record<string, string>[];
  logo?: string ;
  isNew?: boolean;
}

export interface Education {
  logo?: string;
  school: string;
  degree: string;
  period: string;
  description: string;
  achievements?: string[];
  major? : boolean;
}

export interface Skill {
  category: string;
  items:  (string | { name: string; url: string })[];
}

export interface Interest {
  icon: string | IconDefinition;
  text: string;
}

export interface Merit {
  description: string;
}

export interface Company {
  name: string;
  logo: string;
}

export interface CryptoProject {
  icon: string;
  name: string;
  symbol: string;
  description: string;
}