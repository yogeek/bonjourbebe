import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  titleKey: string;
  descKey: string;
  benefitKeys: string[];
  duration: string;
  price: string;
  icon: LucideIcon;
  image: string;
}

export interface NavItem {
  labelKey: string;
  path: string;
}