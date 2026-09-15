import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const Portfolio: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section id="portfolio" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center space-x-3 mb-6">
        <span className="w-8 h-[2px] bg-brand inline-block" />
        <h2 className="text-sm uppercase tracking-[0.2em] font-bold text-brand">
          Portfolio
        </h2>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight font-display">
            Selected Work<span className="text-brand">.</span>
          </h3>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl">
            A showcase of digital products, design systems, and resilient engineering built for real-world impact.
          </p>
        </div>

        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
          Showing 0{projects.length} Works
        </span>
      </div>

      {/* Modern Editorial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        {projects.map((project, index) => {
          const isLarge = index === 0 || index === 1;
          const colSpan = isLarge ? 'lg:col-span-6' : 'lg:col-span-6';

          return (
            <article
              key={project.id}
              className={`group relative rounded-3xl overflow-hidden bg-white dark:bg-surface-dark-card border border-neutral-200/80 dark:border-neutral-800 transition-all duration-500 hover:shadow-2xl hover:border-brand/40 flex flex-col justify-between ${colSpan}`}
            >
              {/* Project Visual Image Canvas */}
              <div className="relative w-full h-[280px] sm:h-[340px] overflow-hidden bg-neutral-950">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                />

                {/* Editorial Top Overlays */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider bg-black/60 text-white backdrop-blur-md border border-white/10">
                    PROJECT {project.number}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium tracking-wide bg-white/90 dark:bg-black/80 text-neutral-900 dark:text-white backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white space-y-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs uppercase tracking-widest text-brand font-semibold">
                      Direct Access
                    </span>
                    <p className="text-sm text-neutral-200 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white tracking-tight group-hover:text-brand transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links / Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-white hover:text-brand dark:hover:text-brand transition-colors group/btn"
                    >
                      <span>VIEW PROJECT</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 text-brand" />
                    </a>

                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-brand dark:hover:text-brand hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                        aria-label="View Source Code on GitHub"
                        title="Source Code"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-brand dark:hover:text-brand hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                        aria-label="Visit Live Deployment"
                        title="Live Deployment"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
