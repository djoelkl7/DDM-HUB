import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../data/siteData';

interface HeroProps {
  onOpenBookModal: () => void;
  onExploreServices: () => void;
}

const TYPEWRITER_PHRASES = [
  'Graphic Design.',
  'Video Editing.',
  'UI/UX Design.',
  'Digital Marketing.',
  'Motion Graphics.',
  'Brand Identity.',
];

export const Hero: React.FC<HeroProps> = ({ onOpenBookModal, onExploreServices }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentPhrase = TYPEWRITER_PHRASES[phraseIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % TYPEWRITER_PHRASES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex]);

  // Slideshow auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const activeSlide = HERO_SLIDES[currentSlideIndex];

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 overflow-hidden flex items-center bg-transparent"
    >
      {/* Background Blobs matching bookfua */}
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] bg-red-600/10 dark:bg-red-900/20 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/4 pointer-events-none transition-colors duration-500" />
      <div className="absolute bottom-0 left-0 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] bg-red-600/10 dark:bg-red-900/20 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4 pointer-events-none transition-colors duration-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-14">
          
          {/* Left Column: Bold Text & CTAs */}
          <div className="w-full xl:w-1/2 text-center xl:text-left space-y-6">
            
            {/* Creative Agency Badge */}
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider border border-red-100 dark:border-red-900/50 shadow-sm">
              <span className="w-2 h-2 rounded-full mr-2.5 animate-dot-pulse bg-red-600" />
              Creative Agency
            </div>

            {/* Main Headline with Typewriter */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black text-neutral-900 dark:text-white leading-[1.1] tracking-tight">
              Bring Your Digital Ideas to Life with{' '}
              <span className="text-red-600 dark:text-red-500 inline-block min-h-[1.2em] typing-cursor">
                {displayText}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto xl:mx-0 leading-relaxed font-normal">
              Transform your brand with professional creative solutions tailored to elevate your business, audience retention, and visual digital presence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenBookModal}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-sm tracking-wide shadow-xl shadow-red-600/30 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>Get In Touch</span>
                <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onExploreServices}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white dark:bg-white/5 hover:bg-neutral-50 dark:hover:bg-white/10 text-neutral-900 dark:text-white font-bold text-sm tracking-wide border border-neutral-200 dark:border-white/10 shadow-sm transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Explore Services</span>
                <i className="fas fa-arrow-down text-xs text-neutral-400" />
              </button>
            </div>

            {/* Trust Markers */}
            <div className="pt-4 flex flex-wrap items-center justify-center xl:justify-start gap-6 text-xs text-neutral-500 dark:text-neutral-400 font-medium">
              <div className="flex items-center gap-2">
                <i className="fas fa-check-circle text-green-500 text-sm" />
                <span>Over 1,200+ Projects Finished</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-star text-amber-400 text-sm" />
                <span>5.0 Verified Client Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-bolt text-red-500 text-sm" />
                <span>Rapid 24-48h Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Slider & Floating Assets */}
          <div className="w-full xl:w-1/2 flex justify-center relative">
            <div className="hero-image-wrapper relative w-full max-w-[460px] sm:max-w-[500px]">
              
              {/* Floating Tool Icons (Photoshop, Figma, Premiere, Illustrator) */}
              <div className="hero-float-icon icon-tr icon-delay-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 p-2.5 rounded-2xl shadow-xl flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center font-black text-xs">
                  Ps
                </div>
                <div className="pr-1 text-left hidden sm:block">
                  <span className="block text-[11px] font-bold text-neutral-800 dark:text-neutral-100">Photoshop</span>
                  <span className="block text-[9px] text-neutral-400">Master Artistry</span>
                </div>
              </div>

              <div className="hero-float-icon icon-ml icon-delay-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 p-2.5 rounded-2xl shadow-xl flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-purple-600/10 text-purple-600 flex items-center justify-center font-black text-xs">
                  <i className="fab fa-figma text-sm" />
                </div>
                <div className="pr-1 text-left hidden sm:block">
                  <span className="block text-[11px] font-bold text-neutral-800 dark:text-neutral-100">Figma UX</span>
                  <span className="block text-[9px] text-neutral-400">Interactive</span>
                </div>
              </div>

              <div className="hero-float-icon icon-mr icon-delay-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 p-2.5 rounded-2xl shadow-xl flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-violet-600/10 text-violet-600 flex items-center justify-center font-black text-xs">
                  Pr
                </div>
                <div className="pr-1 text-left hidden sm:block">
                  <span className="block text-[11px] font-bold text-neutral-800 dark:text-neutral-100">Premiere</span>
                  <span className="block text-[9px] text-neutral-400">Cinematic 4K</span>
                </div>
              </div>

              <div className="hero-float-icon icon-bl icon-delay-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 p-2.5 rounded-2xl shadow-xl flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-amber-600/10 text-amber-600 flex items-center justify-center font-black text-xs">
                  Ai
                </div>
                <div className="pr-1 text-left hidden sm:block">
                  <span className="block text-[11px] font-bold text-neutral-800 dark:text-neutral-100">Illustrator</span>
                  <span className="block text-[9px] text-neutral-400">Vector Master</span>
                </div>
              </div>

              {/* Main Showcase Card Frame */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl border-2 border-neutral-200/80 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 group">
                {/* Images Layer */}
                {HERO_SLIDES.map((slide, idx) => (
                  <img
                    key={slide.id}
                    src={slide.image}
                    alt={slide.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                      idx === currentSlideIndex ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105'
                    }`}
                  />
                ))}

                {/* Gradient Scrim for Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-20 pointer-events-none" />

                {/* Bottom Overlay Text */}
                <div className="absolute bottom-0 inset-x-0 p-6 z-30 text-white text-left">
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-red-600 text-[10px] font-extrabold uppercase tracking-wider mb-2">
                    {activeSlide.tag}
                  </div>
                  <h3 className="text-xl font-bold leading-tight">
                    {activeSlide.title}
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1 line-clamp-2">
                    {activeSlide.description}
                  </p>

                  {/* Slider Indicator Dots */}
                  <div className="flex items-center gap-1.5 mt-4">
                    {HERO_SLIDES.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setCurrentSlideIndex(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          idx === currentSlideIndex
                            ? 'w-6 bg-red-500'
                            : 'w-1.5 bg-white/40 hover:bg-white/70'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Bottom Card: Rating & Global Reach (inner-glow-red) */}
              <div className="inner-glow-red mt-4 rounded-2xl p-4 text-white flex items-center justify-between border border-white/10 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-600/30 border border-red-500/50 flex items-center justify-center text-red-500 font-black">
                    <i className="fas fa-crown text-sm" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-amber-400 text-xs">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <span className="text-white font-bold ml-1">5.0</span>
                    </div>
                    <span className="text-xs text-neutral-300 font-medium">Top Rated Agency</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-base font-extrabold text-red-400">99.8%</span>
                  <span className="block text-[10px] text-neutral-400">Satisfaction</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
