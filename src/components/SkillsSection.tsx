import React, { useMemo, useState } from 'react';
import {
  Terminal,
  Layout,
  Server,
  Database,
  Cpu,
  Blocks,
  Cloud,
  Wrench,
  Search,
} from 'lucide-react';
import {
  SkillCategoryName,
  TECHNICAL_SKILLS,
} from '../data/projects';
import { filterSkills } from '../utils/portfolioLogic';

const SKILL_CATEGORIES: SkillCategoryName[] = [
  'All',
  'Programming',
  'Frontend',
  'Backend',
  'Databases',
  'AI and Machine Learning',
  'Blockchain',
  'Cloud and DevOps',
  'Development Tools',
];

function getCategoryIcon(category: Exclude<SkillCategoryName, 'All'>) {
  switch (category) {
    case 'Programming':
      return <Terminal className="w-4 h-4 text-blue-500 shrink-0" />;
    case 'Frontend':
      return <Layout className="w-4 h-4 text-violet-500 shrink-0" />;
    case 'Backend':
      return <Server className="w-4 h-4 text-blue-500 shrink-0" />;
    case 'Databases':
      return <Database className="w-4 h-4 text-violet-500 shrink-0" />;
    case 'AI and Machine Learning':
      return <Cpu className="w-4 h-4 text-blue-500 shrink-0" />;
    case 'Blockchain':
      return <Blocks className="w-4 h-4 text-violet-500 shrink-0" />;
    case 'Cloud and DevOps':
      return <Cloud className="w-4 h-4 text-blue-500 shrink-0" />;
    case 'Development Tools':
      return <Wrench className="w-4 h-4 text-violet-500 shrink-0" />;
  }
}

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<SkillCategoryName>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = useMemo(
    () => filterSkills(TECHNICAL_SKILLS, selectedCategory, searchQuery),
    [selectedCategory, searchQuery]
  );

  return (
    <section
      id="skills"
      className="py-20 md:py-24 border-t border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-[#0B0B0F]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs text-zinc-500 dark:text-zinc-400">
              <span>02. Technical Stack & Ecosystem</span>
              <span aria-hidden="true" className="mx-2">·</span>
              <span className="font-mono-code">
                {filteredSkills.length} of {TECHNICAL_SKILLS.length} technologies shown
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white text-balance">
              Core technologies across AI/ML, full-stack systems, and Web3.
            </h2>
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72">
            <label htmlFor="skill-search" className="sr-only">
              Search technical skills
            </label>
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="skill-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. RAG, FastAPI, Docker)..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-zinc-50 dark:bg-zinc-900/90 border border-zinc-300 dark:border-zinc-800 rounded-lg text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Interactive Category Filter Bar */}
        <div
          className="flex flex-wrap items-center gap-1.5 p-1.5 bg-zinc-100 dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-zinc-800 rounded-xl"
          role="group"
          aria-label="Filter skills by category"
        >
          {SKILL_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        {filteredSkills.length === 0 ? (
          <div className="p-10 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 text-center space-y-3">
            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              No skills match "{searchQuery}" in {selectedCategory}.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="py-2 px-4 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
            >
              Reset Skill Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="p-5 rounded-xl bg-zinc-50/90 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/90 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors flex flex-col justify-between gap-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-base font-semibold text-zinc-950 dark:text-zinc-100">
                      {skill.name}
                    </span>
                    {getCategoryIcon(skill.category)}
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {skill.context}
                  </p>
                </div>

                <div className="pt-2 border-t border-zinc-200/60 dark:border-zinc-800/70 text-[11px] text-zinc-500 dark:text-zinc-500 font-mono-code">
                  {skill.category}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
