"use client";
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { TestimonialProps } from "@/types/types";
import { testimonials } from "@/data/data";

const Testimonial = () => {
  return (
    <Swiper
      className="!ml-9 !h-auto"
      spaceBetween={20}
      slidesPerView={1}
      direction="vertical"
    >
      {testimonials.map(({ name, image, text, rating }, index) => (
        <SwiperSlide key={index} className="!h-auto">
          <SlideCard name={name} image={image} text={text} rating={rating} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const SlideCard = ({ name, image, text, rating }: { name: string; image: string; text: string; rating: number }) => {
  return (
    <div className="bg-white p-5 rounded-2xl h-full flex items-center">
      <Image src={image} alt={name} width={80} height={80} className="rounded-full w-12 h-12" />
      <div className="ml-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <div className="flex items-center">
          {[...Array(rating)].map((_, i) => (
            <span key={i} className="text-yellow-500">★</span>
          ))}
          {[...Array(5 - rating)].map((_, i) => (
            <span key={i} className="text-gray-300">★</span>
          ))}
        </div>
        <p className="mt-2 text-gray-700">{text}</p>
      </div>
    </div>
  );
};

export default Testimonial;
