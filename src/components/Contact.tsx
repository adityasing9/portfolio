import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);

    // Simulate clean submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center space-x-3 mb-6">
        <span className="w-8 h-[2px] bg-brand inline-block" />
        <h2 className="text-sm uppercase tracking-[0.2em] font-bold text-brand">
          Initiate Contact
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">
        {/* Left Column: Provocative CTA & Direct Info */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900 dark:text-white tracking-tight leading-[1.08] font-display">
              Let's Work Together<span className="text-brand">.</span>
            </h3>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
              Have an idea, project, or opportunity? Let's talk about building something extraordinary together.
            </p>
          </div>

          <div className="space-y-4 pt-4">
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="group p-5 rounded-2xl bg-white dark:bg-surface-dark-card border border-neutral-200/80 dark:border-neutral-800 hover:border-brand/50 transition-all duration-300 flex items-center gap-4 hover:shadow-md"
            >
              <div className="p-3 rounded-xl bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400 block">
                  Email Me Directly
                </span>
                <span className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white group-hover:text-brand transition-colors">
                  {portfolioData.personal.email}
                </span>
              </div>
            </a>

            <div className="grid grid-cols-2 gap-4">
              <a
                href={portfolioData.socials.find((s) => s.name === 'LinkedIn')?.url || '#'}
                target="_blank"
                rel="noreferrer"
                className="group p-4 rounded-2xl bg-white dark:bg-surface-dark-card border border-neutral-200/80 dark:border-neutral-800 hover:border-brand/50 transition-all duration-300 flex items-center gap-3 hover:shadow-md"
              >
                <div className="p-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 group-hover:bg-brand group-hover:text-white transition-colors">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400 block">
                    Network
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white group-hover:text-brand transition-colors">
                    LinkedIn
                  </span>
                </div>
              </a>

              <a
                href={portfolioData.socials.find((s) => s.name === 'GitHub')?.url || '#'}
                target="_blank"
                rel="noreferrer"
                className="group p-4 rounded-2xl bg-white dark:bg-surface-dark-card border border-neutral-200/80 dark:border-neutral-800 hover:border-brand/50 transition-all duration-300 flex items-center gap-3 hover:shadow-md"
              >
                <div className="p-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 group-hover:bg-brand group-hover:text-white transition-colors">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400 block">
                    Repositories
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white group-hover:text-brand transition-colors">
                    GitHub
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Minimal Contact Form */}
        <div className="lg:col-span-7 bg-white dark:bg-surface-dark-card p-8 sm:p-10 rounded-3xl border border-neutral-200/80 dark:border-neutral-800 shadow-xl">
          <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
            Send a Message
          </h4>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8">
            Fill out the form below, and I'll respond within 24 to 48 hours.
          </p>

          {submitted && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center gap-3 animate-fade-in">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <p className="text-sm font-medium">
                Thank you! Your message has been sent successfully. I will get back to you soon.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs uppercase tracking-wider font-semibold text-neutral-600 dark:text-neutral-300 mb-2"
                >
                  Your Name <span className="text-brand">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-[#151515] border border-neutral-200 dark:border-neutral-700/80 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-wider font-semibold text-neutral-600 dark:text-neutral-300 mb-2"
                >
                  Your Email <span className="text-brand">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. alex@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-[#151515] border border-neutral-200 dark:border-neutral-700/80 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-all"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-xs uppercase tracking-wider font-semibold text-neutral-600 dark:text-neutral-300 mb-2"
              >
                Project / Inquiry Topic
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. Web App Redesign or Freelance Collaboration"
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-[#151515] border border-neutral-200 dark:border-neutral-700/80 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs uppercase tracking-wider font-semibold text-neutral-600 dark:text-neutral-300 mb-2"
              >
                Message <span className="text-brand">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project scope, goals, and timeline..."
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-[#151515] border border-neutral-200 dark:border-neutral-700/80 text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-all resize-y"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-brand hover:bg-brand-hover text-white font-bold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-lg shadow-brand/25 active:scale-98 disabled:opacity-50"
            >
              <span>{loading ? 'SENDING...' : 'SEND MESSAGE'}</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
