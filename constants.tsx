
import { Service, Testimonial, Barber } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    name: 'The Royal Haircut',
    price: '$55',
    duration: '60 mins',
    description: 'Our signature precision cut, followed by an revitalizing scalp therapy and hand-styled finish.',
    image: 'https://images.unsplash.com/photo-1621605815841-aa897bd0761d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Artisan Beard Sculpt',
    price: '$40',
    duration: '45 mins',
    description: 'Sophisticated shaping with a focus on facial geometry, using rare botanical oils and hot steam.',
    image: 'https://images.unsplash.com/photo-1593702295094-ada44bc6a09c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Executive Straight Shave',
    price: '$65',
    duration: '50 mins',
    description: 'A master-class in tradition. Triple hot towel treatment with a bespoke post-shave mask.',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    name: 'Gentleman\'s Facial',
    price: '$85',
    duration: '60 mins',
    description: 'Deep dermal purification designed specifically for men’s skin health and stress relief.',
    image: 'https://images.unsplash.com/photo-1512690118294-7049f76a503f?auto=format&fit=crop&q=80&w=800'
  }
];

export const BARBERS: Barber[] = [
  {
    id: 'b1',
    name: 'Alessandro M.',
    specialty: 'Master Scissorman',
    experience: '18 Years',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'b2',
    name: 'Julian Saint',
    specialty: 'Traditional Razorist',
    experience: '12 Years',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'b3',
    name: 'Leo Romano',
    specialty: 'Creative Director',
    experience: '15 Years',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'James Harrison',
    role: 'Tech Executive',
    content: 'The most thorough grooming ritual I’ve experienced. The attention to detail is truly unparalleled.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=james'
  },
  {
    id: 2,
    name: 'Sebastian V.',
    role: 'Fashion Consultant',
    content: 'A perfect blend of old-world charm and modern precision. Luxe Barber is in a league of its own.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=seb'
  }
];
