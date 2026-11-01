import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../data/siteData';

interface NavbarProps {
  onOpenBookModal: () => void;
  onNavigateSection: (sectionId: string) => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBookModal,
  onNavigateSection,
  isDark,
  onToggleTheme,
}) => {
  const [isIpadDropdownOpen, setIsIpadDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    setIsIpadDropdownOpen(false);
    onNavigateSection(id);
  };

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[98%] max-w-[1600px] z-50 bg-white/95 dark:bg-red-950/95 md:bg-white/80 md:dark:bg-red-950/80 backdrop-blur-xl border border-neutral-200 dark:border-white/10 rounded-full shadow-2xl shadow-black/5 dark:shadow-red-900/20 transition-all duration-300 ring-1 ring-black/5 dark:ring-white/5 ${
          isScrolled ? 'py-1' : 'py-1.5'
        }`}
      >
        <div className="w-full px-3 sm:px-6 lg:px-8">
          <div className="relative flex justify-between items-center h-16 md:h-18 w-full">
            
            {/* Brand Logo Zone */}
            <div className="flex-shrink-0 flex items-center z-20">
              <button
                onClick={() => handleLinkClick('hero')}
                className="flex items-center gap-3 transition-transform hover:scale-105 focus:outline-none"
              >
                <img
                  src={SITE_CONFIG.logoUrl}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = SITE_CONFIG.fallbackLogo;
                  }}
                  alt={SITE_CONFIG.name}
                  className="h-10 md:h-11 w-auto object-contain rounded-full shadow-sm"
                />
                <span className="font-extrabold text-lg md:text-xl tracking-tight text-neutral-900 dark:text-white">
                  DDM<span className="text-red-600">-HUB</span>
                </span>
              </button>
            </div>

            {/* Desktop Navigation Links (Large Screens) */}
            <div className="absolute left-1/2 -translate-x-1/2 hidden xl:flex space-x-7 items-center whitespace-nowrap z-10">
              <button
                onClick={() => handleLinkClick('services')}
                className="text-sm font-bold text-neutral-700 hover:text-red-600 dark:text-neutral-200 dark:hover:text-red-400 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => handleLinkClick('social-posts')}
                className="text-sm font-bold text-neutral-700 hover:text-red-600 dark:text-neutral-200 dark:hover:text-red-400 transition-colors"
              >
                Portfolio
              </button>
              <button
                onClick={() => handleLinkClick('reviews')}
                className="text-sm font-bold text-neutral-700 hover:text-red-600 dark:text-neutral-200 dark:hover:text-red-400 transition-colors"
              >
                Reviews
              </button>
              <button
                onClick={() => handleLinkClick('traffic-monitor')}
                className="text-sm font-bold text-neutral-700 hover:text-red-600 dark:text-neutral-200 dark:hover:text-red-400 transition-colors"
              >
                Live Stats
              </button>
              <button
                onClick={() => handleLinkClick('contact')}
                className="text-sm font-bold text-neutral-700 hover:text-red-600 dark:text-neutral-200 dark:hover:text-red-400 transition-colors"
              >
                Contact us
              </button>
            </div>

            {/* Tablet Menu (Medium Screens ONLY) */}
            <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex xl:hidden space-x-5 items-center z-10">
              <button
                onClick={() => handleLinkClick('services')}
                className="text-sm font-bold text-neutral-700 hover:text-red-600 dark:text-neutral-200 dark:hover:text-red-400 transition-colors"
              >
                Services
              </button>

              {/* Tablet Explore Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsIpadDropdownOpen(!isIpadDropdownOpen)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-white/10 hover:bg-neutral-200 dark:hover:bg-white/15 text-neutral-800 dark:text-neutral-100 font-semibold text-sm transition-all focus:outline-none"
                >
                  <span>Explore</span>
                  <i
                    className={`fas fa-chevron-down text-xs transition-transform duration-200 ${
                      isIpadDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isIpadDropdownOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-64 p-2 rounded-2xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-2xl border border-neutral-200 dark:border-white/10 shadow-2xl transform origin-top z-50">
                    <div className="space-y-1">
                      <button
                        onClick={() => handleLinkClick('services')}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-white/10 text-left text-neutral-700 dark:text-neutral-200"
                      >
                        <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center">
                          <i className="fas fa-briefcase text-xs" />
                        </div>
                        <div>
                          <span className="block font-bold text-xs">All Services</span>
                          <span className="block text-[10px] text-neutral-500">Design & Media</span>
                        </div>
                      </button>
                      <button
                        onClick={() => handleLinkClick('social-posts')}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-white/10 text-left text-neutral-700 dark:text-neutral-200"
                      >
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center">
                          <i className="fas fa-layer-group text-xs" />
                        </div>
                        <div>
                          <span className="block font-bold text-xs">Portfolio Showcase</span>
                          <span className="block text-[10px] text-neutral-500">Recent Works</span>
                        </div>
                      </button>
                      <button
                        onClick={() => handleLinkClick('reviews')}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-white/10 text-left text-neutral-700 dark:text-neutral-200"
                      >
                        <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center">
                          <i className="fas fa-star text-xs" />
                        </div>
                        <div>
                          <span className="block font-bold text-xs">Testimonials</span>
                          <span className="block text-[10px] text-neutral-500">5-Star Feedback</span>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Actions Zone: Theme Toggle + Book A Call + Mobile Menu */}
            <div className="flex items-center gap-2.5 sm:gap-3 ml-auto flex-shrink-0 z-20">
              {/* Theme Toggle Button */}
              <button
                type="button"
                onClick={onToggleTheme}
                title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                className="p-2 sm:p-2.5 text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white rounded-full hover:bg-neutral-100 dark:hover:bg-white/10 transition-all duration-300 focus:outline-none active:scale-95 border border-neutral-200/60 dark:border-white/10"
              >
                {isDark ? (
                  <i className="fas fa-sun text-amber-400 text-sm" />
                ) : (
                  <i className="fas fa-moon text-neutral-700 text-sm" />
                )}
              </button>

              {/* Primary Action Button: "Book A Call" */}
              <button
                type="button"
                onClick={onOpenBookModal}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-xs md:text-sm tracking-wide shadow-lg shadow-red-600/30 transition-all duration-300"
              >
                <i className="fas fa-calendar-check text-xs" />
                <span>Book A Call</span>
              </button>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-2 sm:p-2.5 rounded-full hover:bg-neutral-100 dark:hover:bg-white/10 text-neutral-800 dark:text-neutral-200 focus:outline-none transition-colors border border-neutral-200/60 dark:border-white/10"
                aria-label="Toggle navigation menu"
              >
                <i
                  className={`fas ${
                    isMobileMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'
                  } text-base`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-down Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-4 top-24 z-40 p-5 rounded-3xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-2xl border border-neutral-200 dark:border-white/10 shadow-2xl xl:hidden">
          <div className="flex flex-col space-y-3">
            <button
              onClick={() => handleLinkClick('hero')}
              className="px-4 py-2.5 rounded-xl text-left font-bold text-neutral-800 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleLinkClick('services')}
              className="px-4 py-2.5 rounded-xl text-left font-bold text-neutral-800 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors"
            >
              Services & Products
            </button>
            <button
              onClick={() => handleLinkClick('social-posts')}
              className="px-4 py-2.5 rounded-xl text-left font-bold text-neutral-800 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors"
            >
              Recent Portfolio
            </button>
            <button
              onClick={() => handleLinkClick('traffic-monitor')}
              className="px-4 py-2.5 rounded-xl text-left font-bold text-neutral-800 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors"
            >
              Live Traffic Monitor
            </button>
            <button
              onClick={() => handleLinkClick('reviews')}
              className="px-4 py-2.5 rounded-xl text-left font-bold text-neutral-800 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors"
            >
              Client Reviews
            </button>
            <button
              onClick={() => handleLinkClick('contact')}
              className="px-4 py-2.5 rounded-xl text-left font-bold text-neutral-800 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors"
            >
              Contact Us
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBookModal();
              }}
              className="w-full mt-2 py-3 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm text-center shadow-lg shadow-red-600/30 transition-colors flex items-center justify-center gap-2"
            >
              <i className="fas fa-calendar-check" />
              <span>Book A Consultation</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
