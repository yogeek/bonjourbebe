import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  duration: string;
  price: string;
  icon: LucideIcon;
  image: string;
}

export interface Testimonial {
  id: string;
  parentName: string;
  babyInfo: string;
  text: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export interface NavItem {
  label: string;
  path: string;
}