'use client';  // Указывает, что компонент должен рендериться на клиентской стороне

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { serviceDetails } from '@/data/servicesData';
import AppointmentForm from '@/app/appointmentForm';  // Используем ваш компонент для формы записи

const DoctorList = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);  // Хук для открытия формы записи

  const handleOpenForm = () => {
    setIsFormOpen(true);  // Открыть форму записи
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);  // Закрыть форму записи
  };

  return (
    <section id='doctorList'>
    <div className="w-full container mx-auto mt-[36px] font-gilroy">
      <div className="bg-white max-w-full h-custom-204 pt-[32px] pl-[32px] rounded-3xl font-gilroy text-center">
        <h1 className="text-[30px] font-bold text-left">Наши врачи</h1>
        <p className="text-left text-[22px] lg:w-[1236px] h-[92px] line-clamp-3">
          В <b className="text-l font-gilroy text-lightBlue">Med-Pro</b> наша команда медицинских специалистов стремится обеспечить сострадательный и индивидуальный уход. Каждый врач обладает богатым опытом и знаниями, гарантируя, что вы получите медицинское обслуживание высочайшего уровня. Познакомьтесь с нашей преданной командой ниже.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-y-5 gap-x-7 mt-8">
        {Object.keys(serviceDetails).map((key) => {
          const service = serviceDetails[Number(key)];
          return (
            <div key={key} className="bg-white w-custom-420 h-custom-341 shadow-lg overflow-hidden rounded-3xl relative">
              <Link href={`/doctorInfo/${key}`} legacyBehavior> 
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
              <div className="absolute top-0 left-0 right-0 h-1 bg-white"></div>
            </div>
          );
        })}
      </div>
      {isFormOpen && <AppointmentForm onClose={handleCloseForm} />}  {/* Здесь подключаем компонент формы записи */}
    </div>
    </section>
  );
};

export default DoctorList;
