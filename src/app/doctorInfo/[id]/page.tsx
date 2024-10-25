"use client";

import React, { useState, useEffect, Fragment, ChangeEvent, FormEvent } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import AppointmentForm from '../../appointmentForm';
import { BASE_URL } from '@/lib/utils';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience_years: number;
  rating: number;
  reviews_count: number;
  consultation_cost: string;
  description: string;
  image: string;
  education: string;
  treatment_approach: string;
  experience: string;
  skills: string;
}
interface Review {
  id: number;
  name: string;
  image: string;
  stars: number;
  text: string;
}
const DoctorInfo: React.FC = () => {
  const { id } = useParams(); // Получаем параметр 'id' из URL
  const [doctorData, setDoctorData] = useState<Doctor | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [review, setReview] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const reviews: Review[] = [
    {
      id: 1,
      name: "Мухаммад Ганиханов",
      image: '/Ellipse2.png',
      stars: 4,
      text: "Большое спасибо Айым Ганихановой за работу и помощь! Очень чуткий, внимательный и слушающий психолог!",
    },
    {
      id: 2,
      name: "Мухаммад Ганиханов",
      image: '/Ellipse2.png',
      stars: 4,
      text: "Всего за два приема помогла разрешить мою проблему и дала полезные советы!",
    },
    {
      id: 3,
      name: "Мухаммад Ганиханов",
      image: '/Ellipse2.png',
      stars: 5,
      text: "Профессионал своего дела! Очень благодарен за помощь!",
    },
    {
      id: 4,
      name: "Мухаммад Ганиханов",
      image: '/Ellipse2.png',
      stars: 5,
      text: "Профессионал своего дела! Очень благодарен за помощь!",
    },
  ];

  // Запрашиваем данные врача по ID
  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/v1/doctors/${id}/`);
        if (!response.ok) {
          throw new Error('Ошибка при загрузке данных');
        }
        const data: Doctor = await response.json();
        setDoctorData(data);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDoctorData();
  }, [id]);

  const handleAppointment = () => {
    setIsModalOpen(true);
  };

  const handleCloseForm = () => {
    setIsModalOpen(false);
  };
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  // Обработчик отправки формы
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Отзыв отправлен:", review, "Рейтинг:", rating);
    setReview("");
    setRating(0); // Сбрасываем рейтинг после отправки
  };
  const handleStarClick = (index: number) => {
    setRating(index + 1); // Устанавливаем рейтинг на основе нажатой звезды
  };

  const handleStarHover = (index: number) => {
    setHoverRating(index + 1); // Отслеживаем звезду при наведении
  };

  const handleStarMouseLeave = () => {
    setHoverRating(null); // Сбрасываем hover эффект
  };


  if (isLoading) return <p>Загрузка данных...</p>;
  if (isError || !doctorData) return <p>Врач не найден</p>;

  return (
    <section id="doctorInfo">
      <div className="container flex max-xl:flex-col max-xl:gap-4 mt-[42px] font-gilroy mb-[60px]">
        <div className="rounded-3xl mr-[30px] max-md:m-auto max-md:w-full">
          <img
            src={`${BASE_URL}${doctorData.image}`}
            alt={`Dr. ${doctorData.name}`}
            className="rounded-3xl  max-xl:w-full max-xl:max-h-[400px] object-cover"
          />
        </div>
        <div className="w-[796px] max-xl:w-full font-gilroy shadow-md pl-[53px] p-[52px] bg-white rounded-3xl font-gilroy">
          <h2 className="text-[36px]  tracking-wide max-sm:text-[26px]">Dr. {doctorData.name}</h2>
          <p className="text-[28px] text-pink">{doctorData.specialty}</p>
          <p className="text-[26px] text-[#808080] mt-[6px] ml-[1px] tracking-wide">{doctorData.experience}</p>
          <div className="flex items-center mt-2">
            <span className="text-[24px] mr-2">{doctorData.rating}</span>
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                fill={index < doctorData.rating ? "#FFC85D" : "#E0E0E0"}
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.431 8.2 1.191-5.935 5.788 1.4 8.172L12 18.896l-7.333 3.855 1.4-8.172-5.935-5.788 8.2-1.191z" />
              </svg>
            ))}
          </div>
          <span className='bg-[#A7CBB6] p-[10px] rounded-full mt-2 text-white font-bold text-[16px]' style={{ 'display': 'block', 'width': 'fit-content' }}>{doctorData.consultation_cost}</span>
          <p className="w-full h-[170px] max-sm:text-[18px] text-[24px] mt-[17px] leading-7 break-words">
            {doctorData.description}
          </p>
          <button
            onClick={handleAppointment}
            className="bg-lightBlue text-white text-[20px] w-[244px] font-gilroy py-2 rounded-full mt-[19px]"
          >
            Записаться на прием
          </button>
        </div>
      </div>
      <div className="container max-md:grid-cols-1 grid grid-cols-2 gap-4 p-4">
        <div className="border bg-white rounded-lg p-4">
          <h2 className="text-xl font-bold mb-2">Образование и квалификации</h2>
          <p>
            {doctorData.education}
          </p>
          <button className="mt-4 bg-lightBlue text-white py-2 px-4 rounded">
            Перейти в профессиональный сайт врача
          </button>
        </div>
        <div className="border bg-white rounded-lg p-4">
          <h2 className="text-xl font-bold mb-2">Подход к лечению</h2>
          <p>
            {doctorData.treatment_approach}
          </p>
          <button className="mt-4 bg-lightBlue text-white py-2 px-4 rounded">
            Перейти в профессиональный сайт врача
          </button>
        </div>
        <div className="border bg-white rounded-lg p-4">
          <h2 className="text-xl font-bold mb-2">Опыт работы</h2>
          <p>
            {doctorData.experience}
          </p>
          <button className="mt-4 bg-lightBlue text-white py-2 px-4 rounded">
            Перейти в профессиональный сайт врача
          </button>
        </div>
        <div className="border bg-white rounded-lg p-4">
          <h2 className="text-xl font-bold mb-2">Навыки и опыт</h2>
          <p>
            {doctorData.skills}
          </p>
          <button className="mt-4 bg-lightBlue text-white py-2 px-4 rounded">
            Перейти в профессиональный сайт врача
          </button>
        </div>
      </div>
      <div className="container mt-[42px] mb-[60px]">
        {/* Сетка отзывов */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mb-8"
        >
          {reviews.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-[#A7CBB6] h-[220px] gap-[10px] p-4 rounded-lg shadow-md flex flex-col">
                <div className='flex justify-between w-full'>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-full mb-3"
                  />
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                    <div className="flex mb-3">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <span
                          key={index}
                          className={`text-xl ${index < item.stars ? "text-yellow-400" : "text-gray-300"
                            }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-black-700">{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Форма отправки отзыва */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center space-x-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <span
                key={index}
                className={`text-2xl cursor-pointer ${(hoverRating || rating) > index
                    ? "text-yellow-400"
                    : "text-gray-400"
                  }`}
                onClick={() => handleStarClick(index)}
                onMouseEnter={() => handleStarHover(index)}
                onMouseLeave={handleStarMouseLeave}
              >
                ★
              </span>
            ))}
          </div>

          <textarea
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
            rows={3}
            placeholder="Напишите отзыв"
            value={review}
            onChange={handleInputChange}
          />

          <button
            type="submit"
            className="bg-[#FFAEAD] text-white py-2 px-6 rounded-full  hover:text-pink hover:bg-[#fff] hover:border-[#FFAEAD] transition-colors ml-auto cursor-pointer"
          >
            Отправить
          </button>
        </form>
      </div>
      <Transition appear show={isModalOpen} as={Fragment}>
        <div className="relative inline-block w-full max-w-[800px] h-auto p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          <AppointmentForm isOpen={isModalOpen} onClose={handleCloseForm} />
        </div>
      </Transition>
    </section>
  );
};

export default DoctorInfo;
