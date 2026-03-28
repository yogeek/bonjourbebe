import { Heart, Users, Baby } from 'lucide-react';
import { Service, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { labelKey: 'nav.about', path: '/about' },
  { labelKey: 'nav.services', path: '/services' },
  { labelKey: 'nav.contact', path: '/contact' },
];

const BASE = import.meta.env.BASE_URL;
export const LOGO = `${BASE}logo.svg`;
export const FOUNDER_IMAGE_FUN = `${BASE}marion-fun.jpg`;
export const FOUNDER_IMAGE_PRO = `${BASE}marion-portrait.png`;

export const SERVICES: Service[] = [
  {
    id: 'private',
    titleKey: 'serviceItems.privateTitle',
    descKey: 'serviceItems.privateDesc',
    benefitKeys: ['serviceItems.privateBenefit1', 'serviceItems.privateBenefit2', 'serviceItems.privateBenefit3'],
    duration: '60 mins',
    price: '$120',
    icon: Baby,
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'workshop',
    titleKey: 'serviceItems.workshopTitle',
    descKey: 'serviceItems.workshopDesc',
    benefitKeys: ['serviceItems.workshopBenefit1', 'serviceItems.workshopBenefit2', 'serviceItems.workshopBenefit3'],
    duration: '4 weeks (1hr/week)',
    price: '$200',
    icon: Users,
    image: `${BASE}workshop-materials.jpg`,
  },
  {
    id: 'prenatal',
    titleKey: 'serviceItems.prenatalTitle',
    descKey: 'serviceItems.prenatalDesc',
    benefitKeys: ['serviceItems.prenatalBenefit1', 'serviceItems.prenatalBenefit2', 'serviceItems.prenatalBenefit3'],
    duration: '90 mins',
    price: '$150',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?auto=format&fit=crop&q=80&w=800',
  },
];
