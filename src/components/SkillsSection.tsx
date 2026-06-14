import { useSkills } from "@/hooks/usePortfolioData";

const fallback = [
  { category: "Web Development", skill_names: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "MySQL"] },
  { category: "Cybersecurity", skill_names: ["Nmap", "Wireshark", "Linux (Ubuntu/Kali)", "SIEM Tools"] },
  { category: "Programming", skill_names: ["Python", "C++", "Dart", "Flutter"] },
  { category: "Other", skill_names: ["WordPress", "Arduino IoT", "Git", "Figma"] },
];

const SkillsSection = () => {
  const { data } = useSkills();
  const categories = data ?? fallback;

  // Flatten all skill names to render them in a single wrapping row list
  const allSkills = categories.flatMap((cat: any) => cat.skill_names);

  return (
    <section id="skills" className="py-12 border-b border-gray-200">
      <span className="text-xs font-extrabold tracking-widest text-gray-600 uppercase block mb-6">
        Skills
      </span>
      
      <div className="flex flex-wrap gap-2">
        {allSkills.map((skill: string) => (
          <span
            key={skill}
            className="px-3 py-1 bg-black text-white text-xs font-semibold rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
