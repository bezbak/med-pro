import { type ClassValue, type ClassDictionary, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const BASE_URL = 'https://back.med-pro.kg/';
export const FRONT_URL = 'https://med-pro.kg/';

export function pushForm(inputs:ClassDictionary) {
  let data:ClassDictionary  = JSON.parse(localStorage.getItem('form_data') ?? '{}');
  if(data){
    const filteredInputs = Object.fromEntries(
      Object.entries(inputs).filter(([_, value]) => value !== '' && value !== null && value !== undefined)
    );
    data = { ...data, ...filteredInputs };
    localStorage.setItem('form_data', JSON.stringify(data));
  }else{
    localStorage.setItem('form_data', JSON.stringify(inputs));
  }
}
export function getForm() {
  let data:ClassDictionary  = JSON.parse(localStorage.getItem('form_data') ?? '{}');
  return data
}