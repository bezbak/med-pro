export interface IDoctor {
  id: number;
  image: string;
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