import { Skill } from '../types';

interface SkillSectionProps {
  skills: Skill[];
}

export const SkillSection = ({ skills }: SkillSectionProps) => {
  return (
    <div className="grid ">
      {skills.map((skill) => (
        <div key={skill.category} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 my-4">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            {skill.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            
            { skill.items.length > 0 && typeof skill.items[0] === 'string' ? skill.items.map((item) => (
              <span
                key={item as string}
                className="px-2 py-1 text-sm text-gray-700 dark:text-gray-300"
              >
                
                <img src={"https://skillicons.dev/icons?i=" + (item as string).toLowerCase()} alt={item as string} className="inline-block mr-2 h-10 w-10 icon-animated" />
                {item as string}
     
              </span>
            ) ) : skill.items.map((item) => (
              <span
                key={Object.keys(item)[0]}
                className="px-2 py-1 text-sm text-gray-700 dark:text-gray-300"
              >
                <img src={Object.keys(item)[1] as string} alt={Object.keys(item)[0]} className="inline-block mr-2 h-10 w-10 icon-animated" />
                {Object.keys(item)[0]}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};