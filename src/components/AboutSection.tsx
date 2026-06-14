import { motion } from "framer-motion";
import { useAboutContent } from "@/hooks/usePortfolioData";

const fallbackText = "Software engineer who turns ideas into clean, working products. I build web apps that are simple on the surface and solid underneath. I write code like I mean it.";

const AboutSection = () => {
  const { data } = useAboutContent();
  
  // Parse paragraphs if data from Supabase exists, otherwise use custom fallback
  const text = data?.paragraphs?.[0] || data?.paragraphs || fallbackText;

  return (
    <section id="about" className="py-16 px-6 bg-white">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-black mb-6">
            About
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-12">
            {text}
          </p>
          <div className="w-full h-px bg-gray-100" />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
