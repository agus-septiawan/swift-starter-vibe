
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-warm rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border-2 border-warm rotate-45 animate-wiggle"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-warm transform -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <div className="mb-8">
            <h1 className="font-handwrite text-5xl md:text-7xl lg:text-8xl text-warm font-bold mb-4 transform hover:animate-wiggle cursor-default">
              Hello, I'm
            </h1>
            <h2 className="font-handwrite text-6xl md:text-8xl lg:text-9xl text-sketch font-bold leading-tight">
              Muhammad Mahathir
            </h2>
          </div>

          {/* Subtitle */}
          <div className="mb-12">
            <p className="font-sketch text-xl md:text-2xl lg:text-3xl text-sketch/80 leading-relaxed">
              Creative Developer & Designer
            </p>
            <div className="mt-4 flex justify-center">
              <div className="w-24 h-1 bg-warm transform rotate-1"></div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-12">
            <p className="font-sans text-lg md:text-xl text-sketch/70 max-w-2xl mx-auto leading-relaxed">
              I create beautiful, functional, and user-friendly digital experiences 
              that bring ideas to life through code and design.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#projects"
              className="group bg-warm text-cream px-8 py-4 rounded-none font-sketch text-lg hover:bg-sketch transition-all duration-300 transform hover:scale-105 hover:rotate-1 shadow-lg"
            >
              View My Work
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="group border-2 border-warm text-warm px-8 py-4 rounded-none font-sketch text-lg hover:bg-warm hover:text-cream transition-all duration-300 transform hover:scale-105 hover:-rotate-1"
            >
              Get In Touch
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">✉</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-warm" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
