import React, { useState } from 'react';
import { REVIEWS_LIST } from '../data/siteData';
import { ReviewItem } from '../types';

interface ReviewsMarqueeProps {
  onOpenReviewModal: () => void;
}

export const ReviewsMarquee: React.FC<ReviewsMarqueeProps> = ({
  onOpenReviewModal,
}) => {
  const [reviews, setReviews] = useState<ReviewItem[]>(REVIEWS_LIST);

  const getGlowStyle = (color: string) => {
    switch (color) {
      case 'purple':
        return 'glow-purple';
      case 'green':
        return 'glow-green';
      case 'blue':
        return 'glow-blue';
      case 'yellow':
        return 'glow-yellow';
      case 'red':
        return 'glow-red';
      default:
        return 'glow-purple';
    }
  };

  return (
    <section
      id="reviews"
      className="pt-8 pb-14 bg-neutral-100/60 dark:bg-black transition-colors duration-300 overflow-hidden relative"
    >
      {/* Animated Header */}
      <div className="text-center pt-4 mb-8">
        <div className="inline-flex items-center gap-3 text-red-600 dark:text-red-500 font-bold uppercase tracking-widest text-xs sm:text-sm">
          <i className="fas fa-circle text-[6px] animate-pulse" />
          <span>Customer Reviews</span>
          <i className="fas fa-circle text-[6px] animate-pulse" />
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 dark:text-white mt-1">
          Loved by Creators & Businesses Globally
        </h2>
        <div className="flex items-center justify-center gap-2 mt-2">
          <div className="flex text-amber-400 text-xs">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <span className="text-xs font-bold text-neutral-700 dark:text-neutral-300">
            5.0 Star Overall Rating on Google Reviews
          </span>
        </div>
      </div>

      {/* Marquee Container with Fade gradients */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-16 sm:w-36 bg-gradient-to-r from-neutral-100/90 dark:from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-36 bg-gradient-to-l from-neutral-100/90 dark:from-black to-transparent z-10 pointer-events-none" />

        {/* First track */}
        <div className="animate-marquee hover:[animation-play-state:paused] flex gap-6 py-4">
          {[...reviews, ...reviews].map((review, idx) => (
            <div
              key={`${review.id}-${idx}`}
              className={`w-80 sm:w-96 p-6 sm:p-7 flex flex-col justify-between card-base ${getGlowStyle(
                review.glowColor
              )} rounded-3xl shadow-sm border border-neutral-200/80 dark:border-neutral-800 flex-shrink-0 relative transition-transform duration-300 hover:-translate-y-1`}
            >
              <div>
                {/* 5 Stars */}
                <div className="flex text-amber-400 mb-3 text-xs">
                  {[...Array(review.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star mr-0.5" />
                  ))}
                </div>

                {/* Review Quote */}
                <p className="text-neutral-700 dark:text-neutral-200 leading-relaxed mb-6 text-xs sm:text-sm font-normal">
                  "{review.text}"
                </p>
              </div>

              {/* Author & Google Badge */}
              <div className="flex items-center justify-between mt-auto pt-3 border-t border-neutral-200/50 dark:border-white/5">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-black text-xs ${review.avatarBg}`}
                  >
                    {review.avatarText}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
                      {review.name}
                    </h4>
                    <span className="text-[10px] text-emerald-500 font-semibold flex items-center gap-1">
                      <i className="fas fa-check-circle" /> {review.role}
                    </span>
                  </div>
                </div>

                {/* Google Logo */}
                <div className="flex items-center gap-1 opacity-80 pl-2">
                  <i className="fab fa-google text-red-500 text-sm" />
                  <span className="text-[10px] font-bold text-neutral-500">Review</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Write a Review Button */}
      <div className="text-center mt-6">
        <button
          type="button"
          onClick={onOpenReviewModal}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-white/10 hover:bg-neutral-50 dark:hover:bg-white/15 text-neutral-800 dark:text-white font-bold text-xs border border-neutral-200 dark:border-white/10 shadow-sm transition-all duration-300"
        >
          <i className="fas fa-pen text-red-500 text-xs" />
          <span>Write A Review</span>
        </button>
      </div>
    </section>
  );
};
