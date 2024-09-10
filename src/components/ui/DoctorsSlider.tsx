'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { IDoctor } from '@/types/types';
import { doctors } from '@/data/data';
import Image from 'next/image';
import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const DoctorsSlider = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState<IDoctor | null>(null);

    const handleOpenForm = (doctor: IDoctor) => {
        setSelectedDoctor(doctor);
        setIsModalOpen(true);
    };
    
    const handleCloseForm = () => {
        setIsModalOpen(false);
        setSelectedDoctor(null);
    };

    return (
        <>
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
                        <SlideCard doctor={doctor} onClick={handleOpenForm} />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Модальное окно */}
            <Transition appear show={isModalOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={handleCloseForm}>
                    <div className="fixed inset-0 bg-black opacity-30"></div>
                    <div className="min-h-screen px-4 text-center">
                        <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="relative inline-block w-full max-w-[600px] h-auto p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <button onClick={handleCloseForm} className="absolute top-4 right-4 text-gray hover:text-gray-400">
                                    &#10007;
                                </button>
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 mb-4">
                                    Запись на консультацию
                                </Dialog.Title>

                                {selectedDoctor && (
                                    <div>
                                        <h3 className="text-xl mb-4">{selectedDoctor.title}</h3>
                                        <input type="text" placeholder="Имя" className="border border-gray-400 px-3 py-2 w-full rounded-xl mb-4" />
                                        <input type="tel" placeholder="Телефон" className="border border-gray-400 px-3 py-2 w-full rounded-xl mb-4" />
                                        <button onClick={handleCloseForm} className="w-full px-4 py-2 bg-lightBlue text-white rounded-full">
                                            Записаться
                                        </button>
                                    </div>
                                )}
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

const SlideCard = ({ doctor, onClick }: { doctor: IDoctor; onClick: (doctor: IDoctor) => void }) => {
    return (
        <div className="bg-white p-5 rounded-2xl h-full mt-[60px]">
            <div className="relative h-[240px] p-3 rounded-2xl">
                <Image
                    src={doctor.image}
                    className="absolute rounded-2xl w-full h-full top-0 left-0"
                    width={240}
                    height={240}
                    alt={doctor.title}
                />
                <button className="relative px-8 py-3 bg-[#9CC8FC] z-10 rounded-full border font-semibold float-right" onClick={() => onClick(doctor)}>
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
