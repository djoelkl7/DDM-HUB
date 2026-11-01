import React, { useState } from 'react';
import { SITE_CONFIG, SOCIAL_LINKS } from '../data/siteData';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenBookModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateSection,
  onOpenBookModal,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setNewsletterEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black dark:bg-[#070101] text-slate-300 border-t border-neutral-900 dark:border-red-950/60 pt-16 pb-12 transition-colors duration-300 mt-auto relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={SITE_CONFIG.logoUrl}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = SITE_CONFIG.fallbackLogo;
                }}
                alt="DDM-HUB"
                className="h-10 w-auto object-contain rounded-full brightness-110"
              />
              <span className="font-black text-xl text-white tracking-tight">
                DDM<span className="text-red-600">-HUB</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              We Decorate the world with premium Design, Editing, and Digital solutions. Your Vision, Our Creation.
            </p>

            {/* Direct Contact info */}
            <div className="pt-1 space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <i className="fas fa-phone text-red-500 text-[10px]" />
                <a href={`tel:${SITE_CONFIG.phoneTel}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <i className="fab fa-whatsapp text-green-500 text-[11px]" />
                <a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  {SITE_CONFIG.whatsappNumber}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-envelope text-amber-500 text-[10px]" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/40 text-[11px] font-bold text-red-400">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>Open for new client briefs</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-extrabold text-white text-xs sm:text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <button
                  onClick={() => onNavigateSection('hero')}
                  className="hover:text-red-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('services')}
                  className="hover:text-red-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('social-posts')}
                  className="hover:text-red-400 transition-colors"
                >
                  Recent Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('reviews')}
                  className="hover:text-red-400 transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('traffic-monitor')}
                  className="hover:text-red-400 transition-colors"
                >
                  Traffic Monitor
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('contact')}
                  className="hover:text-red-400 transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-extrabold text-white text-xs sm:text-sm uppercase tracking-wider">
              Top Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <button
                  onClick={() => onNavigateSection('services')}
                  className="hover:text-red-400 transition-colors text-left"
                >
                  Sponsored Ads & Promotion
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('services')}
                  className="hover:text-red-400 transition-colors text-left"
                >
                  High-Impact Video Editing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('services')}
                  className="hover:text-red-400 transition-colors text-left"
                >
                  Brand Visual Identity & Logos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('services')}
                  className="hover:text-red-400 transition-colors text-left"
                >
                  UI/UX & Web Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('services')}
                  className="hover:text-red-400 transition-colors text-left"
                >
                  CAC Corporate Registration
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('services')}
                  className="hover:text-red-400 transition-colors text-left"
                >
                  AI Voice & Lip Synchronization
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-extrabold text-white text-xs sm:text-sm uppercase tracking-wider">
              Subscribe For Updates
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Get design drops, new tutorial resources, and exclusive agency bundle offers.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 text-xs font-semibold">
                ✓ You are subscribed to DDM-HUB!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-red-500"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-white hover:bg-neutral-200 text-black font-extrabold text-xs uppercase tracking-wider transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}

            {/* Social Icons Strip */}
            <div className="pt-2">
              <span className="block text-[10px] uppercase font-bold text-neutral-500 mb-2">
                Social Networks
              </span>
              <div className="flex flex-wrap gap-2">
                {SOCIAL_LINKS.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    title={item.name}
                    className="w-7 h-7 rounded-lg bg-neutral-900 hover:bg-red-600 hover:text-white text-slate-400 flex items-center justify-center transition-colors text-xs"
                  >
                    <i className={`fab ${item.icon}`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} DDM-HUB. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigateSection('services')}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigateSection('services')}
              className="hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-red-500 hover:text-red-400 font-bold transition-colors"
            >
              <span>Back to top</span>
              <i className="fas fa-arrow-up text-[10px]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
