
import { Github, Linkedin, Instagram, Twitter, Heart } from "lucide-react";

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
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-warm transform -rotate-1"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main content */}
          <div className="mb-8">
            <h3 className="font-handwrite text-4xl text-warm font-bold mb-4 transform hover:animate-wiggle cursor-default">
              Muhammad Mahathir
            </h3>
            <p className="font-sans text-cream/80 text-lg mb-6">
              Creative Developer & Designer
            </p>
            <p className="font-sketch text-cream/60 max-w-2xl mx-auto">
              "Creating beautiful digital experiences, one line of code at a time."
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="group bg-warm/20 p-3 hover:bg-warm transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <social.icon 
                  size={24} 
                  className="text-cream group-hover:animate-wiggle" 
                />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-32 h-1 bg-warm mx-auto mb-6 transform rotate-1"></div>

          {/* Bottom text */}
          <div className="font-sans text-cream/60 text-sm">
            <p className="flex items-center justify-center gap-2 flex-wrap">
              © {currentYear} Muhammad Mahathir. Made with 
              <Heart size={16} className="text-warm animate-pulse" />
              and lots of coffee.
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
