
import { useState } from "react";
import { Menu, X, Star } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-warm/20 relative">
      {/* Small decorative elements */}
      <div className="absolute top-1 left-20">
        <Star className="text-warm opacity-20" size={12} />
      </div>
      <div className="absolute top-2 right-32">
        <div className="w-1 h-1 bg-warm rounded-full opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-handwrite text-2xl md:text-3xl text-warm font-bold cursor-pointer relative">
            Muhammad Mahathir
            {/* Small underline doodle */}
            <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 200 8">
              <path d="M5,6 Q50,2 100,4 T195,5" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.3"/>
            </svg>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-sketch text-sketch hover:text-warm transition-colors duration-200 relative group"
              >
                {item.label}
                {/* Simple underline without complex animation */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-warm transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-sketch hover:text-warm transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-warm/20 pt-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block font-sketch text-sketch hover:text-warm transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
