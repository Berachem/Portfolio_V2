import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export interface Project {

  id: string;

  // INFORMATIONS
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];

  // VISUEL
  thumbnail?: string; // video or image
  gallery: Record<string, string>[]; // { "media": "url", "caption": "text" }

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
  technologies: string[];
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
  items: string[] | string[][];
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