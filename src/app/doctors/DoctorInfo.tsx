"use client";

import React, { useState, Fragment } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import star from '../../../public/doctor/star.png';

import AppointmentForm from '../appointmentForm';

interface DoctorInfoProps {
  doctorData: {
    id: number;
    name: string;
    specialty: string;
    experience: string;
    rating: number;
    description: string;
    image: string;
  };
}

const DoctorInfo: React.FC<DoctorInfoProps> = ({ doctorData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAppointment = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="doctorInfo" className="w-full bg-[#F0F0F0]">
    
      <div className="flex mt-[42px] font-gilroy mb-[60px]">
        <div className="rounded-3xl mr-[20px]">
          <Image src={doctorData.image} alt="Doctor" width={484} height={596} className="rounded-3xl" />
        </div>
        <div className="w-[796px] shadow-md pl-[53px] pt-[46px] bg-white rounded-3xl font-gilroy">
          <h2 className="text-[36px] font-gilroy tracking-wide">Dr.{doctorData.name}</h2>
          <p className="text-[28px] text-pink">{doctorData.specialty}</p>
          <p className="text-[26px] text-[#808080] mt-[6px] ml-[1px] tracking-wide">{doctorData.experience}</p>
          <div className="flex items-center">
            <span className="text-[24px] font-medium text-black mt-[10px]">{doctorData.rating}</span>
            <div className="flex items-center w-[267px] pl-[20px] pr-[24px] pt-[13px] space-x-1">
              {[...Array(4)].map((_, index) => (
                <Image key={index} src={star} alt="review for doctor" width={42} height={42} className="text-yellow-500" />
              ))}
              <Image src={star} alt="review for doctor" width={42} height={42} className="text-[#9D9D9D]" />
            </div>
          </div>
          <div className="flex items-center justify-center w-[125px] h-[42px] bg-Green rounded-full mt-[10px]">
            <p className="text-[18px] font-gilroy text-white pb-[4px]">600сом/час</p>
          </div>
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
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
          <div className="fixed inset-0 bg-black opacity-40"></div>
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
              <div className="inline-block w-full max-w-3xl p-10 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-3xl">
                <Dialog.Title as="h3" className="text-2xl font-medium leading-6 text-gray-900 mb-6 ">
                  Запись на прием
                </Dialog.Title>
                <AppointmentForm onClose={closeModal} />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
};

export default DoctorInfo;
