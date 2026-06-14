import { motion } from "framer-motion";
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
    <section id="experience" className="py-16 px-6 bg-white">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-black mb-8">
            Work Experience
          </h2>
          
          <div className="space-y-8 mb-12">
            {experiences.map((exp: any, i: number) => {
              const Icon = iconMap[exp.icon_name] || Briefcase;
              return (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0 text-gray-500">
                    <Icon size={16} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-black text-sm sm:text-base leading-tight">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">
                      {exp.role}
                    </p>
                    <span className="inline-block text-[10px] font-semibold tracking-wider text-gray-400 mt-2">
                      {exp.period?.toUpperCase()}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-full h-px bg-gray-100" />
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
