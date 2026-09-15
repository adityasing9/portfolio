import React, { useState } from 'react';

interface PortraitProps {
  className?: string;
}

export const Portrait: React.FC<PortraitProps> = ({ className = '' }) => {
  // Try custom user portrait in public/portrait.webp or /portrait.png, with fallback
  const [imgSrc, setImgSrc] = useState<string>('/portrait.webp');
  const [attempt, setAttempt] = useState<number>(0);

  const fallbackUrl = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85";

  const handleError = () => {
    if (attempt === 0) {
      setAttempt(1);
      setImgSrc('/portrait.png');
    } else if (attempt === 1) {
      setAttempt(2);
      setImgSrc(fallbackUrl);
    }
  };

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Visual Portrait Container */}
      <div className="relative w-[300px] sm:w-[380px] md:w-[440px] lg:w-[490px] xl:w-[530px] aspect-[4/5] flex items-end justify-center">
        {attempt >= 2 ? (
          /* High-aesthetic cut-out or styled mask */
          <div className="relative w-full h-full flex items-end justify-center">
            <img
              src={fallbackUrl}
              alt="Professional Portrait"
              className="w-full h-full object-cover object-top rounded-b-2xl filter contrast-105 select-none pointer-events-none drop-shadow-2xl mask-image-radial"
              style={{
                maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
              }}
            />
          </div>
        ) : (
          <img
            src={imgSrc}
            alt="Portrait"
            onError={handleError}
            className="w-full h-full object-contain object-bottom select-none pointer-events-none drop-shadow-2xl z-20"
          />
        )}

        {/* Informative subtle tooltip for the user in development */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 hover:opacity-100 transition-opacity bg-black/80 text-white text-[11px] px-3 py-1 rounded-full whitespace-nowrap z-30 pointer-events-auto backdrop-blur-sm shadow-lg border border-white/10">
          💡 Replace with your transparent portrait at <code className="text-brand font-mono">public/portrait.png</code>
        </div>
      </div>
    </div>
  );
};
