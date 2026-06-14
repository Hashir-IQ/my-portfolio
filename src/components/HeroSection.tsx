import { useAboutContent } from "@/hooks/usePortfolioData";

const fallbackAbout = "Software engineer who turns ideas into clean, working products. I build web apps that are simple on the surface and solid underneath. I write code like I mean it.";

const HeroSection = () => {
  const { data: about } = useAboutContent();
  const aboutText = about?.paragraphs?.[0] || about?.paragraphs || fallbackAbout;

  return (
    <section id="about" className="py-12 border-b border-gray-200">
      <span className="text-xs font-extrabold tracking-widest text-gray-600 uppercase block mb-4">
        About
      </span>
      <p className="text-[#444444] leading-relaxed text-sm sm:text-base">
        {aboutText}
      </p>
    </section>
  );
};

export default HeroSection;
