import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Experience } from "../types";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 transform hover:scale-[1.02] transition-transform duration-300">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
        <div className="flex items-start sm:items-center gap-4">
          {experience.logo && (
            <img
              src={experience.logo}
              alt={`${experience.company} logo`}
              className="w-16 sm:w-20 md:w-24 object-contain rounded-lg"
            />
          )}
          <div>
            {experience.isNew && (
              <span className="text-xs sm:text-sm bg-purple-500 text-white px-2 py-1 rounded-full mb-2">
                <FontAwesomeIcon icon={faStar} className="text-yellow-300" />{" "}
                New
              </span>
            )}
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
              {experience.role}
            </h3>
            <h4 className="text-sm sm:text-md md:text-lg text-gray-700 dark:text-gray-300 mt-1">
              {experience.company}
            </h4>
          </div>
        </div>
        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
          {experience.period}
        </span>
      </div>
      <p className="text-sm sm:text-md text-gray-600 dark:text-gray-300 mb-4">
        {experience.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 sm:px-3 py-1 text-sm text-gray-700 dark:text-gray-300 flex items-center"
          >
            <img
              src={`https://skillicons.dev/icons?i=${tech.toLowerCase()}`}
              alt={tech}
              className="inline-block h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
            />
          </span>
        ))}
      </div>
    </div>
  );
};
