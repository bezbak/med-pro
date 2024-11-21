import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const BASE_URL = 'http://127.0.0.1:8000';
export const FRONT_URL = 'https://med-pro.kg/';