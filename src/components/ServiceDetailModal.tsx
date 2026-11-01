import React from 'react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBook: (service: ServiceItem) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBook,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 flex items-center justify-center text-neutral-600 dark:text-neutral-300 transition-colors"
        >
          <i className="fas fa-times text-sm" />
        </button>

        {/* Header with Icon */}
        <div className="flex items-center gap-4 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-red-600/10 dark:bg-red-950 text-red-600 dark:text-red-400 flex items-center justify-center text-xl shrink-0">
            <i className={`fas ${service.icon}`} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                {service.popularity}
              </span>
              <span className="text-neutral-300 dark:text-neutral-700">·</span>
              <span className="text-[10px] font-bold text-neutral-500 uppercase">
                {service.category}
              </span>
            </div>
            <h3 className="text-xl font-black text-neutral-900 dark:text-white">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Key Features List */}
        <div className="bg-neutral-50 dark:bg-neutral-800/60 rounded-2xl p-4 mb-6 border border-neutral-200/60 dark:border-neutral-700/60">
          <h4 className="text-xs font-bold text-neutral-900 dark:text-white mb-2.5 flex items-center gap-2">
            <i className="fas fa-star text-amber-500 text-[10px]" />
            What is Included
          </h4>
          <ul className="space-y-2">
            {service.features.map((feat, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300"
              >
                <i className="fas fa-check text-emerald-500 text-[10px]" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-center">
            <span className="text-[10px] text-neutral-400 uppercase font-bold block">
              Starting From
            </span>
            <span className="text-lg font-black text-red-600 dark:text-red-400">
              {service.startingPrice}
            </span>
          </div>
          <div className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-center">
            <span className="text-[10px] text-neutral-400 uppercase font-bold block">
              Estimated Delivery
            </span>
            <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200">
              {service.turnaround}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex gap-3">
          <button
            onClick={() => {
              onClose();
              onBook(service);
            }}
            className="flex-1 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs tracking-wide shadow-lg shadow-red-600/30 transition-transform active:scale-95 flex items-center justify-center gap-2"
          >
            <i className="fas fa-shopping-bag" />
            <span>Order / Book This Service</span>
          </button>
          <button
            onClick={onClose}
            className="px-5 py-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-bold text-xs hover:bg-neutral-200"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
