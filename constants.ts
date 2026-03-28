import { Heart, Users, Baby } from 'lucide-react';
import { Service, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

export const FOUNDER_IMAGE_FUN = "/marion-fun.jpg";
export const FOUNDER_IMAGE_PRO = "/marion-pro.jpg";

export const SERVICES: Service[] = [
  {
    id: 'private',
    title: 'Private Sessions',
    description: 'One-on-one personalized instruction in the comfort of your home or my studio. Tailored to your baby’s specific needs.',
    benefits: ['Personalized routine', 'Address specific issues like colic', 'Flexible timing'],
    duration: '60 mins',
    price: '$120',
    icon: Baby,
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'workshop',
    title: 'Parent–Baby Workshops',
    description: 'Learn the art of infant massage alongside other parents. A wonderful way to socialize and learn.',
    benefits: ['Meet other parents', 'Structured learning', 'Group support'],
    duration: '4 weeks (1hr/week)',
    price: '$200',
    icon: Users,
    image: '/workshop-materials.jpg',
  },
  {
    id: 'prenatal',
    title: 'Prenatal Consultations',
    description: 'Prepare for your baby’s arrival by learning the basics of nurturing touch and bonding before birth.',
    benefits: ['Confidence building', 'Early bonding techniques', 'Postpartum preparation'],
    duration: '90 mins',
    price: '$150',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?auto=format&fit=crop&q=80&w=800',
  },
];