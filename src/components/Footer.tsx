
import { Github, Linkedin, Instagram, Twitter, Heart, Smile } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sketch text-cream py-12 relative">
      {/* Hand-drawn top border */}
      <svg className="absolute top-0 left-0 right-0 w-full h-4" viewBox="0 0 1200 20" preserveAspectRatio="none">
        <path d="M0,15 Q300,8 600,12 T1200,10" stroke="#8B4513" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main content with doodles */}
          <div className="mb-8 relative">
            <h3 className="font-handwrite text-4xl text-warm font-bold mb-4 cursor-default relative">
              Muhammad Mahathir
              {/* Smiley face doodle */}
              <Smile className="absolute -top-6 -right-12 text-warm opacity-50" size={24} />
            </h3>
            <p className="font-sans text-cream/80 text-lg mb-6">
              Creative Developer & Designer
            </p>
            <p className="font-sketch text-cream/60 max-w-2xl mx-auto relative">
              "Creating beautiful digital experiences, one line of code at a time."
              {/* Small stars around quote */}
              <svg className="absolute -left-4 -top-2 w-3 h-3 text-warm opacity-40" viewBox="0 0 20 20">
                <path d="M10,2 L12,8 L18,8 L13,12 L15,18 L10,14 L5,18 L7,12 L2,8 L8,8 Z" fill="currentColor"/>
              </svg>
              <svg className="absolute -right-4 -bottom-2 w-3 h-3 text-warm opacity-30" viewBox="0 0 20 20">
                <path d="M10,2 L12,8 L18,8 L13,12 L15,18 L10,14 L5,18 L7,12 L2,8 L8,8 Z" fill="currentColor"/>
              </svg>
            </p>
          </div>

          {/* Social Links with minimal hover effect */}
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="bg-warm/20 p-3 transition-colors duration-200 hover:bg-warm relative"
              >
                <social.icon 
                  size={24} 
                  className="text-cream" 
                />
                {/* Small corner decoration */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-cream/20 rounded-full"></div>
              </a>
            ))}
          </div>

          {/* Hand-drawn divider */}
          <svg className="mx-auto mb-6" width="150" height="20" viewBox="0 0 150 20">
            <path d="M10,10 Q50,5 100,12 T140,8" stroke="#8B4513" strokeWidth="2" fill="none" strokeLinecap="round"/>
            <path d="M15,15 Q55,18 95,14" stroke="#8B4513" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5"/>
          </svg>

          {/* Bottom text with doodles */}
          <div className="font-sans text-cream/60 text-sm relative">
            <p className="flex items-center justify-center gap-2 flex-wrap">
              © {currentYear} Muhammad Mahathir. Made with 
              <Heart size={16} className="text-warm animate-pulse" />
              and lots of coffee.
              {/* Coffee cup doodle */}
              <svg className="ml-2 w-4 h-4 text-warm opacity-50" viewBox="0 0 20 20">
                <path d="M3,8 L3,14 Q3,16 5,16 L13,16 Q15,16 15,14 L15,8 M16,10 Q18,10 18,12 Q18,14 16,14" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M6,4 L6,6 M9,4 L9,6 M12,4 L12,6" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
              </svg>
            </p>
            <p className="mt-2">
              All rights reserved. Design inspired by creativity and passion.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
