
import { Code, Palette, Zap, Coffee } from "lucide-react";

const About = () => {
  const skills = [
    { icon: Code, title: "Development", items: ["React", "TypeScript", "Node.js", "Python"] },
    { icon: Palette, title: "Design", items: ["UI/UX", "Figma", "Adobe Creative Suite", "Prototyping"] },
    { icon: Zap, title: "Tools", items: ["Git", "Docker", "AWS", "MongoDB"] },
    { icon: Coffee, title: "Interests", items: ["Coffee", "Photography", "Music", "Travel"] },
  ];

  return (
    <section id="about" className="py-20 bg-white relative">
      {/* Decorative sketchy border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-warm transform -rotate-1"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="font-handwrite text-4xl md:text-6xl text-warm font-bold mb-4 transform hover:animate-wiggle cursor-default">
              About Me
            </h2>
            <div className="w-32 h-1 bg-sketch mx-auto transform rotate-1"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-6">
              <div className="font-handwrite text-2xl md:text-3xl text-sketch mb-6">
                "Passionate about creating digital experiences that matter"
              </div>
              
              <div className="space-y-4 font-sans text-lg text-sketch/80 leading-relaxed">
                <p>
                  Hi there! I'm Muhammad Mahathir, a creative developer and designer 
                  who loves building beautiful, functional web applications and digital experiences.
                </p>
                <p>
                  With a background in both development and design, I bridge the gap 
                  between aesthetics and functionality, ensuring every project not only 
                  looks great but performs exceptionally well.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new design trends, 
                  experimenting with creative technologies, or enjoying a good cup of coffee 
                  while sketching new ideas.
                </p>
              </div>

              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-block bg-sketch text-cream px-6 py-3 font-sketch hover:bg-warm transition-all duration-300 transform hover:scale-105 hover:rotate-1"
                >
                  Let's Work Together
                </a>
              </div>
            </div>

            {/* Right side - Skills grid */}
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.title}
                  className="group bg-cream p-6 border-2 border-warm/20 hover:border-warm transition-all duration-300 transform hover:scale-105 hover:rotate-1"
                >
                  <div className="flex flex-col items-center text-center">
                    <skill.icon 
                      className="text-warm mb-3 group-hover:animate-wiggle" 
                      size={32} 
                    />
                    <h3 className="font-handwrite text-xl text-sketch font-bold mb-3">
                      {skill.title}
                    </h3>
                    <ul className="space-y-1">
                      {skill.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="font-sans text-sm text-sketch/70"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-warm transform rotate-1"></div>
    </section>
  );
};

export default About;
