import React, { useState, useMemo } from 'react';
import { SERVICES_LIST } from '../data/siteData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onBookService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onBookService,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredServices = useMemo(() => {
    return SERVICES_LIST.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortTitle.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const getGlowClass = (color: string) => {
    switch (color) {
      case 'green':
        return 'glow-green';
      case 'yellow':
        return 'glow-yellow';
      case 'red':
        return 'glow-red';
      case 'blue':
        return 'glow-blue';
      case 'purple':
        return 'glow-purple';
      default:
        return 'glow-green';
    }
  };

  const getIconColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return 'bg-green-100 dark:bg-green-950/60 text-green-600 dark:text-green-400 group-hover:bg-green-600 group-hover:text-white dark:group-hover:bg-green-600';
      case 'yellow':
        return 'bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 group-hover:bg-amber-500 group-hover:text-white dark:group-hover:bg-amber-500';
      case 'red':
        return 'bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 group-hover:bg-red-600 group-hover:text-white dark:group-hover:bg-red-600';
      case 'blue':
        return 'bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600';
      case 'purple':
        return 'bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white dark:group-hover:bg-purple-600';
      default:
        return 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600';
    }
  };

  return (
    <section id="services" className="pt-16 pb-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-red-600 dark:text-red-500 font-bold tracking-widest uppercase text-xs sm:text-sm">
            Explore Our Most Popular
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 dark:text-white mt-1.5 transition-colors duration-300 pattern-text">
            Products & Services
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm max-w-2xl mx-auto mt-2">
            World-class creative capabilities crafted to scale your personal brand, agency, or enterprise.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Segmented Category Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-neutral-100 dark:bg-neutral-900/80 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 w-full md:w-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === 'all'
                  ? 'bg-white dark:bg-red-600 text-neutral-900 dark:text-white shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveCategory('design')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === 'design'
                  ? 'bg-white dark:bg-red-600 text-neutral-900 dark:text-white shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Design & Branding
            </button>
            <button
              onClick={() => setActiveCategory('video')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === 'video'
                  ? 'bg-white dark:bg-red-600 text-neutral-900 dark:text-white shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Video & Animation
            </button>
            <button
              onClick={() => setActiveCategory('marketing')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === 'marketing'
                  ? 'bg-white dark:bg-red-600 text-neutral-900 dark:text-white shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Marketing & Ads
            </button>
            <button
              onClick={() => setActiveCategory('tech')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === 'tech'
                  ? 'bg-white dark:bg-red-600 text-neutral-900 dark:text-white shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Tech & Setup
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <i className="fas fa-search absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 text-xs" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services (e.g. Logo, Video, Ads)..."
              className="w-full pl-9 pr-4 py-2.5 rounded-2xl bg-neutral-100 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-900 dark:text-white focus:outline-none focus:border-red-500 placeholder-neutral-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-white text-xs"
              >
                <i className="fas fa-times" />
              </button>
            )}
          </div>
        </div>

        {/* Product Grid - 2 cols on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className={`group p-3 sm:p-5 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col xl:flex-row items-center xl:items-center gap-3 sm:gap-4 text-center xl:text-left card-base ${getGlowClass(
                service.colorScheme
              )} cursor-pointer`}
            >
              {/* Service Icon */}
              <div
                className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 shadow-sm ${getIconColorClasses(
                  service.colorScheme
                )}`}
              >
                <i className={`fas ${service.icon} text-sm sm:text-base`} />
              </div>

              {/* Title & Popularity */}
              <div className="w-full overflow-hidden">
                <h4 className="font-extrabold text-neutral-900 dark:text-white text-xs sm:text-sm transition-colors group-hover:text-red-600 dark:group-hover:text-red-400 truncate">
                  <span className="xl:hidden">{service.shortTitle}</span>
                  <span className="hidden xl:inline">{service.title}</span>
                </h4>
                <div className="flex items-center justify-center xl:justify-start gap-1.5 mt-0.5">
                  <span className="text-[10px] sm:text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                    {service.popularity}
                  </span>
                  <span className="text-neutral-300 dark:text-neutral-700 hidden sm:inline">·</span>
                  <span className="text-[10px] sm:text-xs font-bold text-red-500 hidden sm:inline">
                    {service.startingPrice}
                  </span>
                </div>
              </div>

              {/* Action arrow */}
              <div className="hidden xl:block ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <i className="fas fa-chevron-right text-xs text-red-500" />
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-neutral-50 dark:bg-neutral-900/30 rounded-3xl border border-neutral-200 dark:border-neutral-800">
            <i className="fas fa-magnifying-glass text-2xl text-neutral-400 mb-2" />
            <p className="text-sm font-bold text-neutral-700 dark:text-neutral-300">
              No services found matching "{searchQuery}"
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-3 px-4 py-1.5 rounded-full bg-red-600 text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
