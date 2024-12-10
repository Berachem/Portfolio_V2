import { IconDefinition } from "@fortawesome/free-brands-svg-icons";


export interface ProjectTag {
  name: string;
  shortName: string;
  emoji: string;
  color: string;
}


export const ProjectTags = {
  WEB_DEVELOPMENT: { name: "Web Development", shortName: "Web", emoji: "🌐", color: "blue" },
  APP_DEVELOPMENT: { name: "App Development", shortName: "App", emoji: "📱", color: "green" },
  MOBILE_DEVELOPMENT: { name: "Mobile Development", shortName: "Mobile", emoji: "📱", color: "purple" },
  AI: { name: "AI", shortName: "AI", emoji: "🤖", color: "red" },
  DATA_ANALYSIS: { name: "Data Analysis", shortName: "Data", emoji: "📊", color: "orange" },
  MACHINE_LEARNING: { name: "Machine Learning", shortName: "ML", emoji: "🧠", color: "yellow" },
  CYBERSECURITY: { name: "Cybersecurity", shortName: "Cyber", emoji: "🛡️", color: "black" },
  GAME_DEVELOPMENT: { name: "Game Development", shortName: "Games", emoji: "🎮", color: "cyan" },
  PARTNERSHIP: { name: "Partnership", shortName: "Partners", emoji: "🤝", color: "pink" },
  DEVOPS: { name: "DevOps", shortName: "DevOps", emoji: "⚙️", color: "gray" },
  OTHER: { name: "Other", shortName: "Other", emoji: "🔧", color: "brown" }
} as Record<string, ProjectTag>;


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