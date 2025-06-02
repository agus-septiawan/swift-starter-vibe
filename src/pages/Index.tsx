
import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="font-handwrite text-6xl text-warm font-bold">
          Selamat Datang!
        </h1>
        <p className="font-sans text-xl text-sketch/70">
          Project Anda sudah siap untuk dikembangkan
        </p>
      </div>
    </div>
  );
};

export default Index;
