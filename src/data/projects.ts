import { Project } from '../types';


// ALL DEMOS
//import Countdown from '../assets/img/projects/videos/countdown.webm';
import CroisadeTrailer from '../assets/img/projects/videos/Croisade_Trailer.mp4';
import DemoCarbuviz from '../assets/img/projects/videos/Demo_Carbuviz.mp4';
import DemoGIGBot from '../assets/img/projects/videos/Demo_GIG-Bot.mp4';
import DemoAzul from '../assets/img/projects/videos/demoazul.mp4';
import DemoEco from '../assets/img/projects/videos/demoeco.mp4';
//import DemoGraphes from '../assets/img/projects/videos/demographes.mp4';
import DemoKontabl from '../assets/img/projects/videos/demokontabl.mp4';
import DemoLoop from '../assets/img/projects/videos/demoloop.mp4';
import DemoUnesco from '../assets/img/projects/videos/demounesco.mp4';
import DemoZarza from '../assets/img/projects/videos/demozarza.mp4';
//import RapizzTrailer from '../assets/img/projects/videos/Rapizz_Trailer.mp4';
import SaveTheCatsDemo from '../assets/img/projects/videos/saveTheCatsDemo.mp4';
import SpaceInvaderDemo from '../assets/img/projects/videos/space_invader_demo.mp4';

// Unesco
import UnescoAd from '../assets/img/projects/unesco/ad.jpg';
import UnescoHome from '../assets/img/projects/unesco/ile_de_la_cite.jpg';
import UnescoNotreDame from '../assets/img/projects/unesco/notre_dame.jpg';
import UnescoPalais from '../assets/img/projects/unesco/palais_justice.jpg';
import UnescoPontNeuf from '../assets/img/projects/unesco/pont_neuf.jpg';
import UnescoSainteChapelle from '../assets/img/projects/unesco/sainte_chapelle.jpg';


// Eco-tidien
import EcoTidienFigma from '../assets/img/projects/eco-tidien/figma.jpg';

// Kontabl
import KontablHomepagePO from '../assets/img/projects/kontabl/homepage_PO.jpg';
import KontablHomepageShop from '../assets/img/projects/kontabl/homepage_shop.jpg';
import KontablLogin from '../assets/img/projects/kontabl/login.jpg';
import KontablStats from '../assets/img/projects/kontabl/stats.jpg';

// Loop Hero
import LoopHeroFighting from '../assets/img/projects/loophero/fighting.jpg';
import LoopHeroIngame from '../assets/img/projects/loophero/ingame.jpg';

// Zoo-ggle
import ZooggleHome from '../assets/img/projects/zoo-ggle/zoo_ggle_landing.png';
import ZooggleArchitecture from '../assets/img/projects/zoo-ggle/architecture.jpg';
import ZooggleCMD from '../assets/img/projects/zoo-ggle/cmd_zooggle.png';
import ZooggleGrille from '../assets/img/projects/zoo-ggle/grille_zooggle.png';
import ZooggleIdealisticIngame from '../assets/img/projects/zoo-ggle/idealistic_in_game.jpg';
import ZooggleIdealistic from '../assets/img/projects/zoo-ggle/idealistic.jpg';
import ZooggleRealisticIngame from '../assets/img/projects/zoo-ggle/realistic_ingame.jpg';
import ZooggleRealistic from '../assets/img/projects/zoo-ggle/realistic.jpg';
import ZooggleTrello from '../assets/img/projects/zoo-ggle/trello_zooggle.png';
//import ZooggleLogoBlack from '../assets/img/projects/zoo-ggle/zooggle-black.png';
import ZooggleV1 from '../assets/img/projects/zoo-ggle/zooggle_v1.jpg';
//import ZooggleLogoWhite from '../assets/img/projects/zoo-ggle/zooggle.png';

// Thèses
import ThesesHome from '../assets/img/projects/theses/these_home.png';

// Martingale
import Martingale from '../assets/img/projects/martingale/martingale.jpg';

// Rapizz
import RapizzHome from '../assets/img/projects/rapizz/rapizz_home.png';

export const projects: Project[] = [
  {
    id: 'unesco-ile-cite',
    title: "Île de la Cité, Paris 🏛️🌍",
    description: "Chef de projet pour la conception d'un site web valorisant le patrimoine mondial de l'Île de la Cité à Paris.",
    longDescription: "Conception d'un site Web pour valoriser un patrimoine mondial en partenariat avec l'UNESCO, incluant la cathédrale Notre-Dame et l'ancien Palais de Justice.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    thumbnail: DemoUnesco,
    gallery: [{ media: DemoUnesco, caption: "Démonstration du projet UNESCO" },
              { media: UnescoHome, caption: "Page d'accueil du site" },
              { media: UnescoNotreDame, caption: "Cathédrale Notre-Dame" },
              { media: UnescoPalais, caption: "Palais de Justice" },
              { media: UnescoPontNeuf, caption: "Pont Neuf" },
              { media: UnescoSainteChapelle, caption: "Sainte-Chapelle" },
              { media: UnescoAd, caption: "Publicité du site" }],
  
    role: "Chef de Projet",
    duration: "6 mois",
    links: {
      github: "https://github.com/Berachem/IledelaCite_Unesco",
      website: "http://iledelacite-paris.fr/src/index.php",
    },
  },
  {
    id: 'zoo-ggle',
    title: "Zoo-ggle 🦁",
    description: "Jeu de mots multijoueur en ligne inspiré de Boggle.",
    longDescription: "Plateforme de jeu en ligne permettant de trouver le plus de mots possible en utilisant les lettres du plateau de jeu. Jouable en solo ou en multijoueur.",
    technologies: ["React", "TypeScript", "PHP", "MySQL", "C", "Java", "Python"],
    thumbnail: ZooggleHome,
    gallery: [{ media: ZooggleHome, caption: "Page d'accueil de Zoo-ggle" },
              { media: ZooggleIdealistic, caption: "Interface utilisateur du mode Idéaliste" },
              { media: ZooggleRealistic, caption: "Interface utilisateur du mode Réaliste" },
              { media: ZooggleIdealisticIngame, caption: "Jeu en mode Idéaliste" },
              { media: ZooggleRealisticIngame, caption: "Jeu en mode Réaliste" },
              { media: ZooggleArchitecture, caption: "Architecture de Zoo-ggle" },
              { media: ZooggleCMD, caption: "Interface de commande de Zoo-ggle" },
              { media: ZooggleGrille, caption: "Grille de jeu de Zoo-ggle" },
              { media: ZooggleTrello, caption: "Organisation du projet sur Trello" },
              { media: ZooggleV1, caption: "Première version de Zoo-ggle" }],


    role: "Développeur Full-Stack",
    duration: "4 mois",
    links: {
      documentation: "https://docs.google.com/document/d/1HvlYzxMcQ87QlavMk3Z_jaXWTemJKZzu9LXvUgGAL3Y/edit?usp=sharing",
    },
  },
  {
    id: 'azul-game',
    title: "Azul Game (IA)",
    description: "Jeu de plateau Azul avec une IA intégrée.",
    longDescription: "Adaptation du jeu de plateau Azul en Python avec une IA capable de jouer à différents niveaux de difficulté. Intégration d'un système de sauvegarde et d'une interface graphique.",
    technologies: ["Python", "Tkinter", "IA"],
    thumbnail: DemoAzul,
    gallery: [{ media: DemoAzul, caption: "Gameplay Azul Game" }],
    role: "Développeur Principal",
    duration: "3 mois",
    links: {
      github: "https://github.com/Berachem/Azul-Game",
      website: "https://berachem.dev/Azul-Game/",
    },
  },
  {
    id: 'kontabl',
    title: "Kontabl 💰",
    description: "Portail web pour la consultation des comptes de commerçants.",
    longDescription: "Développement d'une plateforme dédiée à la gestion et à la consultation des comptes pour les commerçants et entreprises.",
    technologies: ["PHP", "MySQL"],
    thumbnail: DemoKontabl,
    gallery: [{ media: DemoKontabl, caption: "Interface utilisateur Kontabl" },
              { media: KontablHomepagePO, caption: "Page d'accueil pour les Product Owner" },
              { media: KontablHomepageShop, caption: "Page d'accueil pour les commerçants" },
              { media: KontablLogin, caption: "Page de connexion" },
              { media: KontablStats, caption: "Statistiques des ventes" }],

    role: "Développeur Full-Stack",
    duration: "4 mois",
    links: {
      github: "https://github.com/Berachem/kontabl",
      website: "https://kontabl.berachem.dev/#/login",
      documentation: "https://drive.google.com/drive/folders/1MlSPmzLcCJm4KJoZTvuvrkUGpMf7DZQX?usp=sharing",
    },
  },
  {
    id: 'robot-gig-bot',
    title: "Robot GIG-Bot 🚓🤖",
    description: "Conception d'un robot éclaireur autonome.",
    longDescription: "Création d'un robot autonome qui se déplace, détecte et évite des obstacles grâce à des capteurs, LEDs, et des moteurs.",
    technologies: ["Assembleur"],
    thumbnail: DemoGIGBot,
    gallery: [{ media: DemoGIGBot, caption: "Prototype du robot GIG-Bot" }],
    role: "Développeur Principal",
    duration: "3 mois",
    links: {
      github: "https://github.com/Berachem/eval-bot",
      website: "https://berachem.dev/eval-bot/",
    },
  },
  {
    id: 'theses',
    title: "Thèses 📚",
    description: "Plateforme répertoriant toutes les thèses soutenues en France depuis 1960.",
    longDescription: "Site web permettant de rechercher et de visualiser des thèses soutenues en France. Inclut des graphiques et statistiques pour une analyse approfondie.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Python"],
    thumbnail: ThesesHome,
    gallery: [{ media: ThesesHome, caption: "Interface utilisateur du site Thèses" }],
    role: "Développeur Full-Stack",
    duration: "6 mois",
    links: {
      website: "https://these.berachem.dev/",
      documentation: "https://www.data.gouv.fr/fr/datasets/theses-soutenues-en-france-depuis-1985/",
    },
  },
  {
    id: 'eco-tidien',
    title: "App Eco-tidien 🌱",
    description: "Application mobile pour guider dans des choix écologiques.",
    longDescription: "Maquettage d'une application mobile dédiée à guider les utilisateurs dans leurs choix quotidiens pour une planète plus verte.",
    technologies: ["Figma"],
    thumbnail: DemoEco,
    gallery: [{ media: DemoEco, caption: "Prototype Eco-tidien" },
              { media: EcoTidienFigma, caption: "Maquette Figma" }],
    role: "Designer UI/UX",
    duration: "2 mois",
    links: {
      documentation: "https://drive.google.com/file/d/1D9wPyUApHtgXigsubJyvIEHDy02rnfgS/view?usp=sharing",
    },
  },
  {
    id: 'loop-hero',
    title: "Loop-Hero ⚔️🔁",
    description: "Jeu Roguelike et Deck-building où un héros est bloqué dans une boucle temporelle.",
    longDescription: "Développement d'un jeu stratégique où le héros affronte des monstres tout en étant coincé dans une boucle temporelle.",
    technologies: ["Java"],
    thumbnail: DemoLoop,
    gallery: [{ media: DemoLoop, caption: "Capture d'écran de Loop-Hero" },
              { media: LoopHeroIngame, caption: "Jeu Loop-Hero" },
              { media: LoopHeroFighting, caption: "Combat dans Loop-Hero" }],

    role: "Développeur Principal",
    duration: "5 mois",
    links: {
      github: "https://github.com/Berachem/LoopHero",
      website: "https://berachem.dev/LoopHero/",
    },
  },
  {
    id: 'croisade',
    title: "Croisade 🔴⚔️🟢⚔️🔵",
    description: "Jeu de stratégie basé sur des algorithmes IA de plus court chemin.",
    longDescription: "Création d'un jeu où trois factions (🔴, 🟢, 🔵) s'affrontent. Chaque faction suit une stratégie IA avancée pour vaincre les adversaires.",
    technologies: ["Python", "IA"],
    thumbnail: CroisadeTrailer,
    gallery: [{ media: CroisadeTrailer, caption: "Démonstration Croisade" }],
    role: "Développeur IA",
    duration: "6 mois",
    links: {
      github: "https://github.com/Berachem/Croisade",
      website: "https://berachem.dev/Croisade/",
    },
  },
  {
    id: 'save-the-cats',
    title: "Save The Cats",
    description: "Jeu de sauvetage de chats dans des villages en feu avec des niveaux variés.",
    longDescription: "Vous incarnez un héros sauvant des chats pris dans des incendies. Le but est de les transporter en sécurité dans le temps le plus court possible.",
    technologies: ["Unity", "C#"],
    thumbnail: SaveTheCatsDemo,
    gallery: [{ media: SaveTheCatsDemo, caption: "Gameplay Save the Cats" }],
    role: "Développeur Unity",
    duration: "4 mois",
    links: {
      github: "https://github.com/Berachem/SaveTheCats",
    },
  },
  {
    id: 'nasa-pic',
    title: "NASA pic of the day 🚀",
    description: "Affichage de la photo du jour de la NASA.",
    longDescription: "Le site permet de visualiser la photo du jour de la NASA, avec une description et des informations supplémentaires.",
    technologies: ["PHP", "JavaScript"],
    thumbnail: "https://as1.ftcdn.net/v2/jpg/01/01/42/64/1000_F_101426449_2mhwexDmrvGW7JWT94jPeOZble75zFmr.jpg",
    gallery: [{ media: "https://as1.ftcdn.net/v2/jpg/01/01/42/64/1000_F_101426449_2mhwexDmrvGW7JWT94jPeOZble75zFmr.jpg", caption: "Exemple d'affichage de l'image du jour." }],
    role: "Développeur Full-Stack",
    duration: "1 mois",
    links: {
        github: "https://github.com/Berachem/nasa",
        website: "https://nasa.berachem.dev/"
    },
},
{
    id: 'hotel-ski',
    title: "Back Office Hotel-Ski ⛷️",
    description: "Gestion des réservations d'un hôtel dans une station de ski.",
    longDescription: "Conception d'un site Web pour un hôtel dans une station de ski. Le site, couplé à une base de données sous PostgreSQL, permet de gérer les réservations des clients et les besoins du manager de l'hôtel.",
    technologies: ["PHP", "MySQL", "PostgreSQL"],
    thumbnail: DemoZarza,
    gallery: [{ media: DemoZarza, caption: "Interface de gestion des réservations." }],
    role: "Développeur Full-Stack",
    duration: "3 mois",
    links: {
        github: "https://github.com/Berachem/Ski-Low-Cost",
        website: "https://perso-etudiant.u-pem.fr/~berachem.markria/Ski/",
        documentation: "https://drive.google.com/file/d/1Oj4rOfNvkFu8jdusTCdNx7rJVqq2cyIN/view?usp=sharing"
    },
},
{
    id: 'algorithmes-graphes',
    title: "Algorithmes Graphes avancés 🌶️",
    description: "Conception d'algorithmes en Python en lien avec la Théorie des graphes.",
    longDescription: "Implémentation de fonctions telles que la déterminisation, complémentation, minimisation, etc., en collaboration avec Nidal IDRISSI.",
    technologies: ["Python"],
    thumbnail: "https://medias.pourlascience.fr/api/v1/images/view/5efb0234d286c252eb4f05e6/wide_1300/image.jpg",
    gallery: [{ media: "https://medias.pourlascience.fr/api/v1/images/view/5efb0234d286c252eb4f05e6/wide_1300/image.jpg", caption: "Illustration des concepts de graphes." }],
    role: "Développeur Python",
    duration: "4 mois",
    links: {
        github: "https://github.com/Berachem/AlgorithmesGraphesAutomates",
        website: "https://berachem.dev/AlgorithmesGraphesAutomates/"
    },
},
{
    id: 'martingale',
    title: "Stratégie de la Martingale (Casino) 🎲",
    description: "Simulation d'une stratégie mathématique pour maximiser les gains au Casino.",
    longDescription: "Développement d'une application permettant de calculer les mises optimales en utilisant la stratégie de la Martingale.",
    technologies: ["Python"],
    thumbnail: Martingale,
    gallery: [{ media: Martingale, caption: "Simulation de la stratégie Martingale." }],
    role: "Développeur Python",
    duration: "1 mois",
    links: {
        github: "https://github.com/Berachem/Strategie-maths-casino"
    },
},
{
  id: 'rapizz',
  title: "Rapizz 🍕",
  description: "Gestion des commandes d'une pizzeria.",
  longDescription: "Développement d'une application permettant la gestion des commandes, des stocks et des livraisons pour une pizzeria.",
  technologies: ["Java", "MySQL"],
  thumbnail: RapizzHome,
  gallery: [{ media: RapizzHome, caption: "Interface utilisateur de Rapizz" }],
  role: "Développeur Full-Stack",
  duration: "2 mois",
  links: {
      github: "https://github.com/Berachem/rapizz",
      website: "https://rapizz.berachem.dev/"
  },

},
  {
    id: 'carbuviz',
    title: "Carbuviz 🔋",
    description: "Application de visualisation des consommations de carburant.",
    longDescription: "Création d'une application permettant de visualiser les consommations et d'optimiser les trajets en fonction des besoins énergétiques.",
    technologies: ["Python", "Matplotlib"],
    thumbnail: DemoCarbuviz,
    gallery: [{ media: DemoCarbuviz, caption: "Démonstration Carbuviz" }],
    role: "Développeur Python",
    duration: "3 mois",
    links: {
        github: "https://github.com/Berachem/carbuviz"
    }
  },

  {
    id : 'space-invader',
    title: "Space Invader 🚀",
    description: "Jeu de tir spatial inspiré de Space Invaders.",
    longDescription: "Développement d'un jeu de tir spatial en Python avec Pygame, inspiré du célèbre jeu Space Invaders.",
    technologies: ["Cs", ".Net"],
    thumbnail: SpaceInvaderDemo,
    gallery: [{ media: SpaceInvaderDemo, caption: "Gameplay Space Invader" }],
    role: "Développeur Principal",
    duration: "2 mois",
    links: {
        website : "https://berachem.dev/SpaceInvader/",
        documentation : "https://berachem.dev/space-invaders/Rapport_Space_Invaders.pdf",
        github: "https://github.com/Berachem/space-invaders"
  }
},

  // Rajouter Projet :
   // Projet Machine Learning (CyberSécurité)
   // Traitements d'images 
   // Configuration DHCP


];
