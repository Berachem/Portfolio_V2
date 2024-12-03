import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Education } from '../types';
import { faAward } from '@fortawesome/free-solid-svg-icons';

interface EducationCardProps {
  education: Education;
}

export const EducationCard = ({ education }: EducationCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          {education.logo && (
            <img
              src={education.logo}
              alt={`${education.school} logo`}
              className="w-16 object-contain rounded-lg"
            />
          )}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {education.degree} 
              {education.major && 
                <span className="text-sm bg-red-500 text-white mx-2 px-2 py-1 rounded-full">
                  <FontAwesomeIcon icon={faAward} className="mr-2 text-yellow-300" />
                  Major de promotion
                  </span>
              }
                
        
            </h3>
            <h4 className="text-lg text-gray-700 dark:text-gray-300 mt-1">
              {education.school} 
            </h4>
          </div>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {education.period}
        </span>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{education.description}</p>
      {education.achievements && (
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
          {education.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
