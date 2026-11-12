import React from 'react';
import { ArrowUpRight, ExternalLink, Code2 } from 'lucide-react';
import { ProjectItem } from '../data/projects';
import { ResilientImage } from './ResilientImage';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
}) => {
  const isWide = project.bentoSpan === 'wide';

  return (
    <article
      className={`group relative bg-white dark:bg-[#0D0D12] border border-zinc-200 dark:border-zinc-800/90 hover:border-blue-500/50 dark:hover:border-blue-500/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 ${
        isWide ? 'lg:col-span-2' : 'lg:col-span-1'
      }`}
    >
      {/* Top Visual Container — Uniform row height so adjacent Bento cards align */}
      <div className="relative h-60 sm:h-68 lg:h-76 overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200/80 dark:border-zinc-800/80">
        <ResilientImage
          src={project.imageUrl}
          alt={project.imageAlt}
          fallbackTitle={`${project.name} — ${project.title}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      {/* Card Body: outer padding p-6 >= inner gap-4 */}
      <div className="p-6 md:p-7 flex-1 flex flex-col justify-between gap-5">
        <div className="space-y-2.5">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-mono-code">
            <span>
              {project.indexNumber} · {project.categories.join(' / ')}
            </span>
            {project.hackathonContext && (
              <span className="text-violet-600 dark:text-violet-400">
                {project.hackathonContext}
              </span>
            )}
          </div>

          <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
            {project.title}
          </div>

          <h3 className="font-display text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
            <button
              type="button"
              onClick={() => onSelect(project)}
              className="text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 cursor-pointer"
            >
              {project.name}
            </button>
          </h3>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-[68ch]">
            {project.description}
          </p>
        </div>

        {/* Footer: Unboxed Technology Stack + Action Buttons */}
        <div className="pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono-code">
            {project.technologies.join(' · ')}
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 py-2 px-3 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800/90 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 py-2 px-3 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800/90 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}

            <button
              type="button"
              onClick={() => onSelect(project)}
              aria-label={`View architecture details for ${project.name}`}
              className="inline-flex items-center gap-1.5 py-2 px-4 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Project Details</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
