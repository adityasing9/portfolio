import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, Trophy, ShieldCheck } from 'lucide-react';

export const Achievements: React.FC = () => {
  const { achievements } = portfolioData;

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'competition':
        return <Trophy className="w-5 h-5 text-brand" />;
      case 'certification':
        return <ShieldCheck className="w-5 h-5 text-brand" />;
      default:
        return <Award className="w-5 h-5 text-brand" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center space-x-3 mb-6">
        <span className="w-8 h-[2px] bg-brand inline-block" />
        <h2 className="text-sm uppercase tracking-[0.2em] font-bold text-brand">
          Recognition
        </h2>
      </div>

      <div className="mb-14">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight font-display">
          Achievements & Honors<span className="text-brand">.</span>
        </h3>
        <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl">
          Recognitions, competitive hackathons, and accredited industry benchmarks.
        </p>
      </div>

      {/* Minimal Typography Rows / Cards */}
      <div className="space-y-4">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="group p-6 sm:p-7 rounded-2xl bg-white dark:bg-surface-dark-card border border-neutral-200/80 dark:border-neutral-800 hover:border-brand/40 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-md"
          >
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="p-3 rounded-xl bg-brand/10 shrink-0 mt-1 md:mt-0">
                {getCategoryIcon(item.category)}
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                    {item.category}
                  </span>
                  <span className="text-xs font-medium text-brand">
                    {item.organization}
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white group-hover:text-brand transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Year Stamp */}
            <div className="shrink-0 self-start md:self-center pl-14 md:pl-0">
              <span className="font-mono text-sm font-bold text-neutral-400 dark:text-neutral-500">
                {item.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
