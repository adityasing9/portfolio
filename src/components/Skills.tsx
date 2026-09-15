import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code2, Server, Wrench, Layers } from 'lucide-react';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState<number>(0);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-5 h-5 text-brand" />;
      case 1:
        return <Server className="w-5 h-5 text-brand" />;
      case 2:
        return <Wrench className="w-5 h-5 text-brand" />;
      default:
        return <Layers className="w-5 h-5 text-brand" />;
    }
  };

  return (
    <section id="skills" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center space-x-3 mb-6">
        <span className="w-8 h-[2px] bg-brand inline-block" />
        <h2 className="text-sm uppercase tracking-[0.2em] font-bold text-brand">
          Expertise & Capabilities
        </h2>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight font-display">
            My Skills<span className="text-brand">.</span>
          </h3>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl">
            A curated toolkit built through years of hands-on engineering, product intuition, and constant iteration.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {skills.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 ${
                activeTab === idx
                  ? 'bg-neutral-900 text-white dark:bg-brand dark:text-white shadow-md'
                  : 'bg-neutral-200/80 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((category, index) => {
          const isHighlighted = activeTab === index;
          return (
            <div
              key={category.title}
              onMouseEnter={() => setActiveTab(index)}
              className={`group p-8 rounded-2xl transition-all duration-300 relative border flex flex-col justify-between ${
                isHighlighted
                  ? 'bg-white dark:bg-surface-dark-card border-brand/50 shadow-xl dark:shadow-brand/5 scale-[1.02]'
                  : 'bg-surface-light dark:bg-surface-dark-card/60 border-neutral-200/70 dark:border-neutral-800 hover:border-brand/30 hover:scale-[1.01]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-brand/10 inline-flex">
                    {getCategoryIcon(index)}
                  </div>
                  <span className="text-xs font-mono font-medium text-neutral-400">
                    0{index + 1}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-brand transition-colors">
                  {category.title}
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skill Tags: Interactive badges with clean typography, NO boring progress bars */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/tag inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs font-medium bg-neutral-100 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 border border-neutral-200/80 dark:border-neutral-700/60 hover:border-brand hover:bg-brand/10 dark:hover:bg-brand/15 hover:text-brand dark:hover:text-brand transition-all duration-200 cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand/40 group-hover/tag:bg-brand mr-2 transition-colors" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
