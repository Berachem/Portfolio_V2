import { Skill } from '../../types';

interface SkillSectionProps {
    skills: Skill[];
}

export const SkillSection = ({ skills }: SkillSectionProps) => {
    return (
        <div className="grid ">
            {skills.map((skill) => (
                <div
                    key={skill.category}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 my-4"
                >
                    <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                        {skill.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {skill.items.map((item, index) =>
                            typeof item === 'string' ? (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center"
                                >
                                    <span className="px-2 py-1 text-sm text-gray-700 dark:text-gray-300">
                                        <img
                                            src={`https://skillicons.dev/icons?i=${item.toLowerCase()}`}
                                            alt={item}
                                            className="inline-block mr-2 h-10 w-10 icon-animated"
                                        />
                                    </span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                        {item}
                                    </span>
                                </div>
                            ) : (
                                <div
                                    key={item.name}
                                    className="flex flex-col items-center justify-center"
                                >
                                    <span className="px-2 py-1 text-sm text-gray-700 dark:text-gray-300">
                                        <img
                                            src={item.url}
                                            alt={item.name}
                                            className="inline-block mr-2 h-8 w-30 icon-animated"
                                        />
                                    </span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                        {item.name}
                                    </span>
                                </div>
                            )
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};
