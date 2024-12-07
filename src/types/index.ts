import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export interface Project {

  id: string;

  // INFORMATIONS
  title: string;
  description: string;
  longDescription: string;
  technologies:  (string | IconDefinition)[];

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