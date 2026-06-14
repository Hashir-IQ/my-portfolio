import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";
import { useHeroContent, useAboutContent } from "@/hooks/usePortfolioData";

const fallbackAbout = "Software engineer who turns ideas into clean, working products. I build web apps that are simple on the surface and solid underneath. I write code like I mean it.";

const HeroSection = () => {
  const { data: hero } = useHeroContent();
  const { data: about } = useAboutContent();

  const name = hero?.name ?? "HASHIR IQBAL";
  const role = "Software Engineer";
  
  // Parse paragraphs if data from Supabase exists, otherwise use custom fallback
  const aboutText = about?.paragraphs?.[0] || about?.paragraphs || fallbackAbout;

  return (
    <section id="about" className="relative bg-white pt-24 pb-8 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          
          {/* Left Column: Profile Avatar + Name */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-gray-100 bg-gray-50 mb-4">
              <img
                src={profileImg}
                alt={`${name} Profile`}
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
            </div>
            <h1 className="text-xl sm:text-2xl font-black tracking-tight text-black uppercase">
              {name}
            </h1>
            <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mt-1">
              {role}
            </p>
          </motion.div>

          {/* Right Column: About Text */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-8"
          >
            <h2 className="text-sm font-bold tracking-widest text-black uppercase mb-4">
              About
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-8">
              {aboutText}
            </p>
          </motion.div>
          
        </div>
        
        <div className="w-full h-px bg-gray-100 mt-8" />
      </div>
    </section>
  );
};

export default HeroSection;
