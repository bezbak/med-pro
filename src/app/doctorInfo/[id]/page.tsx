"use client";

import React, { useState, Fragment } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import { doctorCard } from '@/data/doctorData';
import AppointmentForm from '../../appointmentForm';

const DoctorInfo: React.FC = () => {
  const { id } = useParams(); // Получаем параметр 'id' из URL

  // Приводим 'id' к строке и затем преобразуем в число
  const doctorId = id ? parseInt(Array.isArray(id) ? id[0] : id) : null;
  const doctorData = doctorId !== null ? doctorCard[doctorId] : null;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAppointment = () => {
    setIsModalOpen(true);
  };



    // Открытие модального окна с формой записи
    const handleOpenForm = () => {
     
      setIsModalOpen(true);
  };

  // Закрытие модального окна
  const handleCloseForm = () => {
      setIsModalOpen(false);
      
  };


  if (!doctorData) {
    return <p>Врач не найден</p>;
  }

  return (
    <section id="doctorInfo">
      <div className="container flex mt-[42px] font-gilroy mb-[60px]">
        <div className="rounded-3xl mr-[30px]">
          <Image src={doctorData.image} alt="Doctor" width={484} height={596} className="rounded-3xl" />
        </div>
        <div className="w-[796px] shadow-md pl-[53px] pt-[46px] bg-white rounded-3xl font-gilroy">
          <h2 className="text-[36px] font-gilroy tracking-wide">Dr. {doctorData.name}</h2>
          <p className="text-[28px] text-pink">{doctorData.specialty}</p>
          <p className="text-[26px] text-[#808080] mt-[6px] ml-[1px] tracking-wide">{doctorData.experience}</p>
          <p className="w-[692px] h-[170px] text-[24px] mt-[17px] leading-7">{doctorData.description}</p>
          <button
            onClick={handleAppointment}
            className="bg-lightBlue text-white text-[20px] w-[244px] font-gilroy py-2 rounded-full mt-[19px]"
          >
            Записаться на прием
          </button>
        </div>
      </div>

      <Transition appear show={isModalOpen} as={Fragment}>
               
               <div className="relative inline-block w-full max-w-[800px] h-auto p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                   {/* Отображаем форму записи с данными врача */}
                    <AppointmentForm isOpen={isModalOpen} onClose={handleCloseForm} />
               </div>
        
</Transition>
    </section>
  );
};

export default DoctorInfo;
