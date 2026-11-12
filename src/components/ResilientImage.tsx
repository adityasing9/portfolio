import React, { useState } from 'react';
import { Cpu } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  fallbackTitle: string;
  className?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  fallbackTitle,
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-zinc-200 via-zinc-100 to-zinc-200 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 text-zinc-600 dark:text-zinc-400 p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Cpu className="w-7 h-7 text-blue-500 mb-2 stroke-[1.5]" />
        <span className="text-xs font-medium tracking-tight text-zinc-700 dark:text-zinc-300">
          {fallbackTitle}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
