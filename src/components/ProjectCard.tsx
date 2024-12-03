import { Link } from "react-router-dom";
import { Project } from "../types";
import { faChrome, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  // Déterminer si la thumbnail est une vidéo ou une image
  const isVideo = project.thumbnail?.endsWith(".mp4") || project.thumbnail?.endsWith(".webm");


 // Définir les icônes associées à chaque clé
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
      {project.thumbnail && (
        isVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[800px] object-cover"
          >
            <source src={project.thumbnail} type="video/mp4" />
          </video>
        ) : (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-[800px] object-cover"
          />
        )
      )}

      {/* Texte affiché en bas */}
      <div className="absolute inset-x-0 bottom-20 flex items-center justify-center">
        <div className="bg-blue-600/90 text-white p-6 rounded-lg shadow-2xl text-center w-10/12 sm:w-8/12 lg:w-6/12 hover:bg-white-600/90 transition-colors duration-300">
                <h3 className="text-xl font-bold mb-2 uppercase">
                  {project.title}
                </h3>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex justify-center gap-2 flex-wrap">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center  px-3 py-1 rounded-full text-sm"
                    >
                      <img
                        src={`https://skillicons.dev/icons?i=${tech.toLowerCase()}`}
                        alt={tech}
                        className="inline-block h-8 w-8 icon-animated"
                      />
                
                    </span>
                  ))}
                   {project.links && Object.entries(project.links).map(([key, url]) => (
                        <a
                          key={key}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 rounded-full text-sm bg-white text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                        >
                          {iconMap[key] && <FontAwesomeIcon icon={iconMap[key]} />}
                          <span className="capitalize">{key}</span>
                        </a>
                      ))}
                </div>
         </div>
      </div>
    </Link>
  );
};
