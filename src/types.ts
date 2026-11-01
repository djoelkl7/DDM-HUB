export interface ServiceItem {
  id: string;
  title: string;
  shortTitle: string;
  category: 'design' | 'video' | 'marketing' | 'tech';
  popularity: string;
  popularityPercent: number;
  colorScheme: 'green' | 'yellow' | 'red' | 'blue' | 'purple';
  icon: string;
  description: string;
  features: string[];
  turnaround: string;
  startingPrice: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  avatarText: string;
  avatarBg: string;
  rating: number;
  text: string;
  glowColor: 'purple' | 'green' | 'blue' | 'yellow' | 'red';
  date: string;
}

export interface SocialPostItem {
  id: string;
  title: string;
  tag: string;
  lightImg: string;
  darkImg: string;
  likes: string;
  comments: string;
  link: string;
}

export interface HeroSlideItem {
  id: number;
  title: string;
  tag: string;
  image: string;
  description: string;
}
