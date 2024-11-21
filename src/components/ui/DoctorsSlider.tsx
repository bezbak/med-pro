"use client";

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRouter } from 'next/navigation';
import { BASE_URL } from '@/lib/utils';

interface Service {
    id: number;
    name: string;
    image: string;
  }
  

const DoctorsSlider = () => {
    const router = useRouter();
    const [services, setServices] = useState<Service[]>([]); // Храним список врачей
    const [loading, setLoading] = useState<boolean>(true); // Состояние загрузки

    // Открытие страницы доктора
    const handleCardClick = (doctorId: number) => {
        router.push(`/services/${doctorId}`);
    };

    // Получаем данные врачей с API
    useEffect(() => {
        fetch(`${BASE_URL}/api/v1/categories/`)
            .then((response) => response.json())
            .then((data) => {
                setServices(data.slice(0,7)); // Сохраняем данные в состояние
                setLoading(false); // Выключаем состояние загрузки
            })
            .catch((error) => {
                console.error('Ошибка при получении данных:', error);
                setLoading(false);
            });
    }, []);
    if (loading) return <p>Загрузка данных...</p>;

    return (
        <>
            <Swiper
                className="h-auto max-sm:h-[470px]"
                spaceBetween={20}
                slidesPerView={2.94}
                pagination={{ clickable: true }}
                modules={[Pagination]} // Подключаем модули Navigation и Pagination
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        direction: 'vertical'
                    },
                    768: {
                        slidesPerView: 1.94,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 2.94,
                        spaceBetween: 20,
                    },
                }}
            >
                {services.map((doctor) => (
                    <SwiperSlide key={doctor.id} className="!h-auto">
                        <SlideCard
                            doctor={doctor}
                            onCardClick={() => handleCardClick(doctor.id)}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

const SlideCard = ({ doctor, onCardClick }: { doctor: Service; onCardClick: () => void;}) => {
    return (
        <div className="bg-white p-5 rounded-2xl h-full mt-[60px]" onClick={onCardClick}>
            <div className="relative h-[240px] p-3 rounded-2xl">
                <img
                    src={doctor.image}
                    className="absolute rounded-2xl w-full h-full top-0 left-0"
                    width={240}
                    height={240}
                    alt={doctor.name}
                />
                <button
                    className="relative px-8 py-3 bg-[#9CC8FC] z-10 rounded-full border font-semibold float-right">
                    Записаться
                </button>
            </div>
            <p className="text-black text-[32px] leading-tight mt-5 font-semibold text-center">
                {doctor.name}
            </p>
        </div>
    );
};

export default DoctorsSlider;
