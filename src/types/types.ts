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
