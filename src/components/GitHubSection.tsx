import React, { useEffect, useState } from 'react';
import { ExternalLink, GitBranch, RefreshCw } from 'lucide-react';
import { PERSONAL_CONFIG } from '../data/projects';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  updated_at: string;
  fork: boolean;
}

export const GitHubSection: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [status, setStatus] = useState<'loading' | 'loaded' | 'offline'>(
    'loading'
  );

  const fetchGitHubRepos = async () => {
    setStatus('loading');
    try {
      const response = await fetch(
        `https://api.github.com/users/${PERSONAL_CONFIG.links.githubUsername}/repos?sort=updated&per_page=6`
      );
      if (!response.ok) {
        setStatus('offline');
        return;
      }
      const data: GitHubRepo[] = await response.json();
      if (Array.isArray(data)) {
        setRepos(data.filter((r) => !r.fork).slice(0, 6));
        setStatus('loaded');
      } else {
        setStatus('offline');
      }
    } catch {
      setStatus('offline');
    }
  };

  useEffect(() => {
    fetchGitHubRepos();
  }, []);

  return (
    <section
      id="github"
      className="py-20 md:py-24 border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-[#070709]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs text-zinc-500 dark:text-zinc-400">
              <span>07. Open Source & Codebase</span>
              <span aria-hidden="true" className="mx-2">·</span>
              <span className="font-mono-code">
                github.com/{PERSONAL_CONFIG.links.githubUsername}
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white text-balance">
              GitHub profile & public repository feed.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={fetchGitHubRepos}
              aria-label="Refresh public GitHub repositories"
              className="inline-flex items-center gap-1.5 py-2.5 px-4 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 hover:border-blue-500 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Sync GitHub API</span>
            </button>

            <a
              href={PERSONAL_CONFIG.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 py-2.5 px-5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <span>Open GitHub (@adityasing9)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Profile Card + Live Public Repository Feed */}
        <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-[#0D0D12] border border-zinc-200 dark:border-zinc-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-blue-500" />
                <span className="font-display text-lg font-semibold text-zinc-950 dark:text-white">
                  {PERSONAL_CONFIG.name} (@{PERSONAL_CONFIG.links.githubUsername})
                </span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                Public repositories and source code hosted on GitHub. Live API feed
                with zero fabricated statistics.
              </p>
            </div>

            <a
              href={PERSONAL_CONFIG.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono-code text-blue-600 dark:text-blue-400 hover:underline whitespace-nowrap shrink-0"
            >
              {PERSONAL_CONFIG.links.github}
            </a>
          </div>

          {status === 'loading' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[0, 1, 2].map((skeleton) => (
                <div
                  key={skeleton}
                  className="p-5 rounded-xl bg-zinc-100/70 dark:bg-zinc-900/50 border border-zinc-200/60 dark:border-zinc-800/60 h-28 animate-pulse"
                />
              ))}
            </div>
          )}

          {status === 'loaded' && repos.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/60 transition-colors flex flex-col justify-between gap-3"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-display text-sm font-semibold text-zinc-950 dark:text-white truncate">
                        {repo.name}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2">
                      {repo.description || 'Public software repository on GitHub.'}
                    </p>
                  </div>
                  <div className="text-[11px] font-mono-code text-zinc-500">
                    {repo.language || 'Repository'} · Updated{' '}
                    {new Date(repo.updated_at).toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric',
                    })}
                  </div>
                </a>
              ))}
            </div>
          )}

          {(status === 'offline' ||
            (status === 'loaded' && repos.length === 0)) && (
            <div className="p-6 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Direct GitHub Profile Access
                </p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  Explore Aaditya Singh&apos;s public repositories, commit history,
                  and ongoing AI/ML & full-stack experiments directly on GitHub.
                </p>
              </div>
              <a
                href={PERSONAL_CONFIG.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 py-2 px-4 text-xs font-medium text-white bg-zinc-900 dark:bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <span>View on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
