"use client";

import React, { useState, Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
import { serviceDetails } from '@/data/servicesData';
import AppointmentForm from '@/app/appointmentForm'; // Импортируем компонент формы

const Services: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenForm = () => {
    setIsModalOpen(true);
  };

  const handleCloseForm = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full container mx-auto mt-[36px] font-gilroy">
      <div className="bg-white max-w-full h-custom-204 pt-[32px] pl-[32px] rounded-3xl font-gilroy text-center">
        <h1 className="text-[30px] font-bold text-left">Наши услуги</h1>
        <p className="text-left text-[22px] lg:w-[1236px] h-[92px] line-clamp-3">
          В <b className="text-l font-gilroy text-lightBlue">Med-Pro</b> наша команда медицинских специалистов стремится обеспечить сострадательный и индивидуальный уход. Каждый врач обладает богатым опытом и знаниями, гарантируя, что вы получите медицинское обслуживание высочайшего уровня. Познакомьтесь с нашей преданной командой ниже.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-y-5 gap-x-7 mt-8">
        {Object.keys(serviceDetails).map((key) => {
          const service = serviceDetails[Number(key)];
          return (
            <div key={key} className="bg-white w-custom-420 h-custom-341 shadow-lg overflow-hidden rounded-3xl relative">
              <Link href={`/services/${key}`} legacyBehavior>
                <a>
                  <Image src={service.image} alt={service.title} width={390} height={240} className="w-full rounded-3xl p-4 h-50 object-cover" />
                  <div className="flex flex-col pt-2 items-center">
                    <h3 className="text-3xl font-gilroy text-center">{service.title}</h3>
                    <button
                      className="button mt-4 px-4 py-2 text-white bg-lightBlue rounded-full absolute top-4 right-8 border-2 border-white"
                      onClick={handleOpenForm}
                    >
                      Записаться
                    </button>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Модальное окно для формы записи на консультацию */}
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
              <div className="relative inline-block w-full max-w-[800px] h-auto p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <button
                  onClick={handleCloseForm}
                  className="absolute top-4 right-4 text-gray hover:text-gray-400"
                >
                  &#10007;
                </button>

                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 mb-4">
                  Запись на консультацию
                </Dialog.Title>

                <AppointmentForm onClose={handleCloseForm} />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Services;
