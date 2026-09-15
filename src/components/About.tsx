import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { MapPin, GraduationCap, Compass, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center space-x-3 mb-12 sm:mb-16">
        <span className="w-8 h-[2px] bg-brand inline-block" />
        <h2 className="text-sm uppercase tracking-[0.2em] font-bold text-brand">
          {about.heading}
        </h2>
      </div>

      {/* Two Column Editorial Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Provocative Large Typography & Key Facts */}
        <div className="lg:col-span-6 space-y-8">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white leading-[1.18] font-display">
            {about.introLarge}
          </h3>

          <div className="p-6 sm:p-8 rounded-2xl bg-surface-light dark:bg-surface-dark-card border border-neutral-200 dark:border-neutral-800 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand/10 rounded-bl-full pointer-events-none" />
            
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Personal Overview</span>
            </h4>

            <div className="space-y-4 text-sm text-neutral-700 dark:text-neutral-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-neutral-900 dark:text-neutral-100">Location: </span>
                  <span>{about.location}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <GraduationCap className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-neutral-900 dark:text-neutral-100">Education: </span>
                  <span>{about.education}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Compass className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-neutral-900 dark:text-neutral-100">Interests: </span>
                  <span>{about.interests}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800">
                <span className="font-semibold text-neutral-900 dark:text-neutral-100">Current Focus: </span>
                <span className="text-neutral-600 dark:text-neutral-400">{about.currentFocus}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Editorial Description */}
        <div className="lg:col-span-6 space-y-6 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
          {about.biography.map((paragraph, index) => (
            <p key={index} className="relative pl-4 border-l-2 border-transparent hover:border-brand transition-colors">
              {paragraph}
            </p>
          ))}

          <div className="pt-6">
            <div className="inline-flex items-center gap-4 p-4 rounded-xl bg-brand/5 border border-brand/20">
              <div className="w-2.5 h-2.5 rounded-full bg-brand animate-ping" />
              <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                Open for selected freelance opportunities & high-impact full-time roles.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
