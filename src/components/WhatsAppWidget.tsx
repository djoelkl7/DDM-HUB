import React, { useState } from 'react';
import { SITE_CONFIG } from '../data/siteData';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(
      message.trim() || 'Hello DDM-HUB, I would like to inquire about your services.'
    );
    window.open(`https://wa.me/2347062818494?text=${encoded}`, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* WhatsApp Chat Popover */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-300">
          {/* Header */}
          <div className="bg-[#075e54] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 p-1 flex items-center justify-center relative">
                <img
                  src={SITE_CONFIG.logoUrl}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = SITE_CONFIG.fallbackLogo;
                  }}
                  alt="DDM-HUB"
                  className="w-full h-full object-contain rounded-full"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#075e54]" />
              </div>
              <div>
                <h4 className="font-bold text-sm">DDM-HUB Support</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span>Typically replies in minutes</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1"
            >
              <i className="fas fa-times text-sm" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-[#ece5dd] dark:bg-neutral-950/80 min-h-[140px] flex flex-col justify-end text-xs space-y-2">
            <div className="self-start bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 p-3 rounded-2xl rounded-tl-none max-w-[85%] shadow-sm border border-neutral-200/50 dark:border-neutral-700">
              <p className="font-semibold text-red-600 dark:text-red-400 text-[11px] mb-0.5">
                DDM-HUB Creative Desk
              </p>
              <p>
                Hi there! 👋 How can our design and editing team bring your vision to life today?
              </p>
              <span className="text-[9px] text-neutral-400 block text-right mt-1">
                Just now
              </span>
            </div>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your project inquiry..."
              className="flex-1 px-3 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-xs text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="w-9 h-9 rounded-xl bg-[#25d366] hover:bg-[#20ba5a] text-white flex items-center justify-center transition-transform active:scale-95 shadow-md shrink-0"
            >
              <i className="fas fa-paper-plane text-xs" />
            </button>
          </form>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat with DDM-HUB on WhatsApp"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25d366] hover:bg-[#20ba5a] text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ring-4 ring-emerald-500/20"
      >
        <i
          className={`fab fa-whatsapp text-2xl transition-transform duration-300 ${
            isOpen ? 'rotate-90' : ''
          }`}
        />
      </button>
    </div>
  );
};
