
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and real-time inventory management.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Creative Portfolio",
      description: "A visually stunning portfolio website for a digital artist, featuring smooth animations, interactive galleries, and responsive design.",
      image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Framer Motion", "Tailwind", "Netlify"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      tech: ["Vue.js", "Firebase", "Vuetify", "PWA"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-cream relative">
      {/* Decorative sketchy border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-sketch transform -rotate-1"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="font-handwrite text-4xl md:text-6xl text-warm font-bold mb-4 transform hover:animate-wiggle cursor-default">
              My Projects
            </h2>
            <p className="font-sans text-xl text-sketch/70 max-w-2xl mx-auto">
              Here are some of my recent works that showcase my skills and creativity
            </p>
            <div className="w-32 h-1 bg-sketch mx-auto mt-4 transform rotate-1"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-warm/20 hover:border-warm transition-all duration-300 transform hover:scale-105 hover:rotate-1 overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-warm/0 group-hover:bg-warm/20 transition-all duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="font-handwrite text-2xl text-sketch font-bold mb-3 group-hover:text-warm transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="font-sans text-sketch/70 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-cream text-sketch px-2 py-1 text-xs font-sketch border border-warm/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 text-warm hover:text-sketch transition-colors font-sketch text-sm"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-warm hover:text-sketch transition-colors font-sketch text-sm"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-block bg-sketch text-cream px-8 py-4 font-sketch text-lg hover:bg-warm transition-all duration-300 transform hover:scale-105 hover:rotate-1"
            >
              Want to see more? Let's talk!
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-sketch transform rotate-1"></div>
    </section>
  );
};

export default Projects;
