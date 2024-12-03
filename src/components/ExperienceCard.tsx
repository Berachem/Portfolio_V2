import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Experience } from '../types';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          {experience.logo && (
            <img
              src={experience.logo}
              alt={`${experience.company} logo`}
              className="w-24 object-contain rounded-lg"
            />
          )}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
              {experience.role}
              {experience.isNew && (
                <span className="text-sm bg-purple-500 text-white px-2 py-1 rounded-full">
                   <FontAwesomeIcon icon={faStar} className="text-yellow-300" /> New
                </span>
              )}
            </h3>
            <h4 className="text-lg text-gray-700 dark:text-gray-300 mt-1">
              {experience.company}
            </h4>
          </div>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {experience.period}
        </span>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{experience.description}</p>
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1  text-sm text-gray-700 dark:text-gray-300"
          >
             <img src={"https://skillicons.dev/icons?i=" + tech.toLowerCase()} alt={tech} className="inline-block h-10 w-10 icon-animated" />
       
          </span>
        ))}
        
      </div>
    </div>
  );
};
