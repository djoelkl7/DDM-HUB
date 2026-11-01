import React from 'react';
import { SocialPostItem } from '../types';

interface PostDetailModalProps {
  post: SocialPostItem | null;
  onClose: () => void;
  onInquire: (post: SocialPostItem) => void;
  isDark: boolean;
}

export const PostDetailModal: React.FC<PostDetailModalProps> = ({
  post,
  onClose,
  onInquire,
  isDark,
}) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
        >
          <i className="fas fa-times text-sm" />
        </button>

        {/* Left Side: High Res Image */}
        <div className="w-full md:w-1/2 aspect-square relative bg-neutral-950">
          <img
            src={isDark ? post.darkImg : post.lightImg}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Details & Actions */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <div className="inline-block px-2.5 py-1 rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 text-[10px] font-bold uppercase tracking-wider mb-2">
              {post.tag} Showcase
            </div>
            <h3 className="text-lg font-black text-neutral-900 dark:text-white leading-snug">
              {post.title}
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
              Crafted in-house by the DDM-HUB creative team using industry standard tools (Photoshop, Figma, Premiere Pro). Optimized for high engagement and brand elevation.
            </p>

            <div className="flex items-center gap-4 text-xs font-semibold text-neutral-600 dark:text-neutral-400 mt-4 py-3 border-y border-neutral-100 dark:border-neutral-800">
              <span className="flex items-center gap-1.5">
                <i className="fas fa-heart text-red-500" />
                {post.likes} Likes
              </span>
              <span className="flex items-center gap-1.5">
                <i className="fas fa-comment text-neutral-400" />
                {post.comments} Comments
              </span>
              <span className="flex items-center gap-1 text-emerald-500 font-bold ml-auto">
                <i className="fas fa-circle-check" /> High Res
              </span>
            </div>
          </div>

          <div className="space-y-2 mt-6">
            <button
              onClick={() => {
                onClose();
                onInquire(post);
              }}
              className="w-full py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-lg shadow-red-600/30 transition-transform active:scale-95 flex items-center justify-center gap-2"
            >
              <i className="fas fa-wand-magic-sparkles" />
              <span>Request Similar Design</span>
            </button>
            <a
              href={post.link}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 font-bold text-xs transition-colors flex items-center justify-center gap-2"
            >
              <i
                className={`fab ${
                  post.link.includes('tiktok')
                    ? 'fa-tiktok text-cyan-400'
                    : post.link.includes('youtube')
                    ? 'fa-youtube text-red-500'
                    : post.link.includes('facebook')
                    ? 'fa-facebook text-blue-500'
                    : post.link.includes('snapchat')
                    ? 'fa-snapchat text-yellow-500'
                    : 'fa-instagram text-pink-500'
                }`}
              />
              <span>
                {post.link.includes('tiktok')
                  ? 'Open on TikTok (@ddmguru)'
                  : post.link.includes('youtube')
                  ? 'Watch on YouTube (@ddmguru)'
                  : post.link.includes('facebook')
                  ? 'View on Facebook (dManifestor)'
                  : post.link.includes('snapchat')
                  ? 'View on Snapchat (d’Manifestor)'
                  : 'View on Instagram (@ddm.guru)'}
              </span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
