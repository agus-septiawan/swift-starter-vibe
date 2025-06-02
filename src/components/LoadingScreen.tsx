
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { PenTool, Coffee, Palette, Sparkles, Heart } from "lucide-react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [showIcon, setShowIcon] = useState(false);

  const loadingTexts = [
    "Menyiapkan kanvas...",
    "Mengasah pensil...",
    "Mencampur cat...",
    "Menulis cerita...",
    "Hampir selesai..."
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
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated sketch lines */}
        <svg
          className="absolute top-20 left-10 text-warm/20 animate-pulse"
          width="100"
          height="60"
          viewBox="0 0 100 60"
        >
          <path
            d="M10,30 Q30,10 50,30 T90,30"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="100"
            strokeDashoffset="100"
            className="animate-sketch-draw"
          />
        </svg>

        <svg
          className="absolute bottom-20 right-10 text-warm/15 animate-bounce"
          width="80"
          height="80"
          viewBox="0 0 80 80"
        >
          <circle
            cx="40"
            cy="40"
            r="30"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeDasharray="100"
            strokeDashoffset="100"
            className="animate-sketch-draw"
          />
        </svg>

        {/* Floating doodles */}
        <div className="absolute top-1/4 right-1/4 animate-float">
          <Coffee className="text-warm/30" size={24} />
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
        {/* Handwriting title */}
        <div className="relative">
          <h1 className="font-handwrite text-5xl md:text-6xl text-warm font-bold mb-2 animate-fade-in">
            Memuat...
            {/* Heart doodle */}
            <Heart 
              className="absolute -top-4 -right-8 text-warm/60 animate-bounce" 
              size={20} 
            />
          </h1>
          
          {/* Handwritten underline */}
          <svg
            className="mx-auto"
            width="200"
            height="15"
            viewBox="0 0 200 15"
          >
            <path
              d="M10,8 Q60,3 120,8 T190,6"
              stroke="#8B4513"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="200"
              strokeDashoffset="200"
              className="animate-sketch-draw"
            />
          </svg>
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
                
                {/* Decorative circles around icon */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-warm/30 rounded-full animate-ping"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-warm/20 rounded-full animate-bounce"></div>
              </div>

              {/* Handwritten doodles around icon */}
              <div className="absolute -top-6 -left-8 font-handwrite text-warm/70 text-sm animate-wiggle">
                ✨
              </div>
              <div className="absolute -bottom-6 -right-8 font-handwrite text-warm/70 text-sm animate-bounce">
                🎨
              </div>
            </div>
          </div>
        </div>

        {/* Progress section */}
        <div className="space-y-4">
          {/* Progress bar with handwriting style */}
          <div className="relative">
            <Progress 
              value={progress} 
              className="h-3 bg-warm/20 border-2 border-warm/30" 
            />
            
            {/* Progress percentage */}
            <div className="mt-2 font-handwrite text-2xl text-warm font-bold">
              {progress}%
            </div>

            {/* Decorative frame around progress */}
            <div className="absolute -inset-2 border-2 border-dashed border-warm/20 rounded transform rotate-1"></div>
          </div>

          {/* Loading text with typewriter effect */}
          <div className="relative">
            <p className="font-sketch text-lg text-sketch/70 min-h-[28px] animate-fade-in">
              {currentText}
            </p>
            
            {/* Handwritten arrow pointing to text */}
            <svg
              className="absolute -left-12 top-1/2 -translate-y-1/2 text-warm/50 animate-bounce hidden sm:block"
              width="30"
              height="20"
              viewBox="0 0 30 20"
            >
              <path
                d="M5,10 L20,10 M17,7 L20,10 L17,13"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Additional decorative text */}
        <div className="opacity-50">
          <p className="font-handwrite text-warm text-sm animate-pulse">
            Sedang menyiapkan pengalaman terbaik untuk Anda...
          </p>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-4 left-4">
        <svg width="40" height="40" viewBox="0 0 40 40" className="text-warm/20">
          <path
            d="M5,5 L35,5 L35,35"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="60"
            strokeDashoffset="60"
            className="animate-sketch-draw"
          />
        </svg>
      </div>

      <div className="absolute bottom-4 right-4">
        <svg width="40" height="40" viewBox="0 0 40 40" className="text-warm/20">
          <path
            d="M35,35 L5,35 L5,5"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="60"
            strokeDashoffset="60"
            className="animate-sketch-draw"
          />
        </svg>
      </div>
    </div>
  );
};

export default LoadingScreen;
