import React, { useState } from 'react';
import { SOCIAL_POSTS } from '../data/siteData';
import { SocialPostItem } from '../types';

interface RecentPostsMarqueeProps {
  onSelectPost: (post: SocialPostItem) => void;
  isDark: boolean;
}

export const RecentPostsMarquee: React.FC<RecentPostsMarqueeProps> = ({
  onSelectPost,
  isDark,
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="social-posts"
      className="pt-14 pb-10 bg-neutral-50/70 dark:bg-[#070202] border-y border-neutral-200/80 dark:border-neutral-800/80 overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 text-red-600 dark:text-red-500 font-bold uppercase tracking-widest text-xs sm:text-sm">
            <i className="fas fa-circle text-[6px] animate-pulse" />
            <span>Recent Portfolio Posts</span>
            <i className="fas fa-circle text-[6px] animate-pulse" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white mt-1">
            Latest Creations From Our Studio
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm mt-1 max-w-xl mx-auto">
            Hover over any post to inspect the creative work or tap to view high-resolution showcase details.
          </p>
        </div>
      </div>

      {/* Marquee Carousel with Fade Edges */}
      <div className="relative w-full overflow-hidden group">
        {/* Left & Right gradient masks */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-neutral-50/90 dark:from-[#070202] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-neutral-50/90 dark:from-[#070202] to-transparent z-20 pointer-events-none" />

        {/* Marquee Track (Double set for seamless infinite loop) */}
        <div className="animate-marquee hover:[animation-play-state:paused] flex gap-5 py-4">
          {[...SOCIAL_POSTS, ...SOCIAL_POSTS].map((post, index) => {
            const isHovered = hoveredId === `${post.id}-${index}`;
            const displayImg = isDark
              ? (isHovered ? post.lightImg : post.darkImg)
              : (isHovered ? post.darkImg : post.lightImg);

            return (
              <div
                key={`${post.id}-${index}`}
                onMouseEnter={() => setHoveredId(`${post.id}-${index}`)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => onSelectPost(post)}
                className="relative w-64 sm:w-72 flex-shrink-0 rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group/card"
              >
                {/* Image */}
                <div className="aspect-square relative overflow-hidden bg-neutral-100 dark:bg-neutral-950">
                  <img
                    src={displayImg}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                  />

                  {/* Top Tag Pill */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider border border-white/10">
                      {post.tag}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                    <div className="flex items-center gap-4 text-xs font-semibold mb-2">
                      <span className="flex items-center gap-1.5">
                        <i className="fas fa-heart text-red-500" />
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <i className="fas fa-comment text-neutral-300" />
                        {post.comments}
                      </span>
                    </div>
                    <span className="text-xs font-bold line-clamp-1">
                      {post.title}
                    </span>
                    <span className="text-[10px] text-red-400 font-semibold mt-1 flex items-center gap-1">
                      <span>Click to view project</span>
                      <i className="fas fa-arrow-right text-[8px]" />
                    </span>
                  </div>
                </div>

                {/* Card Bottom Meta */}
                <div className="p-3 bg-white dark:bg-neutral-900 flex items-center justify-between text-xs">
                  <span className="font-bold text-neutral-800 dark:text-neutral-200 truncate pr-2">
                    {post.title}
                  </span>
                  <i className="fab fa-instagram text-neutral-400 group-hover/card:text-pink-500 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
