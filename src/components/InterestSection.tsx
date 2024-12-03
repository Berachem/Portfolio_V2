import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Interest } from '../types';

interface InterestSectionProps {
  interests: Interest[];
}

export const InterestSection = ({ interests }: InterestSectionProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {interests.map((interest) => (
        <div
          key={interest.text}
          className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
        >
          <span className="text-2xl">{ typeof interest.icon === 'string' ? interest.icon :
          
          <FontAwesomeIcon icon={interest.icon} className="text-2xl text-gray-800 dark:text-white" />
          }</span>
          
  
          <span className="text-gray-700 dark:text-gray-300">{interest.text}</span>
        </div>
      ))}
    </div>
  );
};