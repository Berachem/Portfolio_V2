import { useEffect, useState } from "react";
import { Company } from "../types";

interface CompanySectionProps {
  companies: Company[];
}

export const CompanySection = ({ companies }: CompanySectionProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (companies.length === 0) return;

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * companies.length);
      setHoveredIndex(randomIndex);

      // Reset hover effect after a short delay
      setTimeout(() => {
        setHoveredIndex(null);
      }, 800); // Duration of hover effect
    }, 1500); // Interval between hover effects

    return () => clearInterval(interval);
  }, [companies]);

  return (
    <div className="flex flex-wrap gap-8 justify-center p-6">
      {companies.map((company, index) => (
        <img
          key={company.name}
          src={company.logo}
          alt={company.name}
          className={`grayscale transition-all duration-300 w-15 h-24 object-contain mx-auto ${
            hoveredIndex === index ? "grayscale-0 scale-110" : ""
          }`}
        />
      ))}
    </div>
  );
};
