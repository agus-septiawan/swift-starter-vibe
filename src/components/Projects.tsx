
import { ExternalLink, Github, Sparkles, Scissors } from "lucide-react";

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
      {/* Hand-drawn style top border */}
      <svg className="absolute top-0 left-0 right-0 w-full h-4" viewBox="0 0 1200 20" preserveAspectRatio="none">
        <path d="M0,12 Q300,8 600,15 T1200,10" stroke="#2D2D2D" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title with creative doodles */}
          <div className="text-center mb-16 relative">
            <h2 className="font-handwrite text-4xl md:text-6xl text-warm font-bold mb-4 relative">
              My Projects
              {/* Sparkles doodle */}
              <Sparkles className="absolute -top-4 -right-16 text-warm opacity-50 transform rotate-12" size={24} />
              <Sparkles className="absolute -top-8 -left-12 text-warm opacity-30 transform -rotate-12" size={16} />
            </h2>
            <p className="font-sans text-xl text-sketch/70 max-w-2xl mx-auto">
              Here are some of my recent works that showcase my skills and creativity
            </p>
            
            {/* Hand-drawn underline with variations */}
            <svg className="mx-auto mt-4" width="200" height="20" viewBox="0 0 200 20">
              <path d="M10,15 Q60,8 120,12 T190,10" stroke="#2D2D2D" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <path d="M15,12 Q65,18 115,14 T185,13" stroke="#2D2D2D" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.4"/>
            </svg>

            {/* Scissors doodle */}
            <Scissors className="absolute top-4 right-1/4 text-warm opacity-30 transform rotate-45" size={20} />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white border-2 border-warm/20 transition-colors duration-200 overflow-hidden relative"
              >
                {/* Tape effect on corners */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-warm/10 transform rotate-45 translate-x-4 -translate-y-4"></div>
                <div className="absolute top-2 right-2 w-4 h-1 bg-warm/20 transform rotate-45"></div>
                
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="font-handwrite text-2xl text-sketch font-bold mb-3 relative">
                    {project.title}
                    {/* Small star decoration */}
                    <svg className="absolute -right-6 top-0 w-4 h-4 text-warm opacity-40" viewBox="0 0 20 20">
                      <path d="M10,2 L12,8 L18,8 L13,12 L15,18 L10,14 L5,18 L7,12 L2,8 L8,8 Z" fill="currentColor"/>
                    </svg>
                  </h3>
                  
                  <p className="font-sans text-sketch/70 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack with hand-drawn style */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-cream text-sketch px-2 py-1 text-xs font-sketch border border-warm/30 relative"
                      >
                        {tech}
                        {/* Small corner dot */}
                        <div className="absolute -top-1 -right-1 w-1 h-1 bg-warm rounded-full opacity-30"></div>
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

          {/* View More Button with doodle */}
          <div className="text-center mt-12 relative">
            <a
              href="#contact"
              className="inline-block bg-sketch text-cream px-8 py-4 font-sketch text-lg transition-colors duration-200 relative"
            >
              Want to see more? Let's talk!
              {/* Arrow doodle */}
              <svg className="absolute -right-12 top-1/2 transform -translate-y-1/2 w-8 h-8 text-sketch opacity-40" viewBox="0 0 30 30">
                <path d="M5,15 Q15,10 25,15 M20,10 L25,15 L20,20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom hand-drawn border */}
      <svg className="absolute bottom-0 left-0 right-0 w-full h-4" viewBox="0 0 1200 20" preserveAspectRatio="none">
        <path d="M0,10 Q300,15 600,8 T1200,12" stroke="#2D2D2D" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>
    </section>
  );
};

export default Projects;
