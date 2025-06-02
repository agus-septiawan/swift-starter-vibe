
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Website portfolio personal dengan desain handwriting style yang unik",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      image: "/placeholder.svg",
      demo: "#",
      code: "#"
    },
    {
      title: "Creative Dashboard",
      description: "Dashboard kreatif untuk mengelola project dan task dengan animasi menarik",
      tech: ["React", "Vite", "Shadcn UI"],
      image: "/placeholder.svg",
      demo: "#",
      code: "#"
    },
    {
      title: "Design System",
      description: "Komponen design system yang reusable untuk project-project selanjutnya",
      tech: ["TypeScript", "Storybook", "CSS"],
      image: "/placeholder.svg",
      demo: "#",
      code: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-handwrite text-4xl md:text-5xl text-warm font-bold text-center mb-12 animate-fade-in">
            Project Terbaik
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-handwrite text-2xl text-warm font-bold mb-3">
                    {project.title}
                  </h3>
                  <p className="font-sans text-sketch/70 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-warm/10 text-warm px-3 py-1 rounded-full text-sm font-sketch"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.demo}
                      className="flex items-center gap-2 text-warm hover:text-warm/80 font-sketch"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                    <a 
                      href={project.code}
                      className="flex items-center gap-2 text-sketch hover:text-sketch/80 font-sketch"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
