import { ArrowRight, ExternalLink } from "lucide-react";
import { useProjects } from "@/hooks/usePortfolioData";
import litupSolarImg from "@/assets/litup_solar.png";
import technoleanLogo from "@/assets/technolean_logo.png";
import medicareLogo from "@/assets/medicare_logo.jpg";
import gakharPlazaImg from "@/assets/gakhar_plaza.jpg";

const fallback = [
  {
    title: "TechnoLean Lab Website",
    description: "Designed, developed, and deployed the official TechnoLean Lab website end-to-end.",
    tags: ["Full-Stack", "React", "Tailwind CSS", "SEO"],
    badge: "End-to-End",
    link: "https://technoleanlab.com",
    imageType: "technolean"
  },
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
        <img
          src={litupSolarImg}
          alt={project.title}
          className="w-full h-full object-contain p-6 grayscale"
        />
      );
    }

    if (type === "technolean") {
      return (
        <img
          src={technoleanLogo}
          alt={project.title}
          className="w-full h-full object-contain p-6 grayscale"
        />
      );
    }

    if (type === "architecture") {
      return (
        <img
          src={gakharPlazaImg}
          alt={project.title}
          className="w-full h-full object-cover grayscale"
        />
      );
    }

    return (
      <img
        src={medicareLogo}
        alt={project.title}
        className="w-full h-full object-contain p-6 grayscale"
      />
    );
  };

  return (
    <section id="projects" className="py-12 border-b border-gray-200">
      <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase block mb-6">
        Projects
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project: any) => (
          <div
            key={project.title}
            className="flex flex-col bg-white border border-gray-200 rounded-md overflow-hidden"
          >
            {/* Placeholder thumbnail area at the top in light gray */}
            <div className="aspect-[16/10] w-full bg-gray-100 border-b border-gray-200 flex items-center justify-center relative overflow-hidden">
              {renderProjectImage(project)}
              {project.badge && (
                <span className="absolute top-2 right-2 text-[8px] font-bold bg-black text-white px-1.5 py-0.5 uppercase tracking-wider rounded-sm">
                  {project.badge}
                </span>
              )}
            </div>

            {/* Content area */}
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-sm font-bold text-black mb-1">
                {project.title}
              </h3>
              
              <p className="text-xs text-gray-500 mb-3 line-clamp-2">
                {project.description}
              </p>

              {/* Small gray bordered tech stack tags */}
              <div className="flex flex-wrap gap-1 mb-4 mt-auto">
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-[9px] text-gray-400 border border-gray-200 px-1.5 py-0.5 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* See project link with an arrow */}
              <div>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] font-bold text-black hover:text-gray-600 transition-colors"
                  >
                    <span>See project</span>
                    <ArrowRight size={10} />
                  </a>
                ) : (
                  <span className="text-[10px] font-bold text-gray-400">
                    In Development
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
