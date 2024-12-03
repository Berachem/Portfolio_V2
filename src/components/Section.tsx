interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ title, children, className = '' }: SectionProps) => {
  return (
    <section className={`py-16 ${className}`}>
      <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">
        {title}
      </h2>
      {children}
    </section>
  );
};