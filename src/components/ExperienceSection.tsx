import { Briefcase, Terminal, Globe } from "lucide-react";
import { useExperiences } from "@/hooks/usePortfolioData";

const iconMap: Record<string, any> = { Briefcase, Terminal, Globe };

const fallback = [
  { role: "Software Developer", company: "TechnoLean Lab", period: "APR 2026 – PRESENT", icon_name: "Terminal" },
  { role: "Flutter App Development Intern", company: "Innova Workmen", period: "JUL 2024 – SEP 2024", icon_name: "Terminal" },
  { role: "Front End Web Development Intern", company: "Brain Ex World", period: "AUG 2023 – OCT 2023", icon_name: "Briefcase" },
  { role: "WordPress Developer", company: "Freelance", period: "2022 – 2023", icon_name: "Globe" },
];

const ExperienceSection = () => {
  const { data } = useExperiences();
  const experiences = data ?? fallback;

  return (
    <section id="experience" className="py-12 border-b border-gray-200">
      <span className="text-xs font-extrabold tracking-widest text-gray-600 uppercase block mb-6">
        Work Experience
      </span>
      
      <div className="space-y-0">
        {experiences.map((exp: any, i: number) => {
          const Icon = iconMap[exp.icon_name] || Briefcase;
          return (
            <div
              key={i}
              className="flex gap-4 items-start py-4 first:pt-0 last:pb-0 border-b border-gray-100 last:border-b-0"
            >
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-gray-600">
                <Icon size={14} />
              </div>
              <div className="flex-1 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                <div>
                  <h3 className="font-bold text-black text-sm leading-tight">
                    {exp.company}
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5 leading-snug">
                    {exp.role}
                  </p>
                </div>
                <span className="text-[10px] sm:text-xs font-semibold text-gray-400 whitespace-nowrap">
                  {exp.period?.toUpperCase()}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;
