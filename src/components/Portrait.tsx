import React, { useState } from 'react';

interface PortraitProps {
  className?: string;
}

export const Portrait: React.FC<PortraitProps> = ({ className = '' }) => {
  // Use /portrait.png with cache-busting so updates always show immediately
  const [imgSrc, setImgSrc] = useState<string>('/portrait.png');
  const [hasError, setHasError] = useState(false);

  const fallbackUrl = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85";

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackUrl);
    }
  };

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Visual Portrait Container */}
      <div className="relative w-[300px] sm:w-[380px] md:w-[440px] lg:w-[490px] xl:w-[530px] aspect-[4/5] flex items-end justify-center">
        <img
          src={imgSrc}
          alt="Aaditya Singh"
          onError={handleError}
          className="w-full h-full object-contain object-bottom select-none pointer-events-none drop-shadow-2xl z-20 rounded-b-2xl"
          style={{
            maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
          }}
        />

        {/* Informative subtle tooltip for the user in development */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 hover:opacity-100 transition-opacity bg-black/80 text-white text-[11px] px-3 py-1 rounded-full whitespace-nowrap z-30 pointer-events-auto backdrop-blur-sm shadow-lg border border-white/10">
          💡 Custom portrait active: <code className="text-brand font-mono">public/portrait.png</code>
        </div>
      </div>
    </div>
  );
};
