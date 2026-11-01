import React, { useState } from 'react';
import { ReviewItem } from '../types';

interface WriteReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitReview: (newReview: ReviewItem) => void;
}

export const WriteReviewModal: React.FC<WriteReviewModalProps> = ({
  isOpen,
  onClose,
  onSubmitReview,
}) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !text) return;

    const initials = name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();

    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      name,
      role: role.trim() || 'Verified Client',
      avatarText: initials || 'VC',
      avatarBg: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
      rating,
      text,
      glowColor: 'green',
      date: 'Verified Client · Just now',
    };

    onSubmitReview(newRev);
    setName('');
    setRole('');
    setText('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-7">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 flex items-center justify-center text-neutral-600 dark:text-neutral-300 transition-colors"
        >
          <i className="fas fa-times text-sm" />
        </button>

        <div className="text-center mb-5">
          <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-500 mx-auto flex items-center justify-center text-lg mb-2">
            <i className="fas fa-star" />
          </div>
          <h3 className="text-xl font-black text-neutral-900 dark:text-white">
            Write A Client Review
          </h3>
          <p className="text-xs text-neutral-500">
            Share your feedback on our design, editing, and turnaround speed
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Star Rating Selector */}
          <div className="text-center">
            <span className="block text-xs font-bold text-neutral-600 dark:text-neutral-400 mb-1.5">
              Rating
            </span>
            <div className="flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  className={`text-xl transition-transform hover:scale-125 focus:outline-none ${
                    star <= rating ? 'text-amber-400' : 'text-neutral-300 dark:text-neutral-700'
                  }`}
                >
                  <i className="fas fa-star" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1">
              Your Name *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Jordan Smith"
              className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs text-neutral-900 dark:text-white focus:outline-none focus:border-red-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1">
              Company / Role (Optional)
            </label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="e.g. Founder at Zenith Studio"
              className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs text-neutral-900 dark:text-white focus:outline-none focus:border-red-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1">
              Your Review *
            </label>
            <textarea
              required
              rows={3}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="How did our team deliver on your project? Quality, speed, communication..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs text-neutral-900 dark:text-white focus:outline-none focus:border-red-500 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs tracking-wide shadow-lg shadow-red-600/30 transition-transform active:scale-95"
          >
            Post Review
          </button>
        </form>

      </div>
    </div>
  );
};
