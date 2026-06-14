import { ArrowRight, ExternalLink } from "lucide-react";
import { useProjects } from "@/hooks/usePortfolioData";
import litupSolarImg from "@/assets/litup_solar.png";
import technoleanLogo from "@/assets/technolean_logo.png";
import medicareLogo from "@/assets/medicare_logo.jpg";
import gakharPlazaImg from "@/assets/gakhar_plaza.jpg";

const fallback = [
  {
    title: "LitUp Solar",
    description: "An intelligent solar energy tracking and optimization solution.",
    tags: ["React", "IoT", "Sustainability"],
    badge: null,
    link: "https://litup-solar.vercel.app/",
    imageType: "solar"
  },
  {
    title: "Gakhar Plaza Management",
    description: "An enterprise-grade property and tenant management system.",
    tags: ["Web App", "MySQL", "CRUD"],
    badge: null,
    link: null,
    imageType: "architecture"
  },
  {
    title: "MEDICARE++",
    description: "A final year project providing intelligent healthcare diagnostics.",
    tags: ["React", "AI/ML", "Healthcare"],
    badge: "FYP",
    link: "https://medicareplus.app",
    imageType: "medical"
  },
];

const ProjectsSection = () => {
  const { data } = useProjects();
  const projects = data ?? fallback;

  const renderProjectImage = (project: any) => {
    const type = project.imageType || (project.title.toLowerCase().includes("solar") ? "solar" : project.title.toLowerCase().includes("plaza") || project.title.toLowerCase().includes("gakhar") ? "architecture" : project.title.toLowerCase().includes("technolean") ? "technolean" : "medical");

    if (type === "solar") {
      return (
        <div className="w-full h-full bg-white flex items-center justify-center p-6 transition-transform duration-500 group-hover:scale-105">
          <img
            src={litupSolarImg}
            alt={project.title}
            className="w-full h-full object-contain"
          />
        </div>
      );
    }

    if (type === "technolean") {
      return (
        <div className="w-full h-full bg-white flex items-center justify-center p-6 transition-transform duration-500 group-hover:scale-105">
          <img
            src={technoleanLogo}
            alt={project.title}
            className="w-full h-full object-contain"
          />
        </div>
      );
    }

    if (type === "architecture") {
      return (
        <img
          src={gakharPlazaImg}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      );
    }

    return (
      <div className="w-full h-full bg-white flex items-center justify-center p-6 transition-transform duration-500 group-hover:scale-105">
        <img
          src={medicareLogo}
          alt={project.title}
          className="w-full h-full object-contain"
        />
      </div>
    );
  };

  return (
    <section id="projects" className="py-12 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          
          <div className="md:col-span-4 flex flex-col items-start">
            <span className="inline-block text-[8px] font-black tracking-widest bg-white text-black px-2 py-0.5 uppercase rounded-sm mb-3">
              MY PROJECTS
            </span>
            <h2 className="text-sm font-bold tracking-widest text-white uppercase">
              Selected Case Studies
            </h2>
          </div>

          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {projects.map((project: any, i: number) => (
                <div key={project.title} className="group flex flex-col">
                  {/* Image Container */}
                  <div className="aspect-[16/10] w-full rounded-md border border-neutral-800 overflow-hidden mb-3 bg-neutral-900 relative">
                    {renderProjectImage(project)}
                    {project.badge && (
                      <span className="absolute top-3 right-3 text-[8px] font-bold bg-white text-black px-1.5 py-0.5 tracking-wider rounded-sm z-20">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* Text Info */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-bold text-white">
                        {project.title}
                      </h3>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-500 hover:text-white transition-colors"
                          aria-label={`Open ${project.title}`}
                        >
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-3">
                      {project.description}
                    </p>

                    {/* SEE PROJECT CTA */}
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[10px] font-bold tracking-wider text-white hover:text-neutral-400 transition-all w-fit"
                      >
                        <span>SEE PROJECT</span>
                        <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <div className="flex items-center gap-1 text-[10px] font-bold tracking-wider text-neutral-600">
                        <span>IN DEVELOPMENT</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
        
        <div className="w-full h-px bg-white/10 mt-10" />
      </div>
    </section>
  );
};

export default ProjectsSection;
