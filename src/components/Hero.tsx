import React from 'react';
import { Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { PaintSplash } from './PaintSplash';
import { Portrait } from './Portrait';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <GithubIcon className="w-4 h-4" />;
      case 'Linkedin':
        return <LinkedinIcon className="w-4 h-4" />;
      case 'Instagram':
        return <InstagramIcon className="w-4 h-4" />;
      case 'Mail':
        return <Mail className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-20 pb-8 sm:py-24 px-3 sm:px-6 lg:px-10 flex items-center justify-center">
      {/* Outer Card Container with ~24px rounded corners & subtle editorial border */}
      <div className="relative w-full max-w-[1500px] h-[860px] max-h-[92vh] min-h-[640px] rounded-[24px] overflow-hidden shadow-2xl border border-black/5 dark:border-white/10 flex flex-col justify-between">
        
        {/* The 50/50 Split Background */}
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 z-0">
          {/* Left Side: Off-white Warm Minimal Surface */}
          <div className="bg-[#F3F3F1] dark:bg-[#1D1D1D] w-full h-full transition-colors duration-300 relative" />
          
          {/* Right Side: Deep Charcoal / Near-Black Minimal Surface */}
          <div className="bg-[#171717] dark:bg-[#121212] w-full h-full transition-colors duration-300 relative hidden md:block" />
        </div>

        {/* Center Artistic Stage: Paint Splash + Overlapping Portrait */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 overflow-hidden">
          {/* Large Artistic Orange Paint Splash extending across both halves */}
          <div className="absolute w-[800px] sm:w-[950px] md:w-[1100px] lg:w-[1250px] max-w-none transform -translate-y-4 md:-translate-y-6 transition-transform duration-700">
            <PaintSplash className="w-full h-auto" />
          </div>

          {/* Large Professional Portrait overlapping center split */}
          <div className="absolute bottom-0 flex items-end justify-center pointer-events-auto">
            <Portrait className="transform translate-y-2 sm:translate-y-0" />
          </div>
        </div>

        {/* Floating Headline & CTA Overlay (Centered at the lower section of portrait) */}
        <div className="absolute inset-x-0 bottom-16 sm:bottom-20 z-20 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
          <div className="max-w-2xl mx-auto space-y-4 pointer-events-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-[1.12] drop-shadow-[0_4px_16px_rgba(0,0,0,0.65)] font-display select-none">
              <span className="block">{portfolioData.personal.headlineLine1}</span>
              <span className="block mt-1">{portfolioData.personal.headlineLine2}</span>
            </h1>

            {/* Minimal Outlined Button */}
            <div className="pt-2 flex justify-center">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-7 py-2.5 text-xs sm:text-sm font-semibold tracking-widest uppercase rounded-md border border-white/80 text-white bg-black/25 backdrop-blur-sm transition-all duration-300 hover:bg-brand hover:border-brand hover:text-white hover:shadow-[0_8px_25px_rgba(241,90,36,0.5)] active:scale-95"
              >
                <span>GET IN TOUCH</span>
              </a>
            </div>
          </div>
        </div>

        {/* Left Vertical Social Bar (Desktop) */}
        <div className="hidden lg:flex absolute bottom-12 left-10 z-20 flex-col items-center space-y-5">
          <div className="flex flex-col space-y-4">
            {portfolioData.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-700 hover:text-brand transition-colors p-1"
                aria-label={social.name}
              >
                {getSocialIcon(social.icon)}
              </a>
            ))}
          </div>
          {/* Minimal Vertical Rule */}
          <div className="w-[1.5px] h-12 bg-neutral-400" />
        </div>

        {/* Right Vertical Scroll Indicator (Desktop) */}
        <div className="hidden lg:flex absolute bottom-12 right-10 z-20 items-center space-x-3 rotate-90 origin-right translate-x-3">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-neutral-400 select-none">
            SCROLL
          </span>
          <div className="w-8 h-[1.5px] bg-neutral-500 animate-pulse-subtle" />
        </div>

        {/* Mobile Horizontal Social Bar (Shown only on small screens) */}
        <div className="lg:hidden relative z-20 mt-auto pb-4 pt-2 flex justify-center items-center space-x-6">
          {portfolioData.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-600 dark:text-neutral-300 hover:text-brand transition-colors p-1.5"
              aria-label={social.name}
            >
              {getSocialIcon(social.icon)}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
