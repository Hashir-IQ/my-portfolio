import { Github, Linkedin, Mail, FileText } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col md:flex-row">
      {/* 
        Sidebar: 
        - Fixed sticky 240px wide sidebar on desktop (md and up) with a right border.
        - Scrollable header block at the top on mobile/tablet (below md).
      */}
      <aside className="w-full md:w-[240px] md:fixed md:top-0 md:left-0 md:h-screen bg-white border-b md:border-b-0 md:border-r border-gray-200 flex flex-col z-40 p-6">
        {/* Profile photo as circle avatar at the top, name in bold, role in small uppercase gray text */}
        <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0 md:mb-6">
          <div className="w-12 h-12 md:w-20 md:h-20 rounded-full overflow-hidden bg-gray-50 border border-gray-200 mb-0 md:mb-4 flex-shrink-0">
            <img
              src={profileImg}
              alt="Hashir Iqbal Profile"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <h1 className="font-bold text-black text-sm md:text-base leading-tight uppercase">
              Hashir Iqbal
            </h1>
            <p className="text-[9px] font-bold tracking-wider text-gray-400 uppercase mt-0.5">
              Software Developer
            </p>
          </div>
        </div>

        {/* Vertical Navigation List */}
        <nav className="flex-1 my-4 md:my-0">
          <ul className="flex flex-wrap md:flex-col gap-x-4 gap-y-2 md:gap-y-1.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs font-semibold text-gray-500 hover:text-black block py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
            {/* CV Download option */}
            <li>
              <a
                href="/Hashir_Iqbal_CV.pdf"
                download="Hashir_Iqbal_CV.pdf"
                className="text-xs font-semibold text-gray-500 hover:text-black flex items-center gap-1 py-1"
              >
                <FileText size={12} />
                Download CV
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Link Row at the bottom separated by a thin top border */}
        <div className="pt-4 border-t border-gray-200 flex gap-4 mt-auto">
          <a
            href="https://github.com/Hashir-IQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-black"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-black"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:rhashir54321@gmail.com"
            className="text-gray-400 hover:text-black"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </aside>

      {/* Main Panel (Right side, scrolls normally, offset by 240px on desktop) */}
      <main className="flex-1 md:ml-[240px] px-6 md:px-12 max-w-4xl bg-white w-full">
        <HeroSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
