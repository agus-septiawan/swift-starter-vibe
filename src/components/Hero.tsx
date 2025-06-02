
import { ArrowDown, Coffee, Palette, Heart } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source
            src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9a1c2e7&profile_id=139&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-cream/60"></div>
      </div>

      {/* Animated handwriting elements */}
      <div className="absolute inset-0 opacity-20 z-10">
        {/* Animated coffee stain that grows */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-warm rounded-full opacity-30 blur-sm animate-pulse"></div>
        <div className="absolute top-24 left-14 w-8 h-8 bg-warm rounded-full opacity-20 blur-sm animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Animated sketch lines that draw themselves */}
        <div className="absolute top-1/3 right-20">
          <svg width="120" height="80" viewBox="0 0 120 80" className="text-warm">
            <path 
              d="M10,40 Q30,20 50,40 T90,40" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none" 
              strokeLinecap="round" 
              strokeDasharray="100"
              className="animate-[sketch-draw_3s_ease-in-out_infinite]"
            />
            <path 
              d="M15,50 Q35,30 55,50 T95,50" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              fill="none" 
              strokeLinecap="round" 
              strokeDasharray="80"
              className="animate-[sketch-draw_4s_ease-in-out_infinite]"
              style={{ animationDelay: '1s' }}
            />
          </svg>
        </div>
        
        {/* Floating doodle elements */}
        <div className="absolute bottom-1/4 left-1/4 animate-[float_6s_ease-in-out_infinite]">
          <Palette className="text-warm transform rotate-12" size={20} />
        </div>
        <div className="absolute top-1/2 right-1/3 animate-[float_5s_ease-in-out_infinite]" style={{ animationDelay: '2s' }}>
          <Coffee className="text-warm transform -rotate-12" size={18} />
        </div>

        {/* Animated paper texture lines */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-px bg-warm/10 animate-[fadeInOut_4s_ease-in-out_infinite]"
              style={{
                top: `${20 + i * 10}%`,
                animationDelay: `${i * 0.3}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-20">
        <div className="max-w-4xl mx-auto">
          {/* Main Title with handwriting effect */}
          <div className="mb-8 relative">
            {/* Animated underline sketch effect */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-warm opacity-30 rounded-full transform rotate-1 animate-[wiggle_3s_ease-in-out_infinite]"></div>
            
            <h1 className="font-handwrite text-5xl md:text-7xl lg:text-8xl text-warm font-bold mb-4 relative animate-[typewriter_2s_ease-out]">
              Hello, I'm
              {/* Animated heart doodle */}
              <Heart className="absolute -top-4 -right-8 text-warm opacity-60 transform rotate-12 animate-[heartbeat_2s_ease-in-out_infinite]" size={24} />
            </h1>
            <h2 className="font-handwrite text-6xl md:text-8xl lg:text-9xl text-sketch font-bold leading-tight relative animate-[slideInUp_1.5s_ease-out]" style={{ animationDelay: '0.5s' }}>
              Muhammad Mahathir
              {/* Animated underline scribble */}
              <svg className="absolute -bottom-4 left-0 w-full h-8" viewBox="0 0 400 20">
                <path 
                  d="M10,15 Q100,5 200,12 T390,10" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  fill="none" 
                  strokeLinecap="round" 
                  className="text-warm opacity-40 animate-[sketch-draw_3s_ease-in-out_infinite]"
                  strokeDasharray="400"
                  style={{ animationDelay: '1s' }}
                />
              </svg>
            </h2>
          </div>

          {/* Subtitle with animated doodle */}
          <div className="mb-12 relative">
            <p className="font-sketch text-xl md:text-2xl lg:text-3xl text-sketch/80 leading-relaxed animate-[fadeIn_1s_ease-out]" style={{ animationDelay: '1.5s' }}>
              Creative Developer & Designer
            </p>
            {/* Animated arrow doodle pointing to subtitle */}
            <svg className="absolute -left-16 top-0 w-12 h-12 text-warm opacity-50 animate-[drawArrow_2s_ease-in-out_infinite]" viewBox="0 0 40 40">
              <path 
                d="M5,20 L25,20 M20,15 L25,20 L20,25" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none" 
                strokeLinecap="round"
                strokeDasharray="40"
              />
            </svg>
          </div>

          {/* Description */}
          <div className="mb-12">
            <p className="font-sans text-lg md:text-xl text-sketch/70 max-w-2xl mx-auto leading-relaxed animate-[fadeIn_1s_ease-out]" style={{ animationDelay: '2s' }}>
              I create beautiful, functional, and user-friendly digital experiences 
              that bring ideas to life through code and design.
            </p>
          </div>

          {/* CTA Buttons with ink splatter effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-[fadeIn_1s_ease-out]" style={{ animationDelay: '2.5s' }}>
            <a
              href="#projects"
              className="bg-warm text-cream px-8 py-4 rounded-none font-sketch text-lg transition-all duration-300 shadow-lg relative overflow-hidden group"
            >
              <span className="relative z-10">View My Work</span>
              <span className="inline-block ml-2 relative z-10">→</span>
              {/* Ink splatter effect */}
              <div className="absolute inset-0 bg-sketch transform scale-0 group-hover:scale-100 transition-transform duration-500 origin-center"></div>
              {/* Small coffee stain */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-sketch rounded-full opacity-20 animate-pulse"></div>
            </a>
            <a
              href="#contact"
              className="border-2 border-warm text-warm px-8 py-4 rounded-none font-sketch text-lg transition-all duration-300 relative group"
            >
              <span className="relative z-10">Get In Touch</span>
              <span className="inline-block ml-2 relative z-10">✉</span>
              {/* Animated border effect */}
              <div className="absolute inset-0 border-2 border-sketch transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </a>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center animate-[float_3s_ease-in-out_infinite]">
            <ArrowDown className="text-warm animate-bounce" size={32} />
            <div className="mt-2 w-px h-8 bg-warm opacity-30 animate-[grow_2s_ease-in-out_infinite]"></div>
            {/* Small doodle around scroll indicator */}
            <svg className="mt-2 w-8 h-8 text-warm opacity-40" viewBox="0 0 30 30">
              <circle 
                cx="15" 
                cy="15" 
                r="12" 
                stroke="currentColor" 
                strokeWidth="1" 
                fill="none" 
                strokeDasharray="75"
                className="animate-[spin_10s_linear_infinite]"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Additional floating elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-warm rounded-full opacity-20 animate-[float_4s_ease-in-out_infinite]"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 1.2}s`
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
