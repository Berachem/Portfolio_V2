import { Merit } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

interface MeritSectionProps {
  merits: Merit[];
}

export const MeritSection = ({ merits }: MeritSectionProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
      <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-800 dark:text-white">
        Mes Mérites
      </h2>
      <ul className="space-y-3">
        {merits.map((merit, index) => (
          <li key={index} className="flex items-center gap-4">
            <FontAwesomeIcon
              icon={faTrophy}
              className="text-yellow-400 w-5 h-5 sm:w-6 sm:h-6"
            />
            <p className="text-gray-700 dark:text-gray-300">
              {merit.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
