import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import { projects } from '../data/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollDownProgressBar from '../components/utils/ScrollDownProgressBar';
import { faArrowLeft, faHome } from '@fortawesome/free-solid-svg-icons';
import { iconMap } from '../components/ProjectCard';
import BeraImage from '../assets/img/moi_bg.png';

export const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const projectIndex = projects.findIndex((p) => p.id === id);
    const project = projects[projectIndex];

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">
                        Projet non trouvé
                    </h1>
                    <Link
                        to="/"
                        className="text-blue-500 hover:text-blue-600 flex items-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Retour à l'accueil
                    </Link>
                </div>
            </div>
        );
    }

    const nextProject =
        projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;
    const previousProject =
        projectIndex > 0 ? projects[projectIndex - 1] : null;

    return (
        <div className="flex flex-col">
            <ScrollDownProgressBar />

            {/* Thumbnail Section */}
            <div className="relative w-full h-[80vh] bg-gray-200 dark:bg-gray-700">
                {project.thumbnail &&
                    (project.thumbnail.endsWith('.mp4') ||
                    project.thumbnail.endsWith('.webm') ? (
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src={project.thumbnail} type="video/mp4" />
                        </video>
                    ) : (
                        <img
                            src={project.thumbnail}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    ))}
            </div>

            {/* Content Section */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-white dark:bg-gray-800">
                {/* Navigation */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                    {previousProject && (
                        <button
                            onClick={() =>
                                navigate(`/project/${previousProject.id}`)
                            }
                            className="text-white bg-blue-600 hover:bg-blue-800 dark:bg-blue-900 px-4 py-2 rounded-lg flex items-center gap-2"
                        >
                            <FontAwesomeIcon
                                icon={faArrowLeft}
                                className="mr-2"
                            />
                            {previousProject.title}
                        </button>
                    )}
                    <Link
                        to="/"
                        className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 dark:text-gray-300"
                    >
                        <FontAwesomeIcon icon={faHome} />
                        Retour aux projets
                    </Link>
                    {nextProject && (
                        <button
                            onClick={() =>
                                navigate(`/project/${nextProject.id}`)
                            }
                            className="text-white bg-blue-600 hover:bg-blue-800 dark:bg-blue-900 px-4 py-2 rounded-lg flex items-center gap-2"
                        >
                            {nextProject.title}
                            <FontAwesomeIcon
                                icon={faArrowLeft}
                                className="transform rotate-180 ml-2"
                            />
                        </button>
                    )}
                </div>

                {/* Title and Details */}
                <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white text-center sm:text-left">
                    {project.title}
                </h1>

                <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                    {project.role && project.duration && (
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                            <img
                                src={BeraImage}
                                alt="Bera"
                                className="w-8 h-8 rounded-full"
                            />
                            <span>{project.role}</span> |{' '}
                            <Calendar className="w-5 h-5" /> {project.duration}
                        </div>
                    )}
                </div>

                {/* Long Description */}
                <p className="mt-4 text-gray-600 dark:text-gray-300 whitespace-pre-line text-justify">
                    {project.longDescription}
                </p>

                {/* Links & Technologies */}
                <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech as string}
                            className="flex items-center px-3 py-1 rounded-full text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
                        >
                            {typeof tech === 'string' ? (
                                <img
                                    src={`https://skillicons.dev/icons?i=${tech.toLowerCase()}`}
                                    alt={tech}
                                    className="inline-block h-6 w-6 mr-2"
                                />
                            ) : (
                                <FontAwesomeIcon
                                    icon={tech}
                                    className="text-lg text-blue-500"
                                />
                            )}
                            {typeof tech === 'string' ? tech : null}
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
                                <span className="hidden sm:block sm:ml-1">
                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                </span>
                            </a>
                        ))}
                </div>

                {/* Gallery Section */}
                <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {project.gallery
                        .filter((item) => item.media !== project.thumbnail) // Exclude thumbnail
                        .map((item, index) => (
                            <div
                                key={index}
                                className="items-center bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md"
                            >
                                {item.media.endsWith('.mp4') ||
                                item.media.endsWith('.webm') ? (
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-24 sm:h-56 object-cover rounded-lg"
                                    >
                                        <source
                                            src={item.media}
                                            type="video/mp4"
                                        />
                                    </video>
                                ) : (
                                    <img
                                        src={item.media}
                                        alt={
                                            item.caption || `Image ${index + 1}`
                                        }
                                        className="w-full h-24 sm:h-56 object-cover rounded-lg"
                                    />
                                )}
                                <p className="mt-2 text-center text-gray-700 dark:text-gray-300 text-sm">
                                    {item.caption}
                                </p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};
