import {
  ArrowDown,
  Coffee,
  Palette,
  Heart,
  PenTool,
  Sparkles,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        {/* Animated coffee stain effect */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-warm rounded-full opacity-30 blur-sm animate-pulse"></div>
        <div className="absolute top-24 left-14 w-8 h-8 bg-warm rounded-full opacity-20 blur-sm animate-bounce"></div>

        {/* Animated sketch lines */}
        <div className="absolute top-1/3 right-20">
          <svg
            width="120"
            height="80"
            viewBox="0 0 120 80"
            className="text-warm animate-sketch-draw"
          >
            <path
              d="M10,40 Q30,20 50,40 T90,40"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="200"
              strokeDashoffset="200"
              className="animate-sketch-draw"
            />
          </svg>
        </div>

        {/* Animated doodle elements */}
        <div className="absolute bottom-1/4 left-1/4 animate-bounce">
          <Palette className="text-warm transform rotate-12" size={20} />
        </div>
        <div className="absolute top-1/2 right-1/3 animate-spin-slow">
          <Coffee className="text-warm transform -rotate-12" size={18} />
        </div>
        <div className="absolute bottom-1/3 right-1/4 animate-float">
          <PenTool className="text-warm" size={24} />
        </div>
        <div className="absolute top-1/3 left-1/3 animate-pulse">
          <Sparkles className="text-warm" size={22} />
        </div>
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-6 text-center relative z-10 flex-1 flex items-center">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced main title with handwriting effect */}
          <div className="mb-8 relative">
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-warm opacity-30 rounded-full transform rotate-1 animate-pulse"></div>

            <h1 className="font-handwrite text-5xl md:text-7xl lg:text-8xl text-warm font-bold mb-4 relative animate-fade-in">
              Hello, I'm
              {/* Animated heart doodle */}
              <Heart
                className="absolute -top-4 -right-8 text-warm opacity-60 transform rotate-12 animate-bounce"
                size={24}
              />
            </h1>
            <h2 className="font-handwrite text-6xl md:text-8xl lg:text-9xl text-sketch font-bold leading-tight relative animate-slide-up">
              Muhammad Mahathir
              {/* Animated underline scribble */}
              <svg
                className="absolute -bottom-4 left-0 w-full h-8"
                viewBox="0 0 400 20"
              >
                <path
                  d="M10,15 Q100,5 200,12 T390,10"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  className="text-warm opacity-40 animate-sketch-draw"
                  strokeDasharray="400"
                  strokeDashoffset="400"
                />
              </svg>
            </h2>
          </div>

          {/* Enhanced subtitle with animated doodle */}
          <div className="mb-12 relative animate-fade-in-up">
            <p className="font-sketch text-xl md:text-2xl lg:text-3xl text-sketch/80 leading-relaxed">
              Creative Developer & Designer
            </p>
            {/* Animated arrow doodle - Adjusted positioning */}
            <svg
              className="absolute -left-24 top-1/2 -translate-y-1/2 w-12 h-12 text-warm opacity-50 animate-sketch-draw hidden md:block"
              viewBox="0 0 40 40"
            >
              <path
                d="M5,20 L25,20 M20,15 L25,20 L20,25"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="50"
                strokeDashoffset="50"
              />
            </svg>
          </div>

          {/* Description with fade-in animation */}
          <div className="mb-12 animate-fade-in-up delay-200">
            <p className="font-sans text-lg md:text-xl text-sketch/70 max-w-2xl mx-auto leading-relaxed">
              I create beautiful, functional, and user-friendly digital
              experiences that bring ideas to life through code and design.
            </p>
          </div>

          {/* Enhanced CTA Buttons with hover animations */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-300">
            <a
              href="#projects"
              className="bg-warm text-cream px-8 py-4 rounded-none font-sketch text-lg transition-all duration-300 shadow-lg relative hover:transform hover:translate-y-[-2px] hover:shadow-xl group w-full sm:w-auto"
            >
              <span className="relative z-10">View My Work</span>
              <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform relative z-10">
                →
              </span>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-sketch rounded-full opacity-20"></div>
            </a>
            <a
              href="#contact"
              className="border-2 border-warm text-warm px-8 py-4 rounded-none font-sketch text-lg transition-all duration-300 relative hover:bg-warm hover:text-cream group w-full sm:w-auto"
            >
              <span className="relative z-10">Get In Touch</span>
              <span className="inline-block ml-2 transform group-hover:rotate-45 transition-transform relative z-10">
                ✉
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator - Fixed positioning */}
      <div className="relative z-10 pb-8">
        <div className="flex flex-col items-center animate-bounce">
          <ArrowDown className="text-warm animate-pulse" size={32} />
          <div className="mt-2 w-px h-8 bg-warm opacity-30 animate-expand"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
