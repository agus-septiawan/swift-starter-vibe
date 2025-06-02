
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { PenTool, Code, Palette, Sparkles, Heart } from "lucide-react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [showIcon, setShowIcon] = useState(false);

  const loadingTexts = [
    "Menyiapkan portfolio...",
    "Memuat project terbaik...",
    "Menata karya kreatif...",
    "Menyusun pengalaman...",
    "Hampir siap..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2;
        
        // Update text based on progress
        if (newProgress >= 20 && newProgress < 40) {
          setCurrentText(loadingTexts[1]);
        } else if (newProgress >= 40 && newProgress < 60) {
          setCurrentText(loadingTexts[2]);
        } else if (newProgress >= 60 && newProgress < 80) {
          setCurrentText(loadingTexts[3]);
        } else if (newProgress >= 80 && newProgress < 100) {
          setCurrentText(loadingTexts[4]);
        } else if (newProgress === 0) {
          setCurrentText(loadingTexts[0]);
        }

        // Show icon animation at 30%
        if (newProgress >= 30) {
          setShowIcon(true);
        }

        // Complete loading
        if (newProgress >= 100) {
          setTimeout(() => onComplete(), 1000);
          return 100;
        }

        return newProgress;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-cream via-white to-cream flex items-center justify-center z-50">
      {/* Simple background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating creative elements */}
        <div className="absolute top-1/4 right-1/4 animate-float">
          <Code className="text-warm/30" size={24} />
        </div>
        <div className="absolute bottom-1/3 left-1/4 animate-bounce">
          <Palette className="text-warm/25" size={20} />
        </div>
        <div className="absolute top-1/2 left-1/3 animate-pulse">
          <Sparkles className="text-warm/20" size={18} />
        </div>
      </div>

      {/* Main loading content */}
      <div className="text-center space-y-8 relative z-10 max-w-md mx-auto px-6">
        {/* Portfolio title */}
        <div className="relative">
          <h1 className="font-handwrite text-5xl md:text-6xl text-warm font-bold mb-2 animate-fade-in">
            Portfolio
            {/* Heart doodle */}
            <Heart 
              className="absolute -top-4 -right-8 text-warm/60 animate-bounce" 
              size={20} 
            />
          </h1>
          
          {/* Simple underline */}
          <div className="mx-auto w-32 h-1 bg-warm/40 rounded-full animate-pulse"></div>
        </div>

        {/* Central icon with animation */}
        <div className="relative flex justify-center">
          <div 
            className={`transition-all duration-1000 ${
              showIcon ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
            }`}
          >
            <div className="relative">
              {/* Main icon container */}
              <div className="w-20 h-20 bg-warm/10 rounded-full flex items-center justify-center relative animate-pulse">
                <PenTool 
                  className="text-warm animate-spin-slow" 
                  size={32} 
                />
                
                {/* Simple decorative dots */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-warm/30 rounded-full animate-ping"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-warm/20 rounded-full animate-bounce"></div>
              </div>

              {/* Simple text doodles */}
              <div className="absolute -top-6 -left-8 font-handwrite text-warm/70 text-sm animate-wiggle">
                ✨
              </div>
              <div className="absolute -bottom-6 -right-8 font-handwrite text-warm/70 text-sm animate-bounce">
                💻
              </div>
            </div>
          </div>
        </div>

        {/* Progress section */}
        <div className="space-y-4">
          {/* Progress bar */}
          <div className="relative">
            <Progress 
              value={progress} 
              className="h-3 bg-warm/20 border-2 border-warm/30" 
            />
            
            {/* Progress percentage */}
            <div className="mt-2 font-handwrite text-2xl text-warm font-bold">
              {progress}%
            </div>

            {/* Simple decorative frame */}
            <div className="absolute -inset-2 border-2 border-dashed border-warm/20 rounded transform rotate-1"></div>
          </div>

          {/* Loading text */}
          <div className="relative">
            <p className="font-sketch text-lg text-sketch/70 min-h-[28px] animate-fade-in">
              {currentText}
            </p>
          </div>
        </div>

        {/* Additional descriptive text */}
        <div className="opacity-50">
          <p className="font-handwrite text-warm text-sm animate-pulse">
            Menyajikan karya terbaik Muhammad Mahathir...
          </p>
        </div>
      </div>

      {/* Simple corner decorations */}
      <div className="absolute top-4 left-4">
        <div className="w-8 h-8 border-2 border-warm/20 border-l-0 border-t-0 animate-pulse"></div>
      </div>

      <div className="absolute bottom-4 right-4">
        <div className="w-8 h-8 border-2 border-warm/20 border-r-0 border-b-0 animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
