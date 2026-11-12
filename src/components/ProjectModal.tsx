import React, { useEffect, useState } from 'react';
import { X, Copy, Check, ExternalLink, Code2 } from 'lucide-react';
import { ProjectItem, PERSONAL_CONFIG } from '../data/projects';
import { ResilientImage } from './ResilientImage';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<
    'overview' | 'architecture' | 'code'
  >('overview');
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    setActiveTab('overview');
    setCopiedCode(false);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const handleCopyCode = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(project.codePreview.snippet).catch(() => {});
    }
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4 md:p-8 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#0D0D12] border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Top Modal Header */}
        <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/70">
          <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 truncate font-mono-code">
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              {project.indexNumber}
            </span>
            <span aria-hidden="true">·</span>
            <span>{project.categories.join(' / ')}</span>
            {project.hackathonContext && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-violet-600 dark:text-violet-400">
                  {project.hackathonContext}
                </span>
              </>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details modal"
            className="inline-flex items-center gap-1.5 py-2 px-3 text-xs font-medium text-zinc-700 dark:text-zinc-200 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Close</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-7">
          <div className="space-y-2">
            <div className="text-xs font-medium text-blue-600 dark:text-blue-400">
              {project.title}
            </div>
            <h2
              id="modal-project-title"
              className="font-display text-2xl md:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white"
            >
              {project.name}
            </h2>
            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* Visual Showcase */}
          <div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 aspect-[16/9]">
            <ResilientImage
              src={project.imageUrl}
              alt={project.imageAlt}
              fallbackTitle={project.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Segmented Tab Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-4">
            <div
              className="flex items-center gap-1 p-1 bg-zinc-100 dark:bg-zinc-900 rounded-lg"
              role="tablist"
              aria-label="Project detail sections"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'overview'}
                onClick={() => setActiveTab('overview')}
                className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeTab === 'overview'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                }`}
              >
                Overview & Capabilities
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'architecture'}
                onClick={() => setActiveTab('architecture')}
                className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeTab === 'architecture'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                }`}
              >
                System Architecture
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'code'}
                onClick={() => setActiveTab('code')}
                className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeTab === 'code'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                }`}
              >
                Implementation Preview
              </button>
            </div>

            <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono-code">
              {project.technologies.join(' · ')}
            </div>
          </div>

          {/* Tab 1: Overview & Capabilities */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-2">
                  <h3 className="text-sm font-semibold text-zinc-950 dark:text-white">
                    01. Problem Context
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {project.problemSolved}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-2">
                  <h3 className="text-sm font-semibold text-zinc-950 dark:text-white">
                    02. Engineering Solution
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {project.architectureSummary}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-zinc-950 dark:text-white">
                  Key System Capabilities
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.keyCapabilities.map((item) => (
                    <li
                      key={item}
                      className="p-3.5 rounded-lg bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800/80 text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed"
                    >
                      — {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tab 2: System Architecture Table */}
          {activeTab === 'architecture' && (
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-zinc-950 dark:text-white">
                End-to-End Stack Responsibilities
              </h3>
              <div className="overflow-x-auto border border-zinc-200 dark:border-zinc-800 rounded-xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs text-zinc-500 dark:text-zinc-400">
                      <th className="py-3 px-4 font-medium">System Layer</th>
                      <th className="py-3 px-4 font-medium">Technology</th>
                      <th className="py-3 px-4 font-medium">Responsibility</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-xs md:text-sm">
                    {project.architectureModules.map((mod) => (
                      <tr key={mod.layer}>
                        <td className="py-3.5 px-4 font-medium text-zinc-900 dark:text-zinc-100">
                          {mod.layer}
                        </td>
                        <td className="py-3.5 px-4 font-mono-code text-blue-600 dark:text-blue-400">
                          {mod.component}
                        </td>
                        <td className="py-3.5 px-4 text-zinc-600 dark:text-zinc-400">
                          {mod.responsibility}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab 3: Code Preview */}
          {activeTab === 'code' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-code text-zinc-500 dark:text-zinc-400">
                  {project.codePreview.filename} · {project.codePreview.language}
                </span>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 py-1.5 px-3 text-xs font-medium text-zinc-700 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Snippet</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 text-xs font-mono-code overflow-x-auto leading-relaxed">
                <code>{project.codePreview.snippet}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/70 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-zinc-500 dark:text-zinc-400">
            {project.githubUrl || project.liveDemoUrl ? (
              <span>Direct project links available</span>
            ) : (
              <span>
                Repository & demo URLs configurable in{' '}
                <code className="font-mono-code text-zinc-700 dark:text-zinc-300">
                  src/data/projects.ts
                </code>
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 py-2 px-4 text-xs font-medium text-zinc-800 dark:text-zinc-200 bg-zinc-200 dark:bg-zinc-800 rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>View Repository</span>
              </a>
            ) : (
              <a
                href={PERSONAL_CONFIG.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 py-2 px-4 text-xs font-medium text-zinc-800 dark:text-zinc-200 bg-zinc-200/80 dark:bg-zinc-800 rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Visit GitHub Profile (@adityasing9)</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
