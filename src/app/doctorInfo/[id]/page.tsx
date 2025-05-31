"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useParams } from 'next/navigation';
import { BASE_URL, FRONT_URL } from '@/lib/utils';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Doctor, Review } from '@/types/types';
import Link from 'next/link';


const DoctorInfo: React.FC = () => {
  const { id } = useParams(); // Получаем параметр 'id' из URL
  const is_doctor = localStorage.getItem("is_doctor");

  const [doctorData, setDoctorData] = useState<Doctor | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [review, setReview] = useState<string>("");
  const [reviews, setReviews] = useState<Review[]>();
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Запрашиваем данные врача по ID
  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/v1/doctors/${id}`);
        const reviews = await fetch(`${BASE_URL}/api/v1/reviews/?doctor=${id}`);
        if (!response.ok && !reviews.ok) {
          throw new Error('Ошибка при загрузке данных');
        }
        const data: Doctor = await response.json();
        const rev: Review[] = await reviews.json();
        setDoctorData(data);
        setReviews(rev);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDoctorData();
  }, [id]);

  const seoText = doctorData
    ? `Запишитесь к доктору ${doctorData.user.first_name} ${doctorData.user.last_name}, специалисту по ${doctorData.specialty.name}, на нашем сайте: ${FRONT_URL}/doctorInfo/${id}`
    : '';

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const patientId = localStorage.getItem('user_id')

    if (!rating || !review.trim()) {
      alert("Пожалуйста, заполните все поля и выберите рейтинг.");
      return;
    }

    const payload = {
      patient_id: patientId,
      text: review,
      stars: rating,
      doctor: id,
    };

    try {
      setIsSubmitting(true);

      const response = await fetch(`${BASE_URL}/api/v1/reviews/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Ошибка при отправке данных:", errorData);
        alert("Произошла ошибка при отправке данных.");
        return;
      }

      const responseData = await response.json();
      console.log("Успешно отправлено:", responseData);

      // Сброс формы после успешной отправки
      setRating(0);
      setReview("");
      const reviews = await fetch(`${BASE_URL}/api/v1/reviews/?doctor=${id}`);
      if (!reviews.ok) {
        throw new Error('Ошибка при загрузке данных');
      }
      const rev: Review[] = await reviews.json();
      setReviews(rev);
    } catch (error) {
      console.error("Ошибка сети:", error);
      alert("Не удалось отправить отзыв. Проверьте соединение с интернетом.");
    } finally {
      setIsSubmitting(false);
    }
  };


  if (isLoading) return <p>Загрузка данных...</p>;
  if (isError || !doctorData) return <p>Врач не найден</p>;

  return (
    <section id="doctorInfo">
      <head>
        <meta name="description" content={seoText} />
        <meta property="og:title" content={`Доктор ${doctorData.user.first_name} ${doctorData.user.last_name} — ${doctorData.specialty.name}`} />
        <meta property="og:description" content={seoText} />
        <meta property="og:url" content={`${FRONT_URL}doctorInfo/${doctorData.id}`} />
      </head>
      <div className="container flex max-xl:flex-col max-xl:gap-4 mt-[42px] font-gilroy mb-[60px]">
        <div className="rounded-3xl mr-[30px] max-md:m-auto max-md:w-full">
          <img
            src={`${doctorData.user.profile}`}
            alt={`Dr. ${doctorData.user.last_name} ${doctorData.user.first_name}`}
            className="rounded-3xl h-full max-xl:w-full max-xl:max-h-[400px] object-cover"
          />
        </div>
        <div className="w-[796px] max-xl:w-full font-gilroy shadow-md max-p-[52px] p-4 bg-white rounded-3xl font-gilroy">
          <h2 className="text-[36px]  tracking-wide max-sm:text-[26px]">Dr. {doctorData.user.last_name} {doctorData.user.first_name}</h2>
          <p className="text-[28px] text-pink">{doctorData.specialty.name}</p>
          <p className="text-[26px] text-[#808080] max-sm:text-[18px] mt-[6px] ml-[1px] tracking-wide break-words">{doctorData.experience_years} лет опыта</p>
          <div className="flex items-center mt-2">
            <span className="text-[24px] mr-2">{doctorData.rating}</span>
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                fill={index < doctorData.rating ? "#FFC85D" : "#E0E0E0"}
                className='w-[24px]'
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.431 8.2 1.191-5.935 5.788 1.4 8.172L12 18.896l-7.333 3.855 1.4-8.172-5.935-5.788 8.2-1.191z" />
              </svg>
            ))}
          </div>
          <span className='bg-[#A7CBB6] p-[10px] rounded-full mt-2 text-white font-bold text-[16px]' style={{ 'display': 'block', 'width': 'fit-content' }}>{doctorData.consultation_cost}</span>
          <p className="w-full min-h-[170px] max-sm:text-[18px] text-[24px] mt-[17px] leading-7 break-words">
            {doctorData.description}
          </p>
          { !is_doctor ?
            <Link href={`/consultation/${doctorData.id}`}
              className="block bg-lightBlue text-white text-[20px] p-5 w-[244px] font-gilroy py-2 rounded-full mt-[19px]"
            >
              Записаться на прием
            </Link>
            :
            ''}
        </div>
      </div>
      <div className="container max-md:grid-cols-1 grid grid-cols-2 gap-4 p-4">
        <div className="border bg-white rounded-lg p-4">
          <h2 className="text-xl font-bold mb-2">Образование и квалификации</h2>
          <p className='break-words my-4'>
            {doctorData.education}
          </p>
          <a href='#' className="mt-4 bg-lightBlue text-white py-2 px-4 rounded">
            Перейти на сайт врача
          </a>
        </div>
        <div className="border bg-white rounded-lg p-4">
          <h2 className="text-xl font-bold mb-2">Подход к лечению</h2>
          <p className='break-words my-4'>
            {doctorData.treatment_approach}
          </p>
          <a href='#' className="mt-4 bg-lightBlue text-white py-2 px-4 rounded">
            Перейти на сайт врача
          </a>
        </div>
        <div className="border bg-white rounded-lg p-4">
          <h2 className="text-xl font-bold mb-2">Опыт работы</h2>
          <p className='break-words my-4'>
            {doctorData.experience}
          </p>
          <a href='#' className="mt-4 bg-lightBlue text-white py-2 px-4 rounded">
            Перейти на сайт врача
          </a>
        </div>
        <div className="border bg-white rounded-lg p-4">
          <h2 className="text-xl font-bold mb-2">Навыки и опыт</h2>
          <p className='break-words my-4'>
            {doctorData.skills}
          </p>
          <a href='#' className="mt-4 bg-lightBlue text-white py-2 px-4 rounded">
            Перейти на сайт врача
          </a>
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
          {reviews?.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-[#A7CBB6] h-[220px] gap-[10px] p-4 rounded-lg shadow-md flex flex-col">
                <div className='flex justify-between w-full'>
                  <img
                    src={item.patient.user.profile}
                    alt={item.patient.user.first_name}
                    className="w-20 h-20 rounded-full mb-3"
                  />
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.patient.user.first_name}</h3>
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
                className={`text-2xl cursor-pointer ${(hoverRating || rating) > index ? "text-yellow-400" : "text-gray-400"}`}
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
            disabled={isSubmitting}
            className={`bg-[#FFAEAD] text-white py-2 px-6 rounded-full hover:text-pink hover:bg-[#fff] hover:border-[#FFAEAD] transition-colors ml-auto cursor-pointer ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
          >
            {isSubmitting ? "Отправка..." : "Отправить"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default DoctorInfo;
