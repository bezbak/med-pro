import { StaticImageData } from "next/image";

export interface IDoctor {
  id: number;
  image: StaticImageData;
  title: string;
}
export interface IQuestion {
  id: number;
  question: string;
  answer: string;
}

export interface TestimonialProps {
  testimonials: {
    name: string;
    image: string;
    text: string;
    rating: number;
  }[];
}
export interface Service {
  id: number;
  name: string;
  image: string;
}
export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  profile: string;
  phone_number: string;
}
export interface Patient {
  id: number;
  user: User;
}

export interface Doctor {
  id: number;
  specialty: Service;
  user: User;
  experience_years: number;
  rating: number;
  reviews_count: number;
  consultation_cost: string;
  description: string;
  education: string;
  treatment_approach: string;
  experience: string;
  skills: string;
}
export interface Consultation {
  id: number;
  date: string;
  time: string;
  consul_type: string;
  wh_number: string;
  status: string;
  notes: string;
  created_at: string;
  updated_at: string;
  patient: number;
  doctor: Doctor;
}
export interface Review {
  id: number;
  patient: Patient;
  stars: number;
  text: string;
}

export interface RegistrationFormData {
  email: string;
  phone_number: string;
  password: string;
  password2: string;
  last_name: string;
  first_name: string;
  is_doctor: boolean;
}

export interface ApiError {
  detail?: string;
  [key: string]: string | undefined;
}

export interface PatientData {
  medical_history: string | null;
  user: User;
  consultations: Consultation[];
}