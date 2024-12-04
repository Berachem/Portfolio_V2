import { Link } from "react-router-dom";
import { Project } from "../types";
import { faChrome, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const isVideo =
    project.thumbnail?.endsWith(".mp4") || project.thumbnail?.endsWith(".webm");

  const iconMap: Record<string, any> = {
    github: faGithub,
    website: faChrome,
    documentation: faFileAlt,
  };

  return (
    <Link
      to={`/project/${project.id}`}
      className="group relative block shadow-lg overflow-hidden w-full rounded-3xl"
    >
      {/* Affichage de l'image ou vidéo */}
      {project.thumbnail &&
        (isVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-48 sm:h-64 md:h-80 lg:h-[800px] object-cover"
          >
            <source src={project.thumbnail} type="video/mp4" />
          </video>
        ) : (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-48 sm:h-64 md:h-80 lg:h-[800px] object-cover"
          />
        ))}

      {/* Texte affiché en bas */}
      <div className="absolute inset-x-0 bottom-10 sm:bottom-16 flex items-center justify-center">
        <div className="bg-blue-600/90 text-white p-4 sm:p-6 rounded-lg shadow-2xl text-center w-11/12 sm:w-9/12 md:w-8/12 lg:w-6/12 hover:bg-blue-500 transition-colors duration-300">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 uppercase">
            {project.title}
          </h3>
          {/* Description visible uniquement à partir de la taille sm */}
          <p className="hidden sm:block text-xs sm:text-sm md:text-base mb-4">
            {project.description}
          </p>
          <div className="flex justify-center gap-2 flex-wrap">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="flex items-center px-2 sm:px-3 py-1 rounded-full text-sm"
              >
                <img
                  src={`https://skillicons.dev/icons?i=${tech.toLowerCase()}`}
                  alt={tech}
                  className="inline-block h-6 w-6 sm:h-8 sm:w-8 icon-animated"
                />
              </span>
            ))}
            {project.links &&
              Object.entries(project.links).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 sm:w-auto sm:h-auto px-3 sm:px-4 py-1 rounded-full bg-white text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  {iconMap[key] && (
                    <FontAwesomeIcon
                      icon={iconMap[key]}
                      className="text-xl sm:text-base"
                    />
                  )}
                </a>
              ))}
          </div>
        </div>
      </div>
    </Link>
  );
};
