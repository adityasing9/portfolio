import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <GithubIcon className="w-4 h-4" />;
      case 'Linkedin':
        return <LinkedinIcon className="w-4 h-4" />;
      case 'Instagram':
        return <InstagramIcon className="w-4 h-4" />;
      case 'Mail':
        return <Mail className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800/80 bg-white/50 dark:bg-[#121212]/80 backdrop-blur-md py-12 px-6 sm:px-10 lg:px-16 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Brand / Copyright */}
        <div className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left">
          <a
            href="#home"
            className="text-xl font-black tracking-tight text-neutral-900 dark:text-white"
          >
            <span>{portfolioData.personal.shortName}</span>
            <span className="text-brand">.</span>
          </a>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center space-x-4">
          {portfolioData.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-brand dark:hover:text-brand hover:bg-brand/10 dark:hover:bg-brand/15 transition-colors"
              aria-label={social.name}
            >
              {getSocialIcon(social.icon)}
            </a>
          ))}
        </div>

        {/* Right: Back to Top Button */}
        <div>
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 hover:text-brand dark:hover:text-brand transition-colors py-2 px-4 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1 text-brand" />
          </button>
        </div>
      </div>
    </footer>
  );
};
