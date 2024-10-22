"use client";

import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import AppointmentForm from '../../appointmentForm';
import { BASE_URL } from '@/lib/utils';

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

const DoctorInfo: React.FC = () => {
  const { id } = useParams(); // Получаем параметр 'id' из URL
  const [doctorData, setDoctorData] = useState<Doctor | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  if (isLoading) return <p>Загрузка данных...</p>;
  if (isError || !doctorData) return <p>Врач не найден</p>;

  return (
    <section id="doctorInfo">
      <div className="container flex mt-[42px] font-gilroy mb-[60px]">
        <div className="rounded-3xl mr-[30px]">
          <img
            src={`${BASE_URL}${doctorData.image}`}
            alt={`Dr. ${doctorData.name}`}
            width={484}
            height={596}
            className="rounded-3xl"
          />
        </div>
        <div className="w-[796px] font-gilroy shadow-md pl-[53px] p-[52px] bg-white rounded-3xl font-gilroy">
          <h2 className="text-[36px]  tracking-wide">Dr. {doctorData.name}</h2>
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
          <p className="w-[692px] h-[170px] text-[24px] mt-[17px] leading-7">
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
      <div className="container grid grid-cols-2 gap-4 p-4">
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

      <Transition appear show={isModalOpen} as={Fragment}>
        <div className="relative inline-block w-full max-w-[800px] h-auto p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          <AppointmentForm isOpen={isModalOpen} onClose={handleCloseForm} />
        </div>
      </Transition>
    </section>
  );
};

export default DoctorInfo;
