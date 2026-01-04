
import { Service, Testimonial, Barber } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    name: 'The Essential Cut',
    price: '$55',
    duration: '60 mins',
    description: 'A precision-tailored cut including a traditional neck shave and personalized styling.',
    image: 'https://images.unsplash.com/photo-1621605815841-aa897bd0761d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Beard Refinery',
    price: '$40',
    duration: '45 mins',
    description: 'Sculpting and conditioning focusing on facial structure, utilizing organic oils.',
    image: 'https://images.unsplash.com/photo-1593702295094-ada44bc6a09c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Signature Shave',
    price: '$65',
    duration: '50 mins',
    description: 'The ultimate straight-razor ritual with triple hot towels and botanical skin calming.',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    name: 'Dermal Therapy',
    price: '$85',
    duration: '60 mins',
    description: 'A deep-cleansing facial designed specifically for the unique needs of men’s skin.',
    image: 'https://images.unsplash.com/photo-1512690118294-7049f76a503f?auto=format&fit=crop&q=80&w=800'
  }
];

export const BARBERS: Barber[] = [
  {
    id: 'b1',
    name: 'Julian M.',
    specialty: 'Master Barber',
    experience: '18 Years',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'b2',
    name: 'Sebastian V.',
    specialty: 'Razor Specialist',
    experience: '12 Years',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'b3',
    name: 'Marco R.',
    specialty: 'Style Director',
    experience: '15 Years',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'James Harrison',
    role: 'Tech Executive',
    content: 'The attention to detail is truly unparalleled. A master-class in service.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=james'
  },
  {
    id: 2,
    name: 'Sebastian V.',
    role: 'Fashion Consultant',
    content: 'A perfect blend of old-world charm and modern precision.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=seb'
  }
];
