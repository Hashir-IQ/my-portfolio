import { motion } from "framer-motion";
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
    description: "An enterprise-grade property and tenant management system with automated billing.",
    tags: ["Web App", "MySQL", "CRUD"],
    badge: null,
    link: null,
    imageType: "architecture"
  },
  {
    title: "MEDICARE++",
    description: "A final year project providing intelligent healthcare diagnostics and scheduling.",
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
    // Determine which image style to render
    const type = project.imageType || (project.title.toLowerCase().includes("solar") ? "solar" : project.title.toLowerCase().includes("plaza") || project.title.toLowerCase().includes("gakhar") ? "architecture" : "medical");

    if (type === "solar") {
      return (
        <img
          src={litupSolarImg}
          alt={project.title}
          className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
        />
      );
    }

    if (type === "architecture") {
      // Sleek modernist concrete architectural graphic fallback
      return (
        <div className="w-full h-full bg-gray-50 flex items-center justify-center p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-50 opacity-50" />
          <svg className="w-48 h-48 text-gray-300 relative z-10" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 180H180" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M40 180V60L100 20V180" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M100 180V90L160 60V180" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            <line x1="60" y1="90" x2="80" y2="90" stroke="currentColor" strokeWidth="2"/>
            <line x1="60" y1="120" x2="80" y2="120" stroke="currentColor" strokeWidth="2"/>
            <line x1="60" y1="150" x2="80" y2="150" stroke="currentColor" strokeWidth="2"/>
            <line x1="120" y1="110" x2="140" y2="110" stroke="currentColor" strokeWidth="2"/>
            <line x1="120" y1="140" x2="140" y2="140" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
      );
    }

    // Modern workspace / workspace monitor screen visual fallback
    return (
      <div className="w-full h-full bg-gray-50 flex items-center justify-center p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 opacity-60" />
        <svg className="w-48 h-48 text-gray-400 relative z-10" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Desk surface */}
          <line x1="20" y1="170" x2="180" y2="170" stroke="currentColor" strokeWidth="2"/>
          {/* Monitor frame */}
          <rect x="40" y="40" width="120" height="90" rx="4" stroke="currentColor" strokeWidth="2" fill="white"/>
          {/* Monitor stand */}
          <path d="M85 130L75 170H125L115 130" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          {/* Abstract code/UI line visual on screen */}
          <circle cx="60" cy="60" r="8" fill="currentColor" fillOpacity="0.2"/>
          <line x1="75" y1="56" x2="140" y2="56" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="75" y1="64" x2="120" y2="64" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="55" y1="85" x2="145" y2="85" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="55" y1="95" x2="130" y2="95" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="55" y1="105" x2="110" y2="105" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 px-6 bg-white border-t border-gray-100">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="inline-block text-[9px] font-black tracking-widest bg-black text-white px-2.5 py-1 uppercase rounded-sm mb-4">
            MY PROJECTS
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-black">
            Selected Case Studies
          </h2>
        </motion.div>

        <div className="flex flex-col gap-12">
          {projects.map((project: any, i: number) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] w-full rounded-md border border-gray-100 overflow-hidden mb-6 bg-gray-50 relative">
                {renderProjectImage(project)}
                {project.badge && (
                  <span className="absolute top-4 right-4 text-[9px] font-bold bg-black text-white px-2 py-0.5 tracking-wider rounded-sm z-20">
                    {project.badge}
                  </span>
                )}
              </div>

              {/* Text Info */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-bold text-black group-hover:text-gray-600 transition-colors">
                    {project.title}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-black transition-colors"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* READ MORE CTA */}
                <div className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-black group-hover:gap-2.5 transition-all">
                  <span>READ MORE</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
