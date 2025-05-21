export interface Stylist {
  id: string;
  name: string;
  avatar: string;
  specialty: string;
  experience: string;
  rating: number;
  available: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  image: string;
  category: string;
}

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

export interface Appointment {
  id: string;
  userId: string;
  stylistId: string;
  serviceId: string;
  date: string;
  timeSlot: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
}