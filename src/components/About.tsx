
import { Code, Palette, Zap, Coffee, Lightbulb, Brush, Sparkles } from "lucide-react";

const About = () => {
  const skills = [
    { icon: Code, title: "Development", items: ["React", "TypeScript", "Node.js", "Python"] },
    { icon: Palette, title: "Design", items: ["UI/UX", "Figma", "Adobe Creative Suite", "Prototyping"] },
    { icon: Zap, title: "Tools", items: ["Git", "Docker", "AWS", "MongoDB"] },
    { icon: Coffee, title: "Interests", items: ["Coffee", "Photography", "Music", "Travel"] },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Animated background video/texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-warm/10 to-sketch/10"></div>
        {/* Animated paper texture */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-warm/5 rounded-full animate-[float_6s_ease-in-out_infinite]"
            style={{
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Hand-drawn style borders with animation */}
      <svg className="absolute top-0 left-0 right-0 w-full h-4" viewBox="0 0 1200 20" preserveAspectRatio="none">
        <path 
          d="M0,10 Q300,5 600,12 T1200,8" 
          stroke="#8B4513" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round"
          strokeDasharray="1200"
          className="animate-[sketch-draw_4s_ease-in-out_infinite]"
        />
      </svg>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title with enhanced doodles */}
          <div className="text-center mb-16 relative">
            {/* Animated sparkles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <Sparkles
                  key={i}
                  className="absolute text-warm opacity-30 animate-[twinkle_2s_ease-in-out_infinite]"
                  size={16}
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${10 + (i % 2) * 20}%`,
                    animationDelay: `${i * 0.5}s`
                  }}
                />
              ))}
            </div>

            <h2 className="font-handwrite text-4xl md:text-6xl text-warm font-bold mb-4 relative animate-[writeIn_2s_ease-out]">
              About Me
              {/* Animated light bulb doodle */}
              <Lightbulb className="absolute -top-6 -right-12 text-warm opacity-60 transform rotate-12 animate-[lightUp_3s_ease-in-out_infinite]" size={28} />
            </h2>
            
            {/* Enhanced hand-drawn underline */}
            <svg className="mx-auto" width="150" height="20" viewBox="0 0 150 20">
              <path 
                d="M10,15 Q50,8 100,12 T140,10" 
                stroke="#2D2D2D" 
                strokeWidth="2" 
                fill="none" 
                strokeLinecap="round"
                strokeDasharray="150"
                className="animate-[sketch-draw_3s_ease-in-out_infinite]"
              />
              <path 
                d="M15,12 Q55,18 95,14" 
                stroke="#2D2D2D" 
                strokeWidth="1" 
                fill="none" 
                strokeLinecap="round" 
                opacity="0.5"
                strokeDasharray="100"
                className="animate-[sketch-draw_2s_ease-in-out_infinite]"
                style={{ animationDelay: '1s' }}
              />
            </svg>
            
            {/* Animated stars doodles */}
            <div className="absolute top-4 left-1/4 animate-[rotate_10s_linear_infinite]">
              <svg width="20" height="20" viewBox="0 0 20 20" className="text-warm opacity-40">
                <path d="M10,2 L12,8 L18,8 L13,12 L15,18 L10,14 L5,18 L7,12 L2,8 L8,8 Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="absolute top-8 right-1/4 animate-[rotate_8s_linear_infinite_reverse]">
              <svg width="16" height="16" viewBox="0 0 20 20" className="text-warm opacity-30">
                <path d="M10,2 L12,8 L18,8 L13,12 L15,18 L10,14 L5,18 L7,12 L2,8 L8,8 Z" fill="currentColor"/>
              </svg>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content with enhanced doodles */}
            <div className="space-y-6 relative">
              {/* Animated quote marks doodle */}
              <svg className="absolute -left-8 -top-4 w-12 h-12 text-warm opacity-30 animate-[fadeInOut_4s_ease-in-out_infinite]" viewBox="0 0 40 40">
                <path d="M8,12 Q12,8 16,12 Q16,16 12,20 Q8,16 8,12 M24,12 Q28,8 32,12 Q32,16 28,20 Q24,16 24,12" fill="currentColor"/>
              </svg>
              
              <div className="font-handwrite text-2xl md:text-3xl text-sketch mb-6 relative animate-[slideInLeft_1s_ease-out]">
                "Passionate about creating digital experiences that matter"
                {/* Animated brush doodle */}
                <Brush className="absolute -bottom-2 -right-8 text-warm opacity-50 transform rotate-45 animate-[wiggle_4s_ease-in-out_infinite]" size={20} />
              </div>
              
              <div className="space-y-4 font-sans text-lg text-sketch/80 leading-relaxed">
                <p className="animate-[fadeIn_1s_ease-out]" style={{ animationDelay: '0.5s' }}>
                  Hi there! I'm Muhammad Mahathir, a creative developer and designer 
                  who loves building beautiful, functional web applications and digital experiences.
                </p>
                <p className="animate-[fadeIn_1s_ease-out]" style={{ animationDelay: '1s' }}>
                  With a background in both development and design, I bridge the gap 
                  between aesthetics and functionality, ensuring every project not only 
                  looks great but performs exceptionally well.
                </p>
                <p className="animate-[fadeIn_1s_ease-out]" style={{ animationDelay: '1.5s' }}>
                  When I'm not coding, you'll find me exploring new design trends, 
                  experimenting with creative technologies, or enjoying a good cup of coffee 
                  while sketching new ideas.
                </p>
              </div>

              <div className="pt-4 animate-[fadeIn_1s_ease-out]" style={{ animationDelay: '2s' }}>
                <a
                  href="#contact"
                  className="inline-block bg-sketch text-cream px-6 py-3 font-sketch transition-all duration-300 relative group overflow-hidden"
                >
                  <span className="relative z-10">Let's Work Together</span>
                  {/* Ink spreading effect */}
                  <div className="absolute inset-0 bg-warm transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  {/* Animated arrow doodle */}
                  <svg className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-6 h-6 text-sketch opacity-60 animate-[drawArrow_3s_ease-in-out_infinite]" viewBox="0 0 20 20">
                    <path 
                      d="M5,10 L15,10 M12,7 L15,10 L12,13" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      fill="none" 
                      strokeLinecap="round"
                      strokeDasharray="20"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right side - Enhanced Skills grid */}
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.title}
                  className="bg-cream p-6 border-2 border-warm/20 transition-all duration-300 relative group overflow-hidden animate-[slideInUp_1s_ease-out]"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Animated corner decoration */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-warm rounded-full opacity-20 animate-[pulse_2s_infinite]"></div>
                  
                  {/* Ink blot effect on hover */}
                  <div className="absolute inset-0 bg-warm/5 transform scale-0 group-hover:scale-100 transition-transform duration-500 origin-center"></div>
                  
                  <div className="flex flex-col items-center text-center relative z-10">
                    <skill.icon 
                      className="text-warm mb-3 animate-[float_3s_ease-in-out_infinite]" 
                      size={32} 
                      style={{ animationDelay: `${index * 0.5}s` }}
                    />
                    <h3 className="font-handwrite text-xl text-sketch font-bold mb-3">
                      {skill.title}
                    </h3>
                    <ul className="space-y-1">
                      {skill.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="font-sans text-sm text-sketch/70 animate-[fadeIn_0.5s_ease-out]"
                          style={{ animationDelay: `${(index * 0.2) + (itemIndex * 0.1) + 1}s` }}
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
      
      {/* Bottom animated border */}
      <svg className="absolute bottom-0 left-0 right-0 w-full h-4" viewBox="0 0 1200 20" preserveAspectRatio="none">
        <path 
          d="M0,8 Q300,15 600,10 T1200,12" 
          stroke="#8B4513" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round"
          strokeDasharray="1200"
          className="animate-[sketch-draw_4s_ease-in-out_infinite]"
          style={{ animationDelay: '2s' }}
        />
      </svg>
    </section>
  );
};

export default About;
