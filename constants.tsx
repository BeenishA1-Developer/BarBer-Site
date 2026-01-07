
import { Service, Testimonial, Barber } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    name: 'The Essential Cut',
    price: '$55',
    duration: '60 mins',
    description: 'A precision-tailored cut including a traditional neck shave and personalized styling.',
    image: '/assets/service-cut.png'
  },
  {
    id: '2',
    name: 'Beard Refinery',
    price: '$40',
    duration: '45 mins',
    description: 'Sculpting and conditioning focusing on facial structure, utilizing organic oils.',
    image: '/assets/service-beard.png'
  },
  {
    id: '3',
    name: 'Signature Shave',
    price: '$65',
    duration: '50 mins',
    description: 'The ultimate straight-razor ritual with triple hot towels and botanical skin calming.',
    image: '/assets/service-shave.png'
  },
  {
    id: '4',
    name: 'Dermal Therapy',
    price: '$85',
    duration: '60 mins',
    description: 'A deep-cleansing facial designed specifically for the unique needs of men’s skin.',
    image: '/assets/service-facial.png'
  }
];

export const BARBERS: Barber[] = [
  {
    id: 'b1',
    name: 'Julian M.',
    specialty: 'Master Barber',
    experience: '18 Years',
    image: '/assets/hero-signature.png'
  },
  {
    id: 'b2',
    name: 'Sebastian V.',
    specialty: 'Razor Specialist',
    experience: '12 Years',
    image: '/assets/service-cut.png'
  },
  {
    id: 'b3',
    name: 'Marco R.',
    specialty: 'Style Director',
    experience: '15 Years',
    image: '/assets/service-beard.png'
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
