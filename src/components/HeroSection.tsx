import { useAboutContent } from "@/hooks/usePortfolioData";

const fallbackAbout = "Hi, I'm Hashir Iqbal, a professional Web Developer and Software Engineer. I specialize in building high-performance web applications that are simple on the surface and solid underneath. With expertise in React, TypeScript, full-stack development, and AI integration, I write clean, optimized code that delivers outstanding user experiences.";

const HeroSection = () => {
  const { data: about } = useAboutContent();
  const aboutText = about?.paragraphs?.[0] || about?.paragraphs || fallbackAbout;

  return (
    <section id="about" className="py-12 border-b border-gray-200">
      <h2 className="text-xs font-extrabold tracking-widest text-gray-600 uppercase block mb-4">
        About
      </h2>
      <p className="text-[#444444] leading-relaxed text-sm sm:text-base">
        {aboutText}
      </p>
    </section>
  );
};

export default HeroSection;
