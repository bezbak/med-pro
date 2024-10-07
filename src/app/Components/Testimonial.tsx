'use client';
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Mousewheel } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/pagination";

import { testimonials } from "@/data/data";

interface TestimonialProps {
  id: number;
  name: string;
  image: string;
  text: string;
  rating: number;
}

const Testimonial = () => {
  return (
    <Swiper
      className="h-[500px] w-[500px] !ml-9"
      spaceBetween={20}
      slidesPerView={3}
      direction="vertical"
      pagination={{ clickable: true }}
      mousewheel={true}
      modules={[Mousewheel]} // Убрали Scrollbar
    >
      {testimonials.map(({ id, name, image, text, rating }: TestimonialProps) => (
        <SwiperSlide key={id} className="!h-auto">
          <SlideCard id={id} name={name} image={image} text={text} rating={rating} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const SlideCard = ({ name, image, text, rating }: TestimonialProps) => {
  return (
    <div className="w-[464px] mt-[20px] bg-lightBlue rounded-3xl p-4 flex items-center">
      <Image
        src={image}
        alt={name}
        width={80}
        height={80}
        className="rounded-full"
      />
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
        <p className="mt-2 text-gray-500">{text}</p>
      </div>
    </div>
  );
};

export default Testimonial;
