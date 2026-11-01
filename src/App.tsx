import React, { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RecentPostsMarquee } from './components/RecentPostsMarquee';
import { ServicesSection } from './components/ServicesSection';
import { TrafficMonitor } from './components/TrafficMonitor';
import { ReviewsMarquee } from './components/ReviewsMarquee';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { BookCallModal } from './components/BookCallModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { PostDetailModal } from './components/PostDetailModal';
import { WriteReviewModal } from './components/WriteReviewModal';
import { ServiceItem, SocialPostItem, ReviewItem } from './types';
import { REVIEWS_LIST } from './data/siteData';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ddm_theme');
      if (saved) return saved === 'dark';
      return true; // Default to dark aesthetic like bookfua
    }
    return true;
  });

  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedPost, setSelectedPost] = useState<SocialPostItem | null>(null);
  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false);
  const [allReviews, setAllReviews] = useState<ReviewItem[]>(REVIEWS_LIST);

  // Sync dark class on document element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('ddm_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('ddm_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleBookServiceFromModal = (service: ServiceItem) => {
    setSelectedService(null);
    setIsBookModalOpen(true);
  };

  const handleAddReview = (newReview: ReviewItem) => {
    setAllReviews((prev) => [newReview, ...prev]);
  };

  return (
    <div className="min-h-screen relative flex flex-col font-sans antialiased text-neutral-800 dark:text-neutral-200 transition-colors duration-500 overflow-x-hidden selection:bg-red-600 selection:text-white">
      {/* Preloader with creative terminal initialization */}
      <Preloader />

      {/* Background Animated Pattern Layer */}
      <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-pattern" />
      </div>

      {/* Floating Pill Navbar */}
      <Navbar
        onOpenBookModal={() => setIsBookModalOpen(true)}
        onNavigateSection={handleNavigateSection}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <Hero
          onOpenBookModal={() => setIsBookModalOpen(true)}
          onExploreServices={() => handleNavigateSection('services')}
        />

        {/* Recent Posts / Social Showcase Marquee */}
        <RecentPostsMarquee
          onSelectPost={(post) => setSelectedPost(post)}
          isDark={isDark}
        />

        {/* Services & Products Grid */}
        <ServicesSection
          onSelectService={handleSelectService}
          onBookService={(service) => {
            setSelectedService(service);
            setIsBookModalOpen(true);
          }}
        />

        {/* Real-time Traffic Monitor */}
        <TrafficMonitor />

        {/* Customer Reviews Marquee */}
        <ReviewsMarquee
          onOpenReviewModal={() => setIsWriteReviewOpen(true)}
        />

        {/* Contact & Inquiries */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenBookModal={() => setIsBookModalOpen(true)}
      />

      {/* Floating WhatsApp Action Widget */}
      <WhatsAppWidget />

      {/* Modals */}
      <BookCallModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
        preselectedService={selectedService}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBook={handleBookServiceFromModal}
      />

      <PostDetailModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
        onInquire={(post) => {
          setSelectedPost(null);
          setIsBookModalOpen(true);
        }}
        isDark={isDark}
      />

      <WriteReviewModal
        isOpen={isWriteReviewOpen}
        onClose={() => setIsWriteReviewOpen(false)}
        onSubmitReview={handleAddReview}
      />
    </div>
  );
}
