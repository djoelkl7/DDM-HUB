import React, { useState } from 'react';
import { SERVICES_LIST, SITE_CONFIG } from '../data/siteData';
import { ServiceItem } from '../types';

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: ServiceItem | null;
}

export const BookCallModal: React.FC<BookCallModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    preselectedService?.id || SERVICES_LIST[0].id
  );
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [budget, setBudget] = useState('$100 - $300');
  const [timeline, setTimeline] = useState('Within 48 Hours');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setContactInfo('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 flex items-center justify-center text-neutral-600 dark:text-neutral-300 transition-colors"
        >
          <i className="fas fa-times text-sm" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center text-2xl shadow-inner">
              <i className="fas fa-check" />
            </div>
            <h3 className="text-2xl font-black text-neutral-900 dark:text-white">
              Booking Request Received!
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-md mx-auto">
              Thank you, <span className="font-bold text-neutral-900 dark:text-white">{name}</span>. Our creative director has been notified and will reach out to <span className="font-bold text-red-600">{contactInfo}</span> within 2 hours.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 rounded-full bg-[#25d366] hover:bg-[#20ba5a] text-white text-xs font-bold flex items-center justify-center gap-2"
              >
                <i className="fab fa-whatsapp text-sm" />
                <span>Instant WhatsApp Connect</span>
              </a>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs font-bold hover:bg-neutral-200"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full p-1 bg-red-100 dark:bg-red-950/80 flex items-center justify-center">
                <img
                  src={SITE_CONFIG.logoUrl}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = SITE_CONFIG.fallbackLogo;
                  }}
                  alt="DDM-HUB"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="text-xl font-black text-neutral-900 dark:text-white">
                  Book A Project Consultation
                </h3>
                <p className="text-xs text-neutral-500">
                  Discuss your design, video editing, or digital marketing goals
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                  Select Primary Service Needed
                </label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs text-neutral-900 dark:text-white font-medium focus:outline-none focus:border-red-500"
                >
                  {SERVICES_LIST.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title} ({s.startingPrice})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs text-neutral-900 dark:text-white focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                    WhatsApp or Email *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    placeholder="e.g. alex@company.com or phone"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs text-neutral-900 dark:text-white focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                    Estimated Budget
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs text-neutral-900 dark:text-white focus:outline-none focus:border-red-500"
                  >
                    <option value="Under $100">Under $100 (Starter)</option>
                    <option value="$100 - $300">$100 - $300 (Standard)</option>
                    <option value="$300 - $1,000">$300 - $1,000 (Growth)</option>
                    <option value="$1,000+">$1,000+ (Enterprise)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                    Turnaround Timeline
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs text-neutral-900 dark:text-white focus:outline-none focus:border-red-500"
                  >
                    <option value="Urgent (24 Hours)">Urgent (24 Hours)</option>
                    <option value="Within 48 Hours">Within 48 Hours</option>
                    <option value="1 Week">1 Week</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                  Project Notes & Details
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what you'd like created, dimensions, references, or links..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs text-neutral-900 dark:text-white focus:outline-none focus:border-red-500 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-neutral-400">
                  <i className="fas fa-lock text-[10px] mr-1" />
                  Your information is 100% confidential
                </span>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs tracking-wide shadow-lg shadow-red-600/30 transition-transform active:scale-95"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
