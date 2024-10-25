'use client';

import React, { useState, Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { serviceDetails } from '@/data/servicesData';
import AppointmentForm from '../appointmentForm';

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Открытие формы записи
  const handleOpenForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Остановить всплытие события
    setIsModalOpen(true);
  };

  // Закрытие формы записи
  const handleCloseForm = () => setIsModalOpen(false);

  return (
    <div className="w-full container mx-auto mt-[36px] font-gilroy">
      <div className="bg-white max-w-full h-custom-204 pt-[32px] pl-[32px] rounded-3xl font-gilroy text-center">
        <h1 className="max-sm:text-[26px] text-[30px] font-bold text-left">Наши услуги</h1>
        <p className="text-left max-sm:text-[18px] text-[22px]  line-clamp-3">
          В <b className="text-l font-gilroy text-lightBlue">Med-Pro</b> наша команда медицинских специалистов стремится обеспечить сострадательный и индивидуальный уход.
        </p>
      </div>

      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-y-5 gap-x-7 mt-8">
        {Object.keys(serviceDetails).map((key) => {
          const service = serviceDetails[Number(key)];
          return (
            <div key={key} className="bg-white w-full pb-4 h-full shadow-lg overflow-hidden rounded-3xl relative">
              <Link href={`/doctorInfo/${key}`} passHref>
                <div>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={100}
                    height={240}
                    className="w-full rounded-3xl p-4 h-50 object-cover"
                  />
                  <div className="flex flex-col pt-2 items-center">
                    <h3 className="text-3xl font-gilroy text-center">{service.title}</h3>
                  </div>
                </div>
              </Link>
              <button
                className="button mt-4 px-4 py-2 text-white bg-lightBlue rounded-full absolute top-4 right-8 border-2 border-white"
                onClick={handleOpenForm}
              >
                Записаться
              </button>
            </div>
          );
        })}
      </div>

      {/* Модальное окно */}
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={handleCloseForm}>
          <div className="fixed inset-0 bg-black opacity-30"></div>
          <div className="min-h-screen px-4 text-center">
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="relative inline-block w-full max-w-[800px] h-auto p-6 my-8 ">
               
                {/* Форма */}
                <div className="flex flex-col gap-[20px]">
                  <AppointmentForm isOpen={isModalOpen} onClose={handleCloseForm} />
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Services;
