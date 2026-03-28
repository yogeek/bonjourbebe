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

export interface NavItem {
  label: string;
  path: string;
}