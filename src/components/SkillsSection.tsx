import { motion } from "framer-motion";
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

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl sm:text-4xl font-mono font-bold mb-2 text-foreground">
            <span className="text-primary">{">"}</span> Skills
          </h2>
          <div className="w-20 h-0.5 glow-line mb-10 rounded-full" />
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {categories.map((cat: any, i: number) => (
            <motion.div key={cat.category} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-lg bg-card border border-border p-6 hover:glow-border transition-all duration-300">
              <h3 className="font-mono text-primary text-sm mb-4 uppercase tracking-wider">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skill_names.map((skill: string) => (
                  <span key={skill} className="px-3 py-1.5 text-xs font-mono rounded-md bg-secondary text-foreground border border-border hover:border-primary/50 hover:text-primary transition-colors">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
