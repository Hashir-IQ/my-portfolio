import { Briefcase, Terminal, Globe } from "lucide-react";
import { useExperiences } from "@/hooks/usePortfolioData";

const iconMap: Record<string, any> = { Briefcase, Terminal, Globe };

const fallback = [
  { role: "Flutter App Development Intern", company: "Innova Workmen", period: "JUL 2024 – SEP 2024", icon_name: "Terminal" },
  { role: "Front End Web Development Intern", company: "Brain Ex World", period: "AUG 2023 – OCT 2023", icon_name: "Briefcase" },
  { role: "WordPress Developer", company: "Freelance", period: "2022 – 2023", icon_name: "Globe" },
];

const ExperienceSection = () => {
  const { data } = useExperiences();
  const experiences = data ?? fallback;

  return (
    <section id="experience" className="py-12 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="text-sm font-bold tracking-widest text-white uppercase">
              Work Experience
            </h2>
          </div>
          
          <div className="md:col-span-8">
            <div className="space-y-6">
              {experiences.map((exp: any, i: number) => {
                const Icon = iconMap[exp.icon_name] || Briefcase;
                return (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0 text-white">
                      <Icon size={14} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white text-sm sm:text-base leading-tight">
                        {exp.company}
                      </h3>
                      <p className="text-sm text-gray-400 mt-1 leading-snug">
                        {exp.role}
                      </p>
                      <span className="inline-block text-[10px] font-semibold tracking-wider text-gray-500 mt-1.5">
                        {exp.period?.toUpperCase()}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-white/10 mt-10" />
      </div>
    </section>
  );
};

export default ExperienceSection;
