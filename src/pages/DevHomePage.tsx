import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Section } from "../components/Section";
import { ThemeToggle } from "../components/ThemeToggle";
import { ProjectCard } from "../components/ProjectCard";
import { ExperienceCard } from "../components/ExperienceCard";
import { EducationCard } from "../components/EducationCard";
import { SkillSection } from "../components/SkillSection";
import { InterestSection } from "../components/InterestSection";
import { MeritSection } from "../components/MeritSection";
import { CompanySection } from "../components/CompanySection";
import { projects } from "../data/projects";

import Logo_AA_Partners from "../assets/img/organizations/aa.png";
import Logo_Enedis from "../assets/img/organizations/enedis.png";
import Logo_Unesco from "../assets/img/organizations/unesco_filled.png";
import { Experience, Interest, Skill } from "../types";
import { Carousel } from "flowbite-react";
import StatsSection from "../components/StatsSection";
import Footer from "../components/Footer";
import ScrollProgressBar from "../components/ScrollDownProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";

import TOEIC from "../assets/img/organizations/toeic.png";
import {
  faCheck,
  faCheckCircle,
  faCode,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";
import ScrollDownArrow from "../components/ScrollDownArrow";
import { useEffect, useState } from "react";

const experiences: Experience[] = [
  {
    company: "Enedis",
    role: "Lead Software Engineer & Product Owner",
    period: "septembre 2023 - 2026",
    description:
      "Application liée à la cartographie du réseau et chantiers électriques de la région Île de France-Est",
    technologies: ["React", "TypeScript", "Symfony"],
    logo: Logo_Enedis,
    isNew: true,
  },
  {
    company: "A&A Partners",
    role: "Développeur Mobile (IOS & Android)",
    period: "septembre 2022 - juillet 2023",
    description:
      "Développement d'applications mobiles pour des clients comme Yves Saint Laurent, Musée Picasso, BNF, etc.",
    technologies: ["Flutter", "Dart", "Python"],
    logo: Logo_AA_Partners,
    isNew: false,
  },
  {
    company: "Université Gustave Eiffel",
    role: "Chef de Projet UNESCO",
    period: "septembre 2021 - juillet 2022",
    description:
      "Conception d'un site web en partenariat avec l'UNESCO pour valoriser le patrimoine de l'Île de la Cité à Paris.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    logo: Logo_Unesco,
    isNew: false,
  },
];

const education = [
  {
    school: "ESIEE Paris",
    degree: "Diplôme d'ingénieur, Informatique",
    period: "2023 - 2026",
    description:
      "Formation d'ingénieur généraliste en informatique en apprentissage.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfAkzg-z2PX9bb3joJ3tVTrXDEd7_0N2Onzw&s",
    achievements: [
      "Projets avancés en développement logiciel.",
      "Apprentissage en alternance chez Enedis.",
    ],
    major: true,
  },
  {
    school: "Université Gustave Eiffel",
    degree: "BUT Informatique",
    period: "2021 - 2023",
    description: "Formation en informatique avec spécialisation Fullstack.",
    logo: "https://www.univ-gustave-eiffel.fr/typo3conf/ext/eiffel/Resources/Public/images/logoRS-UGE.png",
    achievements: ["Partenariat avec l'UNESCO."],
    major: true,
  },
];

// Utilisation dans un composant parent
<EducationCard education={education[0]} />;

const skills: Skill[] = [
  {
    category: "Langages de Programmation",
    items: [
      "React",
      "TypeScript",
      "Flutter",
      "Dart",
      "Symfony",
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "Java",
      "C",
      "Cs",
      "Bash",
      "Lua",
    ],
  },
  {
    category: "Systèmes & Logiciels",
    items: [
      "MySQL",
      "PostgreSQL",
      "Bootstrap",
      "Tailwind",
      "Linux",
      "Git",
      "Github",
      "Postman",
      "Figma",
      "MongoDB",
      "AWS",
      "Unity",
      "Matlab",
    ],
  },
  {
    category: "Certifications",
    items: [["TOEIC (B2/C1)", TOEIC]],
  },
];

const interests: Interest[] = [
  { icon: "⚛️", text: "Théories Scientifiques et Découvertes" },
  {
    icon: faBitcoin,
    text: "Cryptomonnaies & Blockchain (BTC, ETH, XRP, CHZ...)",
  },
  { icon: "🔧", text: "Hardware / Software" },
  { icon: "⚽", text: "Football" },
  { icon: "🚴‍♂️", text: "Vélo" },
  { icon: "🎷", text: "Musique (Jazz, Chill, Hip Hop)" },
  { icon: "✈️", text: "Voyages (Londres, Dubaï, Istanbul...)" },
];

const merits = [
  {
    description:
      "Chef de projet de la conception d'un site Web en partenariat avec l'UNESCO.",
  },
  { description: "Major de promotion en BUT Informatique." },
  {
    description:
      "Participant au concours national de Mathématiques des lycéens.",
  },
];

const companies = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
  },
  {
    name: "Crédit Agricole",
    logo: "https://logo-marque.com/wp-content/uploads/2021/03/Credit-Agricole-Logo.png",
  },
  {
    name: "Société Générale",
    logo: "https://www.gide.com/sites/default/files/societe-generale-logo_2.png",
  },
  {
    name: "Ministère de l'Économie et des Finances",
    logo: "https://exag.fr/wp-content/uploads/2020/11/Logo_Ministe%CC%80re_de_le%CC%81conomie_et_des_finances_2020.png",
  },
  {
    name: "Safran",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/5/5f/Safran_-_logo_2016.png/1200px-Safran_-_logo_2016.png",
  },
  {
    name: "Enedis",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/7/77/Logo_enedis_header.png/1200px-Logo_enedis_header.png",
  },
  {
    name: "Thales",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4e/Logo_Thales.svg/1024px-Logo_Thales.svg.png",
  },
  {
    name: "Renault",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Renault_2021_Text.svg",
  },
];

export const DevHomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <ThemeToggle />
      <ScrollProgressBar />
      <ScrollDownArrow />

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <img
            src="https://berachem.dev/assets/img/moi_bg_navy.png"
            alt="Berachem Markria"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full mx-auto mb-6 sm:mb-8 shadow-lg hover:scale-105 transition-transform animate-border inline-block bg-white bg-gradient-to-r from-blue-600 via-purple-500 to-white-500 bg-[length:400%_400%] p-1"
            onClick={() => window.location.replace("/crypto")}
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-white">
            Berachem
            <span className="text-blue-600 ml-2">MARKRIA</span>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
            Bonjour, je suis Lead Software Engineer apprenti & Passionné de
            développement
            <FontAwesomeIcon
              icon={faCode}
              className="w-4 h-4 sm:w-5 sm:h-5 inline-block ml-2 sm:ml-3 text-blue-600 animate-bounce"
            />
          </p>
          <div className="flex justify-center space-x-3 sm:space-x-4">
            <a
              href="mailto:berachem.markria@gmail.com"
              className="hover:scale-110 transition-transform"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300 icon-animated" />
            </a>
            <a
              href="tel:+33629161164"
              className="hover:scale-110 transition-transform"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300 icon-animated" />
            </a>
            <a
              href="https://github.com/Berachem"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300 icon-animated" />
            </a>
            <a
              href="https://linkedin.com/in/berachem-markria"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300 icon-animated" />
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/*  <Section title="À propos">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Bonjour ! Je m'appelle Berachem Markria, j'ai 21 ans et je suis ingénieur apprenti en informatique. 
              Passionné par le développement logiciel, je me spécialise dans la création d'applications web modernes 
              et performantes.
            </p>
          </div>
        </Section> */}

        {/* Projects Section */}
        <Section title="Projets">
          <div
            className="relative w-full h-[300px] sm:h-[600px] md:h-[800px]" // Hauteur dynamique
            id="projects"
          >
            <Carousel
              indicators={false}
              slideInterval={5000} // Durée d'affichage de chaque slide
              className="h-full relative"
              onSlideChange={(index) => setCurrentIndex(index)}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex flex-col sm:flex-row justify-center items-center p-4"
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </Carousel>
            {/* Custom Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {projects.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex
                      ? "bg-blue-500 dark:bg-blue-300"
                      : "bg-gray-400 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-500"
                  }`}
                ></div>
              ))}
            </div>
          </div>

          {/* Stats projets */}
          <div className="flex mt-4 sm:mt-6 font-semibold text-gray-600 dark:text-gray-300 items-center">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="w-4 h-4 text-green-500 mr-2"
            />
            {projects.length} projets réalisés
          </div>
          <div className="flex mt-4 sm:mt-6 font-semibold text-gray-600 dark:text-gray-300 items-center">
            <FontAwesomeIcon
              icon={faCodeBranch}
              className="w-4 h-4 text-blue-500 mr-2 animate-pulse"
            />
            ET 3 projets en cours...
          </div>
        </Section>

        {/* Experience Section */}
        <Section title="Expérience Professionnelle">
          <div className="space-y-8">
            {experiences.map((experience) => (
              <ExperienceCard
                key={experience.company}
                experience={experience}
              />
            ))}
          </div>
        </Section>

        {/* Education Section */}
        <Section title="Formation">
          <div className="space-y-8">
            {education.map((edu) => (
              <EducationCard key={edu.school} education={edu} />
            ))}
          </div>
        </Section>

        {/* Skills Section */}
        <Section title="Compétences">
          <SkillSection skills={skills} />
        </Section>

        {/* Interests Section */}
        <Section title="Intérêts">
          <InterestSection interests={interests} />
          {/* Crypto button redirect */}
          <div className="flex justify-center">
            <button
              onClick={() => window.location.replace("/crypto")}
              className="inline-block px-4 py-2 text-sm font-semibold text-white bg-orange-400 rounded-lg shadow-lg hover:bg-orange-700 mt-5 "
            >
              Voir ma page d'investisseur{" "}
              <FontAwesomeIcon
                icon={faBitcoin}
                className="w-6 h-6 inline-block ml-2 animate-bounce"
              />
            </button>
          </div>
        </Section>

        {/* Merits Section */}
        <Section title="Mérites">
          <MeritSection merits={merits} />
        </Section>

        <Section title="Stats">
          <StatsSection />
        </Section>

        {/* Companies Section */}
        <Section title="Entreprises intéressées">
          <CompanySection companies={companies} />
        </Section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};
