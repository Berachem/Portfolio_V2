import { Merit } from '../types';

interface MeritSectionProps {
  merits: Merit[];
}

export const MeritSection = ({ merits }: MeritSectionProps) => {
  return (
    <div className="space-y-4">
      {merits.map((merit, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
        >
          <p className="text-gray-700 dark:text-gray-300">{merit.description}</p>
        </div>
      ))}
    </div>
  );
};