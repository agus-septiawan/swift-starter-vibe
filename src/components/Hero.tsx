
import { ArrowDown, Coffee, Palette, Heart } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background decorative elements - more handwriting style */}
      <div className="absolute inset-0 opacity-10">
        {/* Coffee stain effect */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-warm rounded-full opacity-30 blur-sm"></div>
        <div className="absolute top-24 left-14 w-8 h-8 bg-warm rounded-full opacity-20 blur-sm"></div>
        
        {/* Sketch-like lines */}
        <div className="absolute top-1/3 right-20">
          <svg width="120" height="80" viewBox="0 0 120 80" className="text-warm">
            <path d="M10,40 Q30,20 50,40 T90,40" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="3,3"/>
            <path d="M15,50 Q35,30 55,50 T95,50" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="2,4"/>
          </svg>
        </div>
        
        {/* Doodle elements */}
        <div className="absolute bottom-1/4 left-1/4">
          <Palette className="text-warm transform rotate-12" size={20} />
        </div>
        <div className="absolute top-1/2 right-1/3">
          <Coffee className="text-warm transform -rotate-12" size={18} />
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Title with handwriting effect */}
          <div className="mb-8 relative">
            {/* Underline sketch effect */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-warm opacity-30 rounded-full transform rotate-1"></div>
            
            <h1 className="font-handwrite text-5xl md:text-7xl lg:text-8xl text-warm font-bold mb-4 relative">
              Hello, I'm
              {/* Small heart doodle */}
              <Heart className="absolute -top-4 -right-8 text-warm opacity-60 transform rotate-12" size={24} />
            </h1>
            <h2 className="font-handwrite text-6xl md:text-8xl lg:text-9xl text-sketch font-bold leading-tight relative">
              Muhammad Mahathir
              {/* Underline scribble */}
              <svg className="absolute -bottom-4 left-0 w-full h-8" viewBox="0 0 400 20">
                <path d="M10,15 Q100,5 200,12 T390,10" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" className="text-warm opacity-40"/>
              </svg>
            </h2>
          </div>

          {/* Subtitle with doodle */}
          <div className="mb-12 relative">
            <p className="font-sketch text-xl md:text-2xl lg:text-3xl text-sketch/80 leading-relaxed">
              Creative Developer & Designer
            </p>
            {/* Arrow doodle pointing to subtitle */}
            <svg className="absolute -left-16 top-0 w-12 h-12 text-warm opacity-50" viewBox="0 0 40 40">
              <path d="M5,20 L25,20 M20,15 L25,20 L20,25" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Description */}
          <div className="mb-12">
            <p className="font-sans text-lg md:text-xl text-sketch/70 max-w-2xl mx-auto leading-relaxed">
              I create beautiful, functional, and user-friendly digital experiences 
              that bring ideas to life through code and design.
            </p>
          </div>

          {/* CTA Buttons with minimal hover effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#projects"
              className="bg-warm text-cream px-8 py-4 rounded-none font-sketch text-lg transition-colors duration-200 shadow-lg relative"
            >
              View My Work
              <span className="inline-block ml-2">→</span>
              {/* Small coffee stain */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-sketch rounded-full opacity-20"></div>
            </a>
            <a
              href="#contact"
              className="border-2 border-warm text-warm px-8 py-4 rounded-none font-sketch text-lg transition-colors duration-200 relative"
            >
              Get In Touch
              <span className="inline-block ml-2">✉</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator with natural movement */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center">
            <ArrowDown className="text-warm animate-bounce" size={32} />
            <div className="mt-2 w-px h-8 bg-warm opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
