import React, { useState } from 'react';
import { Send, ExternalLink, Copy, Check } from 'lucide-react';
import { PERSONAL_CONFIG } from '../data/projects';
import {
  ContactFormInput,
  ContactSubmissionRecord,
  validateContactForm,
} from '../utils/portfolioLogic';

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState<ContactFormInput>({
    name: '',
    email: '',
    subject: 'AI/ML or Full-Stack Collaboration',
    message: '',
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormInput, string>>
  >({});
  const [submissions, setSubmissions] = useState<ContactSubmissionRecord[]>([]);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyPlaceholder = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(PERSONAL_CONFIG.links.emailPlaceholder)
        .catch(() => {});
    }
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(form);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    const record: ContactSubmissionRecord = {
      ...form,
      id: `MSG-${101 + submissions.length}`,
      submittedAt: 'Confirmed just now',
    };
    setSubmissions((prev) => [record, ...prev]);
    setForm({
      name: '',
      email: '',
      subject: 'AI/ML or Full-Stack Collaboration',
      message: '',
    });
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 border-t border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-[#0B0B0F]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Configurable Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs text-zinc-500 dark:text-zinc-400">
              <span>08. Contact & Collaboration</span>
              <span aria-hidden="true" className="mx-2">·</span>
              <span>Bengaluru, India</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white text-balance">
              Let&apos;s build intelligent software together.
            </h2>

            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Open to AI/ML engineering collaborations, full-stack product
              development, hackathons, and research discussions across RAG,
              FinTech, Automation, and Web3.
            </p>

            {/* Configurable Direct Channels */}
            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 space-y-4">
              <div className="space-y-1">
                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                  Email (Editable Placeholder in{' '}
                  <code className="font-mono-code">src/data/projects.ts</code>)
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono-code text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {PERSONAL_CONFIG.links.emailPlaceholder}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyPlaceholder}
                    className="inline-flex items-center gap-1.5 py-1.5 px-3 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-md transition-colors cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={PERSONAL_CONFIG.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 py-2 px-4 text-xs font-medium text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 hover:border-blue-500 rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  <span>GitHub (@adityasing9)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={PERSONAL_CONFIG.links.linkedinPlaceholder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 py-2 px-4 text-xs font-medium text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 hover:border-blue-500 rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Session Dispatched Messages Log */}
            {submissions.length > 0 && (
              <div
                className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 space-y-3"
                aria-live="polite"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-zinc-900 dark:text-white">
                    Sent Messages ({submissions.length})
                  </span>
                  <span className="font-mono-code text-blue-600 dark:text-blue-400">
                    Recorded
                  </span>
                </div>
                <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                  {submissions.map((item) => (
                    <div key={item.id} className="py-2.5 text-xs space-y-1">
                      <div className="flex items-center justify-between font-medium text-zinc-900 dark:text-zinc-100">
                        <span>
                          {item.name} · {item.subject}
                        </span>
                        <span className="font-mono-code text-blue-500">
                          {item.id}
                        </span>
                      </div>
                      <p className="text-zinc-600 dark:text-zinc-400">
                        {item.message}
                      </p>
                      <div className="text-zinc-400 font-mono-code">
                        Reply-To: {item.email} · {item.submittedAt}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-7 bg-zinc-50 dark:bg-[#0D0D12] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 md:p-8">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium text-zinc-800 dark:text-zinc-200 mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => {
                      setForm({ ...form, name: e.target.value });
                      if (errors.name)
                        setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-lg text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-blue-500"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-rose-500" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium text-zinc-800 dark:text-zinc-200 mb-1.5"
                  >
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                      if (errors.email)
                        setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-lg text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-blue-500"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-rose-500" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-medium text-zinc-800 dark:text-zinc-200 mb-1.5"
                >
                  Topic
                </label>
                <select
                  id="contact-subject"
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-lg text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-blue-500"
                >
                  <option value="AI/ML or Full-Stack Collaboration">
                    AI/ML or Full-Stack Collaboration
                  </option>
                  <option value="Hackathon or Team Invite">
                    Hackathon or Team Invite
                  </option>
                  <option value="Software Engineering Opportunity">
                    Software Engineering Opportunity
                  </option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium text-zinc-800 dark:text-zinc-200 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => {
                    setForm({ ...form, message: e.target.value });
                    if (errors.message)
                      setErrors({ ...errors, message: undefined });
                  }}
                  placeholder="Write a message regarding your project, team, or opportunity..."
                  className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-lg text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-blue-500"
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-rose-500" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  Configurable for Formspree / EmailJS / API endpoint deployment
                </span>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 py-2.5 px-5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
