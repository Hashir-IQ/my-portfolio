import { GraduationCap, Award, Users } from "lucide-react";
import { useEducation } from "@/hooks/usePortfolioData";

const iconMap: Record<string, any> = { GraduationCap, Award, Users };

const fallback = [
  { title: "Pak-Austria Fachhochschule", subtitle: "BS Computer Science", detail: "EXPECTED 2026", icon_name: "GraduationCap" },
];

const EducationSection = () => {
  const { data } = useEducation();
  const items = data ?? fallback;

  return (
    <section id="education" className="py-12 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="text-sm font-bold tracking-widest text-white uppercase">
              Education
            </h2>
          </div>
          
          <div className="md:col-span-8">
            <div className="space-y-6">
              {items.map((item: any, i: number) => {
                const Icon = iconMap[item.icon_name] || GraduationCap;
                return (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0 text-white">
                      <Icon size={14} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white text-sm sm:text-base leading-tight">
                        {item.title || item.subtitle}
                      </h3>
                      <p className="text-sm text-gray-400 mt-1 leading-snug">
                        {item.title ? item.subtitle : ""}
                      </p>
                      <span className="inline-block text-[10px] font-semibold tracking-wider text-gray-500 mt-1.5">
                        {item.detail?.toUpperCase()}
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

export default EducationSection;
