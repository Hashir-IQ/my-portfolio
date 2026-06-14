import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;

