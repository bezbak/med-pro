"use client";

import React, { useState, Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { IDoctor } from '@/types/types';
import { doctors } from '@/data/data';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Transition } from '@headlessui/react';
import AppointmentForm from '@/app/appointmentForm'; // Импортируем форму записи

const DoctorsSlider = () => {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState<IDoctor | null>(null);

    // Открытие страницы доктора
    const handleCardClick = (doctorId: number) => {
        router.push(`/doctorInfo/${doctorId}`);
    };

    // Открытие модального окна с формой записи
    const handleOpenForm = (doctor: IDoctor) => {
        setSelectedDoctor(doctor); // Устанавливаем выбранного доктора
        setIsModalOpen(true);
    };

    // Закрытие модального окна
    const handleCloseForm = () => {
        setIsModalOpen(false);
        setSelectedDoctor(null); // Сбрасываем выбранного доктора
    };

    return (
        <>
            <Swiper
                className="h-auto"
                spaceBetween={20}
                slidesPerView={2.94}
                pagination={{ clickable: true }}
                modules={[ Pagination]} // Подключаем модули Navigation и Pagination
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
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
                {doctors.map((doctor) => (
                    <SwiperSlide key={doctor.id} className="!h-auto">
                        <SlideCard
                            doctor={doctor}
                            onCardClick={() => handleCardClick(doctor.id)}
                            onButtonClick={() => handleOpenForm(doctor)}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Модальное окно */}
            <Transition appear show={isModalOpen} as={Fragment}>
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="relative inline-block w-full max-w-[800px] h-auto p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                        {/* Отображаем форму записи */}
                        {selectedDoctor && (
                            <AppointmentForm isOpen={isModalOpen} onClose={handleCloseForm} />
                        )}
                    </div>
                </div>
            </Transition>
        </>
    );
};

const SlideCard = ({ doctor, onCardClick, onButtonClick }: { doctor: IDoctor; onCardClick: () => void; onButtonClick: () => void }) => {
    return (
        <div className="bg-white p-5 rounded-2xl h-full mt-[60px]" onClick={onCardClick}>
            <div className="relative h-[240px] p-3 rounded-2xl">
                <Image
                    src={doctor.image}
                    className="absolute rounded-2xl w-full h-full top-0 left-0"
                    width={240}
                    height={240}
                    alt={doctor.title}
                />
                <button
                    className="relative px-8 py-3 bg-[#9CC8FC] z-10 rounded-full border font-semibold float-right"
                    onClick={(e) => {
                        e.stopPropagation(); // Останавливаем всплытие, чтобы клик не активировал onCardClick
                        onButtonClick();
                    }}
                >
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
