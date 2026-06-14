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
    <section id="education" className="py-12 border-b border-gray-200">
      <span className="text-xs font-extrabold tracking-widest text-gray-600 uppercase block mb-6">
        Education
      </span>
      
      <div className="space-y-0">
        {items.map((item: any, i: number) => {
          const Icon = iconMap[item.icon_name] || GraduationCap;
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
                    {item.title || item.subtitle}
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5 leading-snug">
                    {item.title ? item.subtitle : ""}
                  </p>
                </div>
                <span className="text-[10px] sm:text-xs font-semibold text-gray-400 whitespace-nowrap">
                  {item.detail?.toUpperCase()}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EducationSection;
