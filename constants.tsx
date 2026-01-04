
import { Service, Testimonial, Barber } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    name: 'Executive Haircut',
    price: '$45',
    duration: '45 mins',
    description: 'Precision cut tailored to your face shape and hair type. Includes scalp massage and style.',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Luxury Beard Grooming',
    price: '$35',
    duration: '30 mins',
    description: 'Hot towel treatment, beard shaping, and precision trimming with premium oils.',
    image: 'https://images.unsplash.com/photo-1621605815841-aa897bd0761d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Signature Hot Shave',
    price: '$50',
    duration: '40 mins',
    description: 'Traditional straight razor shave with essential oil prep and cold towel finish.',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    name: 'Revitalizing Facial',
    price: '$65',
    duration: '60 mins',
    description: 'Deep cleansing, exfoliation, and hydration treatment specifically designed for men.',
    image: 'https://images.unsplash.com/photo-1512690118294-7049f76a503f?auto=format&fit=crop&q=80&w=800'
  }
];

export const BARBERS: Barber[] = [
  {
    id: 'b1',
    name: 'Marco V.',
    specialty: 'Fade Expert',
    experience: '12 Years',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3dbdf5bb3d?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'b2',
    name: 'Julian S.',
    specialty: 'Traditional Shaving',
    experience: '8 Years',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'b3',
    name: 'Leo R.',
    specialty: 'Artistic Styling',
    experience: '15 Years',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'James Harrison',
    role: 'Tech Executive',
    content: 'The best grooming experience I\'ve ever had. Marco is a true artist with the scissors.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=james'
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    role: 'Influencer',
    content: 'Brought my partner here for his birthday. The service was impeccable and the vibe is unmatched.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: 3,
    name: 'Daniel Kim',
    role: 'Modern Gentleman',
    content: 'Luxe Barber has been my go-to for years. Professional, clean, and always on trend.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=daniel'
  }
];
