import { ArrowRight, ExternalLink } from "lucide-react";
import { useProjects } from "@/hooks/usePortfolioData";
import litupSolarImg from "@/assets/litup_solar.png";

const fallback = [
  {
    title: "LitUp Solar",
    description: "An intelligent solar energy tracking and optimization solution.",
    tags: ["React", "IoT", "Sustainability"],
    badge: null,
    link: null,
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
    link: null,
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
          className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
        />
      );
    }

    if (type === "technolean") {
      return (
        <div className="w-full h-full bg-gray-50 flex items-center justify-center p-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 opacity-60" />
          <svg className="w-24 h-24 text-gray-300 relative z-10" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="40" width="140" height="100" rx="4" stroke="currentColor" strokeWidth="2" fill="white" />
            <path d="M50 140V165H150V140" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <circle cx="75" cy="80" r="8" stroke="currentColor" strokeWidth="2" />
            <circle cx="125" cy="95" r="5" stroke="currentColor" strokeWidth="2" />
            <line x1="82" y1="83" x2="120" y2="92" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="55" y1="120" x2="145" y2="120" stroke="currentColor" strokeWidth="2" />
            <circle cx="65" cy="120" r="2" fill="currentColor" />
            <circle cx="135" cy="120" r="2" fill="currentColor" />
          </svg>
        </div>
      );
    }

    if (type === "architecture") {
      return (
        <div className="w-full h-full bg-gray-50 flex items-center justify-center p-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-50 opacity-50" />
          <svg className="w-24 h-24 text-gray-300 relative z-10" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 180H180" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M40 180V60L100 20V180" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M100 180V90L160 60V180" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            <line x1="60" y1="90" x2="80" y2="90" stroke="currentColor" strokeWidth="2"/>
            <line x1="60" y1="120" x2="80" y2="120" stroke="currentColor" strokeWidth="2"/>
            <line x1="120" y1="110" x2="140" y2="110" stroke="currentColor" strokeWidth="2"/>
            <line x1="120" y1="140" x2="140" y2="140" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
      );
    }

    return (
      <div className="w-full h-full bg-gray-50 flex items-center justify-center p-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 opacity-60" />
        <svg className="w-24 h-24 text-gray-300 relative z-10" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="20" y1="170" x2="180" y2="170" stroke="currentColor" strokeWidth="2"/>
          <rect x="45" y="45" width="110" height="80" rx="3" stroke="currentColor" strokeWidth="2" fill="white"/>
          <path d="M85 125L75 170H125L115 125" stroke="currentColor" strokeWidth="2"/>
          <line x1="60" y1="85" x2="140" y2="85" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="60" y1="95" x2="120" y2="95" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
    );
  };

  return (
    <section id="projects" className="py-8 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          
          <div className="md:col-span-4 flex flex-col items-start">
            <span className="inline-block text-[8px] font-black tracking-widest bg-black text-white px-2 py-0.5 uppercase rounded-sm mb-3">
              MY PROJECTS
            </span>
            <h2 className="text-sm font-bold tracking-widest text-black uppercase">
              Selected Case Studies
            </h2>
          </div>

          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {projects.map((project: any, i: number) => (
                <div key={project.title} className="group flex flex-col">
                  {/* Image Container */}
                  <div className="aspect-[16/10] w-full rounded-md border border-gray-100 overflow-hidden mb-3 bg-gray-50 relative">
                    {renderProjectImage(project)}
                    {project.badge && (
                      <span className="absolute top-3 right-3 text-[8px] font-bold bg-black text-white px-1.5 py-0.5 tracking-wider rounded-sm z-20">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* Text Info */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-bold text-black group-hover:text-gray-600 transition-colors">
                        {project.title}
                      </h3>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-black transition-colors"
                        >
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed mb-3">
                      {project.description}
                    </p>

                    {/* READ MORE CTA */}
                    <div className="flex items-center gap-1 text-[10px] font-bold tracking-wider text-black group-hover:gap-2 transition-all">
                      <span>READ MORE</span>
                      <ArrowRight size={10} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
        
        <div className="w-full h-px bg-gray-100 mt-10" />
      </div>
    </section>
  );
};

export default ProjectsSection;
