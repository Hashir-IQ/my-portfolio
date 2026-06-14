import { motion } from "framer-motion";
import { GraduationCap, Award, Users } from "lucide-react";
import { useEducation } from "@/hooks/usePortfolioData";

const iconMap: Record<string, any> = { GraduationCap, Award, Users };

const fallback = [
  { title: "Pak-Austria Fachhochschule", subtitle: "BS Computer Science", detail: "EXPECTED 2026", icon_name: "GraduationCap" },
  { title: "Google / Coursera", subtitle: "Google Cybersecurity Professional Certificate", detail: "CERTIFIED", icon_name: "Award" },
  { title: "Google Developer Groups", subtitle: "GDG On Campus Core Team", detail: "ACTIVE MEMBER", icon_name: "Users" },
];

const EducationSection = () => {
  const { data } = useEducation();
  const items = data ?? fallback;

  return (
    <section id="education" className="py-16 px-6 bg-white">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-black mb-8">
            Education
          </h2>
          
          <div className="space-y-8 mb-12">
            {items.map((item: any, i: number) => {
              const Icon = iconMap[item.icon_name] || GraduationCap;
              return (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0 text-gray-500">
                    <Icon size={16} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-black text-sm sm:text-base leading-tight">
                      {item.title || item.subtitle}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">
                      {item.title ? item.subtitle : ""}
                    </p>
                    <span className="inline-block text-[10px] font-semibold tracking-wider text-gray-400 mt-2">
                      {item.detail?.toUpperCase()}
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

export default EducationSection;
