import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowUpRight,
  Download,
  ExternalLink,
  Search,
  Sun,
  Moon,
  Menu,
  X,
  ArrowUp,
  RotateCcw,
  GraduationCap,
} from 'lucide-react';
import {
  PERSONAL_CONFIG,
  PROJECTS,
  HACKATHONS_AND_EXPERIENCE,
  RESEARCH_AND_INTERESTS,
  ProjectFilterCategory,
  ProjectItem,
} from './data/projects';
import {
  filterProjects,
  generateResumeDocument,
} from './utils/portfolioLogic';
import { ResilientImage } from './components/ResilientImage';
import { SkillsSection } from './components/SkillsSection';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { GitHubSection } from './components/GitHubSection';
import { ContactSection } from './components/ContactSection';

const PROJECT_CATEGORIES: ProjectFilterCategory[] = [
  'All',
  'AI/ML',
  'Full Stack',
  'FinTech',
  'Blockchain',
  'Automation',
];

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [selectedProjectCategory, setSelectedProjectCategory] =
    useState<ProjectFilterCategory>('All');
  const [projectSearch, setProjectSearch] = useState('');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [resumeDownloaded, setResumeDownloaded] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 720, y: 320 });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
      setScrollProgress(pct);
      setShowBackToTop(scrollTop > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const visibleProjects = useMemo(
    () => filterProjects(PROJECTS, selectedProjectCategory, projectSearch),
    [selectedProjectCategory, projectSearch]
  );

  const handleDownloadResume = () => {
    const markdownContent = generateResumeDocument();
    const blob = new Blob([markdownContent], {
      type: 'text/markdown;charset=utf-8',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Aaditya_Singh_Resume.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setResumeDownloaded(true);
    setTimeout(() => setResumeDownloaded(false), 3000);
  };

  return (
    <div
      onMouseMove={(e) => setCursorPos({ x: e.clientX, y: e.clientY })}
      className="min-h-screen flex flex-col bg-white dark:bg-[#070709] text-zinc-900 dark:text-zinc-100 relative selection:bg-blue-600 selection:text-white"
    >
      {/* Top Scroll Progress Indicator */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-0.5 z-50 bg-transparent pointer-events-none"
      >
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-violet-500 to-blue-400 transition-transform duration-150 origin-left"
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        />
      </div>

      {/* Strictly Compliant 3-Zone Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#070709]/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 md:px-10 py-4">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#top"
            className="font-display text-lg font-bold tracking-tight text-zinc-950 dark:text-white whitespace-nowrap shrink-0"
          >
            {PERSONAL_CONFIG.name}
          </a>

          {/* Zone 2: 5 concise single-line navigation links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-600 dark:text-zinc-400"
          >
            <a
              href="#about"
              className="hover:text-zinc-950 dark:hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-zinc-950 dark:hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-zinc-950 dark:hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="hover:text-zinc-950 dark:hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Experience
            </a>
            <a
              href="#education"
              className="hover:text-zinc-950 dark:hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Education
            </a>
          </nav>

          {/* Zone 3: Primary Action + Mobile Menu Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="py-2 px-4 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              Contact Me
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={
                mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
              }
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2 rounded-lg border border-zinc-300 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Navigation */}
        {mobileMenuOpen && (
          <nav
            aria-label="Mobile Navigation"
            className="md:hidden px-6 py-4 bg-white dark:bg-[#0D0D12] border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-3 text-sm font-medium"
          >
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-zinc-700 dark:text-zinc-300"
            >
              About Me
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-zinc-700 dark:text-zinc-300"
            >
              Technical Skills
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-zinc-700 dark:text-zinc-300"
            >
              Featured Projects
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-zinc-700 dark:text-zinc-300"
            >
              Experience & Hackathons
            </a>
            <a
              href="#education"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-zinc-700 dark:text-zinc-300"
            >
              Education & Research
            </a>
            <a
              href="#github"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-zinc-700 dark:text-zinc-300"
            >
              GitHub Activity
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-blue-600 dark:text-blue-400"
            >
              Contact
            </a>
          </nav>
        )}
      </header>

      <main id="top" className="flex-1">
        {/* 1. Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24">
          {/* Subtle Cursor-Responsive Ambient Spotlight */}
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0 opacity-20 dark:opacity-30 transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(37, 99, 235, 0.14), transparent 70%)`,
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 space-y-12">
            {/* Workspace Utility Strip (Location, Education Kicker, & Theme Switcher) */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800/80 text-xs text-zinc-500 dark:text-zinc-400">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-medium text-zinc-900 dark:text-zinc-200">
                  {PERSONAL_CONFIG.professionalTitle}
                </span>
                <span aria-hidden="true">·</span>
                <span>BMSIT Bengaluru (B.E. AI & ML, 2028)</span>
                <span aria-hidden="true">·</span>
                <span>{PERSONAL_CONFIG.location}</span>
              </div>

              <button
                type="button"
                onClick={() => setIsDark((prev) => !prev)}
                aria-label={
                  isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'
                }
                className="inline-flex items-center gap-1.5 py-1.5 px-3 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 hover:border-blue-500 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {isDark ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>Light Theme</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-blue-600" />
                    <span>Dark Theme</span>
                  </>
                )}
              </button>
            </div>

            {/* Split-Screen Hero Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
              {/* Left Column: Headline, Supporting Copy, CTAs, Social Links */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-8 py-2">
                <div className="space-y-5">
                  <div className="text-xs font-mono-code text-blue-600 dark:text-blue-400">
                    {PERSONAL_CONFIG.name} · AI/ML & Full-Stack Engineering
                  </div>

                  <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-zinc-950 dark:text-white leading-[1.08] text-balance max-w-2xl">
                    {PERSONAL_CONFIG.heroHeadline}
                  </h1>

                  <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-[62ch]">
                    {PERSONAL_CONFIG.heroSupportingText}
                  </p>
                </div>

                <div className="space-y-6 pt-2">
                  {/* Primary & Secondary Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3.5">
                    <a
                      href="#projects"
                      className="inline-flex items-center gap-2 py-2.5 px-5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap shrink-0"
                    >
                      <span>View My Projects</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>

                    <button
                      type="button"
                      onClick={handleDownloadResume}
                      className="inline-flex items-center gap-2 py-2.5 px-5 text-sm font-medium text-zinc-800 dark:text-zinc-100 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 hover:border-blue-500 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <Download className="w-4 h-4 text-blue-500" />
                      <span>
                        {resumeDownloaded
                          ? 'Resume Downloaded (.md)'
                          : 'Download Resume'}
                      </span>
                    </button>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 py-2.5 px-5 text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-900/60 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg transition-colors whitespace-nowrap shrink-0"
                    >
                      <span>Contact Me</span>
                    </a>
                  </div>

                  {/* Direct Profile Links */}
                  <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                    <a
                      href={PERSONAL_CONFIG.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap shrink-0"
                    >
                      <span>GitHub (github.com/adityasing9)</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <span aria-hidden="true">·</span>
                    <a
                      href={PERSONAL_CONFIG.links.linkedinPlaceholder}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap shrink-0"
                    >
                      <span>LinkedIn</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Abstract Technology-Inspired AI/ML Architecture Visual */}
              <div className="lg:col-span-5">
                <div className="relative h-full min-h-[320px] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
                  <ResilientImage
                    src="/src/assets/images/hero_aiml_abstract_1794436801669.jpg"
                    alt="Abstract isometric visualization of neural network layers and vector embedding matrices"
                    fallbackTitle="AI/ML & Full-Stack Systems Architecture"
                    className="w-full h-full lg:h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5 text-white">
                    <div className="text-xs font-mono-code text-blue-400">
                      RAG · LLM Agents · Full-Stack PWAs · Smart Contracts
                    </div>
                    <div className="text-sm font-medium mt-0.5">
                      Combining intelligent systems with efficient software architecture
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subtle Domain Marquee Divider */}
        <div
          aria-hidden="true"
          className="border-y border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-[#0B0B0F] py-3 overflow-hidden select-none"
        >
          <div className="animate-marquee flex items-center gap-8 text-xs text-zinc-500 dark:text-zinc-400">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex items-center gap-8 shrink-0">
                <span>Artificial Intelligence & Machine Learning</span>
                <span>·</span>
                <span className="font-mono-code text-blue-600 dark:text-blue-400">
                  Retrieval-Augmented Generation (RAG)
                </span>
                <span>·</span>
                <span>Full-Stack Development</span>
                <span>·</span>
                <span className="font-mono-code text-violet-600 dark:text-violet-400">
                  Intelligent Workflow Automation
                </span>
                <span>·</span>
                <span>Cybersecurity & FinTech</span>
                <span>·</span>
                <span className="font-mono-code text-blue-600 dark:text-blue-400">
                  Blockchain & Smart Contracts
                </span>
                <span>·</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. About Me Section */}
        <section
          id="about"
          className="py-20 md:py-24 bg-zinc-50 dark:bg-[#070709]"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5 space-y-3">
                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                  01. About Me · Engineering Philosophy
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white text-balance">
                  Learning by building, continuous experimentation, and real-world value.
                </h2>
                <p className="text-xs font-mono-code text-blue-600 dark:text-blue-400 pt-1">
                  BMSIT Bengaluru · B.E. in AI & Machine Learning (2028)
                </p>
              </div>

              <div className="lg:col-span-7 space-y-4 text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {PERSONAL_CONFIG.aboutParagraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* 3 Core Engineering Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-zinc-200 dark:border-zinc-800/80">
              {PERSONAL_CONFIG.aboutPillars.map((pillar) => (
                <div
                  key={pillar.index}
                  className="p-6 rounded-2xl bg-white dark:bg-[#0D0D12] border border-zinc-200 dark:border-zinc-800/90 space-y-2.5"
                >
                  <div className="font-mono-code text-xs font-semibold text-blue-600 dark:text-blue-400">
                    {pillar.index}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-zinc-950 dark:text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Technical Skills Section */}
        <SkillsSection />

        {/* 4. Featured Projects Section */}
        <section
          id="projects"
          className="py-20 md:py-24 border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-[#070709]"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                  <span>03. Featured Projects</span>
                  <span aria-hidden="true" className="mx-2">·</span>
                  <span className="font-mono-code">
                    Showing {visibleProjects.length} of {PROJECTS.length} systems
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white text-balance">
                  Applied AI, FinTech security, offline-first PWAs, and Web3.
                </h2>
              </div>

              {/* Project Search Input */}
              <div className="relative w-full lg:w-72">
                <label htmlFor="project-search" className="sr-only">
                  Search projects by technology or name
                </label>
                <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="project-search"
                  type="search"
                  value={projectSearch}
                  onChange={(e) => setProjectSearch(e.target.value)}
                  placeholder="Filter by stack (e.g. ChromaDB, Solidity)..."
                  className="w-full pl-9 pr-4 py-2 text-xs bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-lg text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Project Category Filter Buttons: All, AI/ML, Full Stack, FinTech, Blockchain, Automation */}
            <div
              className="flex flex-wrap items-center gap-1.5 p-1.5 bg-zinc-200/70 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl w-fit"
              role="group"
              aria-label="Filter projects by category"
            >
              {PROJECT_CATEGORIES.map((category) => {
                const isActive = selectedProjectCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedProjectCategory(category)}
                    className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
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

            {/* Responsive Project Bento Grid */}
            {visibleProjects.length === 0 ? (
              <div className="p-12 rounded-2xl bg-white dark:bg-[#0D0D12] border border-zinc-200 dark:border-zinc-800 text-center space-y-4">
                <p className="text-base font-medium text-zinc-900 dark:text-white">
                  No projects match "{projectSearch}" in{' '}
                  {selectedProjectCategory}.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProjectCategory('All');
                    setProjectSearch('');
                  }}
                  className="inline-flex items-center gap-1.5 py-2 px-4 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Project Filters</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {visibleProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onSelect={setActiveProject}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* 5. Experience and Hackathons Section */}
        <section
          id="experience"
          className="py-20 md:py-24 border-t border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-[#0B0B0F]"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
            <div className="max-w-2xl space-y-2">
              <div className="text-xs text-zinc-500 dark:text-zinc-400">
                04. Experience & Hackathons
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white text-balance">
                Hackathon builds & hands-on engineering practice.
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {HACKATHONS_AND_EXPERIENCE.map((item) => (
                <div
                  key={item.id}
                  className="p-7 rounded-2xl bg-zinc-50 dark:bg-[#0D0D12] border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono-code text-blue-600 dark:text-blue-400">
                      <span>{item.organizationOrEvent}</span>
                      <span className="text-zinc-500">{item.period}</span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-zinc-950 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>

                    <ul className="space-y-1.5 pt-2 text-xs text-zinc-700 dark:text-zinc-300">
                      {item.highlights.map((hl) => (
                        <li key={hl}>— {hl}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 text-xs font-mono-code text-zinc-500 dark:text-zinc-400">
                    {item.technologies.join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Education & 7. Research and Interests Section */}
        <section
          id="education"
          className="py-20 md:py-24 border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-[#070709]"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-16">
            {/* Education Block */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-2">
                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                  05. Academic Foundation
                </div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-zinc-950 dark:text-white text-balance">
                  Education.
                </h2>
              </div>

              <div className="lg:col-span-7 p-7 rounded-2xl bg-white dark:bg-[#0D0D12] border border-zinc-200 dark:border-zinc-800 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <GraduationCap className="w-5 h-5 text-blue-500 shrink-0" />
                    <span className="text-xs font-mono-code text-blue-600 dark:text-blue-400">
                      Expected Graduation: {PERSONAL_CONFIG.education.expectedGraduation}
                    </span>
                  </div>
                  <span className="text-xs text-zinc-500 font-mono-code">
                    {PERSONAL_CONFIG.education.location}
                  </span>
                </div>

                <h3 className="font-display text-xl md:text-2xl font-bold text-zinc-950 dark:text-white">
                  {PERSONAL_CONFIG.education.degree}
                </h3>

                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {PERSONAL_CONFIG.education.institution}
                </p>

                <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400">
                  {PERSONAL_CONFIG.education.focusAreas.join(' · ')}
                </div>
              </div>
            </div>

            {/* 7. Research and Interests Block */}
            <div className="pt-12 border-t border-zinc-200 dark:border-zinc-800/80 space-y-10">
              <div className="max-w-2xl space-y-2">
                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                  06. Research & Technical Interests
                </div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-zinc-950 dark:text-white text-balance">
                  Exploring intelligent architectures, security, and decentralized systems.
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {RESEARCH_AND_INTERESTS.map((interest) => (
                  <div
                    key={interest.index}
                    className="p-6 rounded-2xl bg-white dark:bg-[#0D0D12] border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2">
                      <div className="font-mono-code text-xs text-blue-600 dark:text-blue-400">
                        {interest.index} · {interest.subtitle}
                      </div>
                      <h3 className="font-display text-lg font-bold text-zinc-950 dark:text-white">
                        {interest.domain}
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {interest.summary}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-zinc-200/70 dark:border-zinc-800/80 text-xs font-mono-code text-zinc-500 dark:text-zinc-400">
                      {interest.focusTopics.join(' · ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. GitHub Activity Section */}
        <GitHubSection />

        {/* 9. Contact Section */}
        <ContactSection />
      </main>

      {/* 10. Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-[#070709] py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <div>
            © {new Date().getFullYear()} {PERSONAL_CONFIG.name} · BMSIT
            Bengaluru · India
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#about"
              className="hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href={PERSONAL_CONFIG.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="#contact"
              className="hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>

      {/* Back to Top Floating Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-lg transition-transform hover:-translate-y-0.5 cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Project Details Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}
