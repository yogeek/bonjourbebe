import { Heart, Users, Baby, Calendar, BookOpen, Smile, Star, Sun, Moon } from 'lucide-react';
import { Service, Testimonial, BlogPost, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Booking', path: '/booking' },
  { label: 'Blog', path: '/blog' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Contact', path: '/contact' },
];

// Centralized Founder Image - Using a reliable placeholder. 
// Note: If you have a specific custom URL, please replace this string.
export const FOUNDER_IMAGE = "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=500";

export const SERVICES: Service[] = [
  {
    id: 'private',
    title: 'Private Sessions',
    description: 'One-on-one personalized instruction in the comfort of your home or my studio. Tailored to your baby’s specific needs.',
    benefits: ['Personalized routine', 'Address specific issues like colic', 'Flexible timing'],
    duration: '60 mins',
    price: '$120',
    icon: Baby,
    image: 'https://images.unsplash.com/photo-1515488042361-25f468213b6e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'workshop',
    title: 'Parent–Baby Workshops',
    description: 'Learn the art of infant massage alongside other parents. A wonderful way to socialize and learn.',
    benefits: ['Meet other parents', 'Structured learning', 'Group support'],
    duration: '4 weeks (1hr/week)',
    price: '$200',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1544126566-475a107a4a6e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'prenatal',
    title: 'Prenatal Consultations',
    description: 'Prepare for your baby’s arrival by learning the basics of nurturing touch and bonding before birth.',
    benefits: ['Confidence building', 'Early bonding techniques', 'Postpartum preparation'],
    duration: '90 mins',
    price: '$150',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=800',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    parentName: 'Sarah',
    babyInfo: 'Mom to Leo, 4 months',
    text: 'The calm energy at Bonjour Bébé is unmatched. I learned so much about connecting with Leo. The colic relief techniques were a lifesaver!',
  },
  {
    id: '2',
    parentName: 'Marc & Julie',
    babyInfo: 'Parents to Sophie, 7 months',
    text: 'Une expérience merveilleuse! Being able to speak French and English made us feel so at home. Highly recommend specifically for the bonding aspect.',
  },
  {
    id: '3',
    parentName: 'Emily',
    babyInfo: 'Mom to Jack, 2 months',
    text: 'I was so anxious as a first-time mom. These classes gave me confidence in my touch. It’s the highlight of our week.',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Magic of Touch: Benefits for Sleep',
    excerpt: 'Discover how a nightly massage routine can help regulate your baby’s circadian rhythms and promote deeper sleep.',
    date: 'Oct 12, 2023',
    category: 'Sleep',
    image: 'https://images.unsplash.com/photo-1522771753035-4a5000b5ad7d?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '2',
    title: 'French Parenting: Le Pause',
    excerpt: 'Exploring the French concept of "Le Pause" and how observing your baby before reacting can build resilience.',
    date: 'Nov 05, 2023',
    category: 'Culture',
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: '3',
    title: 'Soothing Colic Naturally',
    excerpt: 'Gentle strokes and movements to aid digestion and relieve gas pains for a happier baby.',
    date: 'Dec 10, 2023',
    category: 'Health',
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=600',
  },
];