import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, GraduationCap } from 'lucide-react';

export const Experience: React.FC = () => {
  const { timeline } = portfolioData;

  return (
    <section id="experience" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center space-x-3 mb-6">
        <span className="w-8 h-[2px] bg-brand inline-block" />
        <h2 className="text-sm uppercase tracking-[0.2em] font-bold text-brand">
          Career Path
        </h2>
      </div>

      <div className="mb-16">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight font-display">
          Experience & Education<span className="text-brand">.</span>
        </h3>
        <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl">
          A track record of leadership, continuous learning, and software craftsmanship.
        </p>
      </div>

      {/* Clean Vertical Timeline */}
      <div className="relative border-l-2 border-neutral-200 dark:border-neutral-800 ml-4 sm:ml-6 md:ml-32 pl-8 sm:pl-10 space-y-12">
        {timeline.map((item, index) => {
          const isExp = item.type === 'experience';

          return (
            <div key={index} className="relative group">
              {/* Year Marker (Shown on left side on desktop, or above on mobile) */}
              <div className="md:absolute md:-left-40 md:top-0 mb-2 md:mb-0">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider text-brand bg-brand/10 border border-brand/20">
                  {item.year}
                </span>
              </div>

              {/* Timeline Bullet Point on vertical rule */}
              <div className="absolute -left-[41px] sm:-left-[49px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#171717] border-2 border-brand group-hover:scale-125 transition-transform flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-brand" />
              </div>

              {/* Timeline Entry Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-surface-dark-card border border-neutral-200/70 dark:border-neutral-800 group-hover:border-brand/30 transition-all duration-300 group-hover:shadow-lg">
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                  {isExp ? (
                    <Briefcase className="w-3.5 h-3.5 text-brand" />
                  ) : (
                    <GraduationCap className="w-3.5 h-3.5 text-brand" />
                  )}
                  <span>{item.organization}</span>
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white tracking-tight group-hover:text-brand transition-colors">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {item.description}
                </p>

                {item.highlights && item.highlights.length > 0 && (
                  <ul className="mt-4 space-y-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <span className="text-brand font-bold">›</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
