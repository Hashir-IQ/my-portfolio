import { ArrowRight, ExternalLink } from "lucide-react";
import { useProjects } from "@/hooks/usePortfolioData";

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

  const getProjectImage = (project: any) => {
    const title = project.title.toLowerCase();
    if (title.includes("technolean")) {
      return "/assets/technolean_screenshot.png";
    }
    if (title.includes("solar")) {
      return "/assets/litup_solar.png";
    }
    if (title.includes("plaza") || title.includes("gakhar")) {
      return "/assets/gakhar_plaza.jpg";
    }
    if (title.includes("medicare")) {
      return "/assets/medicare_screenshot.jpg";
    }
    return "/placeholder.svg";
  };

  return (
    <section id="projects" className="py-12 border-b border-gray-200">
      <h2 className="text-xs font-extrabold tracking-widest text-gray-600 uppercase block mb-6">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project: any) => (
          <div
            key={project.title}
            className="flex flex-col bg-white border border-gray-200 rounded-md overflow-hidden"
          >
            {/* Screenshot image at the top */}
            <div className="h-[160px] w-full bg-gray-100 border-b border-gray-200 relative overflow-hidden">
              <img
                src={getProjectImage(project)}
                alt={`${project.title} Screenshot`}
                className={`w-full h-full object-cover rounded-t-md ${project.title.toLowerCase().includes("solar") ? "bg-white" : ""}`}
              />
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
