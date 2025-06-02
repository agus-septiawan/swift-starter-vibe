
import { Code, Palette, Zap, Coffee, Lightbulb, Brush } from "lucide-react";

const About = () => {
  const skills = [
    { icon: Code, title: "Development", items: ["React", "TypeScript", "Node.js", "Python"] },
    { icon: Palette, title: "Design", items: ["UI/UX", "Figma", "Adobe Creative Suite", "Prototyping"] },
    { icon: Zap, title: "Tools", items: ["Git", "Docker", "AWS", "MongoDB"] },
    { icon: Coffee, title: "Interests", items: ["Coffee", "Photography", "Music", "Travel"] },
  ];

  return (
    <section id="about" className="py-20 bg-white relative">
      {/* Hand-drawn style borders */}
      <svg className="absolute top-0 left-0 right-0 w-full h-4" viewBox="0 0 1200 20" preserveAspectRatio="none">
        <path d="M0,10 Q300,5 600,12 T1200,8" stroke="#8B4513" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title with doodles */}
          <div className="text-center mb-16 relative">
            <h2 className="font-handwrite text-4xl md:text-6xl text-warm font-bold mb-4 relative">
              About Me
              {/* Light bulb doodle */}
              <Lightbulb className="absolute -top-6 -right-12 text-warm opacity-60 transform rotate-12" size={28} />
            </h2>
            
            {/* Hand-drawn underline */}
            <svg className="mx-auto" width="150" height="20" viewBox="0 0 150 20">
              <path d="M10,15 Q50,8 100,12 T140,10" stroke="#2D2D2D" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <path d="M15,12 Q55,18 95,14" stroke="#2D2D2D" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5"/>
            </svg>
            
            {/* Small stars doodles */}
            <div className="absolute top-4 left-1/4">
              <svg width="20" height="20" viewBox="0 0 20 20" className="text-warm opacity-40">
                <path d="M10,2 L12,8 L18,8 L13,12 L15,18 L10,14 L5,18 L7,12 L2,8 L8,8 Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="absolute top-8 right-1/4">
              <svg width="16" height="16" viewBox="0 0 20 20" className="text-warm opacity-30">
                <path d="M10,2 L12,8 L18,8 L13,12 L15,18 L10,14 L5,18 L7,12 L2,8 L8,8 Z" fill="currentColor"/>
              </svg>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content with doodles */}
            <div className="space-y-6 relative">
              {/* Quote marks doodle */}
              <svg className="absolute -left-8 -top-4 w-12 h-12 text-warm opacity-30" viewBox="0 0 40 40">
                <path d="M8,12 Q12,8 16,12 Q16,16 12,20 Q8,16 8,12 M24,12 Q28,8 32,12 Q32,16 28,20 Q24,16 24,12" fill="currentColor"/>
              </svg>
              
              <div className="font-handwrite text-2xl md:text-3xl text-sketch mb-6 relative">
                "Passionate about creating digital experiences that matter"
                {/* Small brush doodle */}
                <Brush className="absolute -bottom-2 -right-8 text-warm opacity-50 transform rotate-45" size={20} />
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
                  className="inline-block bg-sketch text-cream px-6 py-3 font-sketch transition-colors duration-200 relative"
                >
                  Let's Work Together
                  {/* Small arrow doodle */}
                  <svg className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-6 h-6 text-sketch opacity-60" viewBox="0 0 20 20">
                    <path d="M5,10 L15,10 M12,7 L15,10 L12,13" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right side - Skills grid */}
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.title}
                  className="bg-cream p-6 border-2 border-warm/20 transition-colors duration-200 relative"
                >
                  {/* Small corner decoration */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-warm rounded-full opacity-20"></div>
                  
                  <div className="flex flex-col items-center text-center">
                    <skill.icon 
                      className="text-warm mb-3" 
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
      
      {/* Bottom hand-drawn border */}
      <svg className="absolute bottom-0 left-0 right-0 w-full h-4" viewBox="0 0 1200 20" preserveAspectRatio="none">
        <path d="M0,8 Q300,15 600,10 T1200,12" stroke="#8B4513" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>
    </section>
  );
};

export default About;
