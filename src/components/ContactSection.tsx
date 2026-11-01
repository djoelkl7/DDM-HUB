import React, { useState } from 'react';
import { SITE_CONFIG, SOCIAL_LINKS } from '../data/siteData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 relative bg-neutral-50/50 dark:bg-[#070202]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 text-red-600 dark:text-red-500 font-bold uppercase tracking-widest text-xs sm:text-sm">
            <i className="fas fa-circle text-[6px] animate-pulse" />
            <span>Connect With Our Team</span>
            <i className="fas fa-circle text-[6px] animate-pulse" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 dark:text-white mt-2 pattern-text">
            Start Your Creative Project
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm max-w-xl mx-auto mt-2">
            Have a project in mind or need custom creative quotes? Send us a direct message or chat instantly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Direct Info & Quick Channels */}
          <div className="lg:col-span-5 bg-white dark:bg-neutral-900/90 rounded-3xl p-6 sm:p-8 border border-neutral-200/80 dark:border-neutral-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={SITE_CONFIG.logoUrl}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = SITE_CONFIG.fallbackLogo;
                  }}
                  alt={SITE_CONFIG.name}
                  className="w-12 h-12 object-contain rounded-full shadow-sm"
                />
                <div>
                  <h3 className="font-extrabold text-lg text-neutral-900 dark:text-white">
                    DDM-HUB Studio
                  </h3>
                  <span className="text-xs text-red-600 dark:text-red-400 font-semibold">
                    Global Creative Network
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                We Decorate the world with premium Design, Editing, and Digital solutions. Your Vision, Our Creation.
              </p>

              <div className="space-y-3.5 mb-8">
                {/* Phone */}
                <div className="flex items-center gap-3 text-xs text-neutral-700 dark:text-neutral-300">
                  <div className="w-9 h-9 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center shrink-0">
                    <i className="fas fa-phone text-xs" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-neutral-400 uppercase font-bold">Direct Phone</span>
                    <a href={`tel:${SITE_CONFIG.phoneTel}`} className="font-semibold text-neutral-900 dark:text-white hover:text-red-500 transition-colors">
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-3 text-xs text-neutral-700 dark:text-neutral-300">
                  <div className="w-9 h-9 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center shrink-0">
                    <i className="fab fa-whatsapp text-sm" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-neutral-400 uppercase font-bold">WhatsApp Direct</span>
                    <a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noreferrer" className="font-semibold text-neutral-900 dark:text-white hover:text-green-500 transition-colors">
                      {SITE_CONFIG.whatsappNumber} (24/7 Response)
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 text-xs text-neutral-700 dark:text-neutral-300">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                    <i className="fas fa-envelope text-xs" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-neutral-400 uppercase font-bold">Email Inquiries</span>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="font-semibold text-neutral-900 dark:text-white hover:text-red-500 transition-colors">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                {/* Turnaround */}
                <div className="flex items-center gap-3 text-xs text-neutral-700 dark:text-neutral-300">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                    <i className="fas fa-clock text-xs" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-neutral-400 uppercase font-bold">Turnaround Time</span>
                    <span className="font-semibold text-neutral-900 dark:text-white">Rush 24h & Standard 48h Deliveries</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800">
              <span className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-3">
                Official Social Profiles
              </span>
              <div className="grid grid-cols-2 gap-2">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800/80 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 flex items-center gap-2.5 transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white dark:bg-neutral-900 flex items-center justify-center text-xs shrink-0 shadow-sm group-hover:text-red-500">
                      <i className={`fab ${s.icon}`} />
                    </div>
                    <div className="overflow-hidden">
                      <span className="block text-[11px] font-bold truncate group-hover:text-red-500 transition-colors">
                        {s.name}
                      </span>
                      {s.handle && (
                        <span className="block text-[9px] text-neutral-400 truncate">
                          {s.handle}
                        </span>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-neutral-900/90 rounded-3xl p-6 sm:p-8 border border-neutral-200/80 dark:border-neutral-800 shadow-xl flex flex-col justify-center">
            {sent ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-500 mx-auto flex items-center justify-center text-2xl">
                  <i className="fas fa-paper-plane" />
                </div>
                <h3 className="text-2xl font-black text-neutral-900 dark:text-white">
                  Message Dispatched!
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 max-w-sm mx-auto">
                  Thank you! Our creative lead will review your submission and respond within 2 hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="px-6 py-2 rounded-full bg-red-600 text-white font-bold text-xs hover:bg-red-700"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-black text-neutral-900 dark:text-white mb-2">
                  Send A Direct Project Inquiry
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Samuel Green"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs text-neutral-900 dark:text-white focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. samuel@studio.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs text-neutral-900 dark:text-white focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                    Subject / Project Topic
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Full Brand Identity & Video Editing Bundle"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs text-neutral-900 dark:text-white focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                    Your Requirements & Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide details about your project: target audience, timeline, specific deliverables..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs text-neutral-900 dark:text-white focus:outline-none focus:border-red-500 resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="text-[11px] text-neutral-400">
                    <i className="fas fa-shield text-[10px] mr-1 text-emerald-500" />
                    Strict confidentiality assured
                  </div>

                  <button
                    type="submit"
                    className="px-8 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs tracking-wide shadow-lg shadow-red-600/30 transition-transform active:scale-95"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
