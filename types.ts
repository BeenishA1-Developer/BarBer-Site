
export interface Service {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface Barber {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  image: string;
}
