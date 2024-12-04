import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Education } from "../types";
import { faAward } from "@fortawesome/free-solid-svg-icons";

interface EducationCardProps {
  education: Education;
}

export const EducationCard = ({ education }: EducationCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 transform hover:scale-[1.02] transition-transform duration-300">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
        <div className="flex items-start sm:items-center gap-4">
          {education.logo && (
            <img
              src={education.logo}
              alt={`${education.school} logo`}
              className="w-12 sm:w-16 md:w-20 object-contain rounded-lg"
            />
          )}

          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
              {education.degree}
            </h3>

            <h4 className="text-sm sm:text-md md:text-lg text-gray-700 dark:text-gray-300 mt-1">
              {education.school}
            </h4>
            {education.major && (
              <span className="text-xs sm:text-sm bg-red-500 text-white mt-2 px-2 py-1 rounded-full">
                <FontAwesomeIcon
                  icon={faAward}
                  className="mr-2 text-yellow-300 animate-pusle-slow"
                />
                Major de promotion
              </span>
            )}
          </div>
        </div>
        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
          {education.period}
        </span>
      </div>
      <p className="text-sm sm:text-md text-gray-600 dark:text-gray-300 mb-4">
        {education.description}
      </p>
      {education.achievements && (
        <ul className="list-disc list-inside text-sm sm:text-md text-gray-600 dark:text-gray-300">
          {education.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
