import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";
import { useHeroContent } from "@/hooks/usePortfolioData";

const HeroSection = () => {
  const { data: hero } = useHeroContent();
  const name = hero?.name ?? "HASHIR IQBAL";
  const role = "Software Engineer"; // Sleek role title matching the design system screenshot

  return (
    <section className="relative min-h-[75vh] flex items-center justify-center bg-white pt-24 pb-12">
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border border-gray-100 bg-gray-50">
            <img
              src={profileImg}
              alt={`${name} Profile`}
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black uppercase mb-3"
        >
          {name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-sm sm:text-base font-normal tracking-wide text-gray-500"
        >
          {role}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-xs h-px bg-gray-100 mt-16"
        />
      </div>
    </section>
  );
};

export default HeroSection;
