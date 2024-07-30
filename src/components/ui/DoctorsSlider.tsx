"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { IDoctor } from "@/types/types";

const DoctorsSlider = ({ doctors }: { doctors: IDoctor[] }) => {
  return (
    <Swiper
      className="!ml-9 !h-auto"
      spaceBetween={20}
      slidesPerView={2.94}
      breakpoints={{
        0: {
          slidesPerView: 0.94,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1.94,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2.94,
          spaceBetween: 20,
        },
      }}
    >
      {doctors.map((doctor) => (
        <SwiperSlide key={doctor.id} className="!h-auto">
          <SlideCard doctor={doctor} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const SlideCard = ({ doctor }: { doctor: IDoctor }) => {
  return (
    <div className="bg-white p-5 rounded-2xl h-full">
      <div
        style={{
          background: `url("${doctor.image}") center center/cover no-repeat`,
        }}
        className="h-[240px] p-3 rounded-2xl"
      >
        <button className="px-8 py-3 bg-[#9CC8FC] rounded-full border font-semibold float-right">
          Записаться
        </button>
      </div>
      <p className="text-black text-[32px] leading-tight mt-5 font-semibold text-center">
        {doctor.title}
      </p>
    </div>
  );
};

export default DoctorsSlider;
