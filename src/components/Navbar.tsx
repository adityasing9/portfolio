import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ChevronDown, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<'EN' | 'ES' | 'FR'>('EN');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const languages: ('EN' | 'ES' | 'FR')[] = ['EN', 'ES', 'FR'];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/85 dark:bg-[#171717]/85 backdrop-blur-md border-b border-surface-light-border dark:border-surface-dark-border shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left: Brand / Logo */}
        <a
          href="#home"
          className="group flex items-center text-xl sm:text-2xl font-black tracking-tight text-surface-dark dark:text-surface-light transition-colors"
        >
          <span>{portfolioData.personal.shortName}</span>
          <span className="text-brand transition-transform duration-300 group-hover:scale-150 inline-block ml-0.5">
            .
          </span>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-7 lg:space-x-9" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-sm font-semibold tracking-wide transition-colors py-1 group ${
                  isActive
                    ? 'text-brand dark:text-brand'
                    : 'text-neutral-700 dark:text-neutral-300 hover:text-brand dark:hover:text-brand'
                }`}
              >
                <span>{link.name}.</span>
                {/* Subtle animated underline indicator */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-brand rounded-full transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Right: Controls (Language Selector + Dark Mode Toggle) */}
        <div className="flex items-center space-x-4 sm:space-x-5">
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center space-x-1 text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-300 hover:text-brand dark:hover:text-brand transition-colors py-1 px-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5"
              aria-label="Select Language"
              aria-expanded={langDropdownOpen}
            >
              <span>{currentLang}</span>
              <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200" style={{ transform: langDropdownOpen ? 'rotate(180deg)' : 'none' }} />
            </button>

            {langDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setLangDropdownOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-28 bg-white dark:bg-[#1E1E1E] rounded-xl shadow-xl border border-neutral-200 dark:border-neutral-800 py-1.5 z-50 animate-fade-in">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setCurrentLang(lang);
                        setLangDropdownOpen(false);
                      }}
                      className="w-full flex items-center justify-between px-3 py-1.5 text-xs font-medium text-left text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                    >
                      <span>{lang}</span>
                      {currentLang === lang && <Check className="w-3.5 h-3.5 text-brand" />}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Theme Toggle Pill Switch */}
          <button
            onClick={toggleTheme}
            className="relative w-12 h-6.5 rounded-full p-0.5 bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand/40 transition-colors flex items-center justify-between px-1"
            aria-label="Toggle light or dark theme"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <Sun className="w-3 h-3 text-amber-500 z-10" />
            <Moon className="w-3 h-3 text-neutral-400 z-10" />
            <span
              className={`absolute top-0.5 bottom-0.5 w-5 h-5 rounded-full bg-white dark:bg-brand shadow-sm transition-transform duration-300 ease-out flex items-center justify-center ${
                theme === 'dark' ? 'translate-x-[22px]' : 'translate-x-0'
              }`}
            />
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-700 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/5 transition-colors focus:outline-none"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#171717]/95 backdrop-blur-xl border-b border-surface-light-border dark:border-surface-dark-border px-6 pt-3 pb-7 transition-all duration-300 shadow-xl animate-fade-in">
          <nav className="flex flex-col space-y-4 pt-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-semibold transition-colors py-2 flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800/60 ${
                    isActive
                      ? 'text-brand'
                      : 'text-neutral-800 dark:text-neutral-200 hover:text-brand'
                  }`}
                >
                  <span>{link.name}.</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-brand" />}
                </a>
              );
            })}
          </nav>

          <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
            <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
              Theme & Language
            </span>
            <div className="flex items-center space-x-3">
              <span className="text-xs font-semibold uppercase text-neutral-600 dark:text-neutral-300">
                {currentLang}
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
