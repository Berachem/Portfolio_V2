import { Company } from "../types";

interface CompanySectionProps {
  companies: Company[];
}

export const CompanySection = ({ companies }: CompanySectionProps) => {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-4">
      {companies.map((company) => (
        <img
          key={company.name}
          src={company.logo}
          alt={company.name}
          className={`w-32 h-16 sm:w-14 sm:h-20 md:w-60 md:h-24 object-contain mx-auto ${
            window.innerWidth < 640
              ? ""
              : "grayscale hover:grayscale-0 transition-all duration-300"
          }`}
        />
      ))}
    </div>
  );
};
