'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link'; 
import './doctors.css'
import { IoBookmarkOutline, IoStar } from 'react-icons/io5';
import { BASE_URL } from '@/lib/utils';
interface Doctor {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  reviews_count: number;
  image: string;
  consultation_cost: string;
}


const Page: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]); // Храним список врачей
  const [loading, setLoading] = useState<boolean>(true); // Состояние загрузки

  // Получаем данные врачей с API
  useEffect(() => {
    fetch(`${BASE_URL}/api/v1/doctors/`)
      .then((response) => response.json())
      .then((data) => {
        setDoctors(data); // Сохраняем данные в состояние
        setLoading(false); // Выключаем состояние загрузки
      })
      .catch((error) => {
        console.error('Ошибка при получении данных:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Загрузка данных...</p>; // Рендерим загрузку, пока данные не получены


  return (
    <section id='doctorList'>
      <div className="w-full container mx-auto mt-[36px] font-gilroy">
        <div className="bg-white max-w-full h-custom-204 pt-[32px] pl-[32px] rounded-3xl font-gilroy text-center">
          <h1 className="text-[30px] font-bold text-left">Наши врачи</h1>
          <p className="text-left text-[22px] lg:w-[1236px] h-[92px] line-clamp-3">
            В <b className="text-l font-gilroy text-lightBlue">Med-Pro</b> наша команда медицинских специалистов стремится обеспечить сострадательный и индивидуальный уход. Каждый врач обладает богатым опытом и знаниями, гарантируя, что вы получите медицинское обслуживание высочайшего уровня. Познакомьтесь с нашей преданной командой ниже.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-y-5 gap-x-7 mt-8">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                style={{ backgroundImage: `url(${BASE_URL}${doctor.image})` }}
                className="doctor_card shadow-lg"
              >
                <div className="card_inner">
                  <button className="card_bookmark">
                    <IoBookmarkOutline widths={'20px'} width={'20px'} color="#9CC8FC" />
                  </button>
                  <div className="card_text">
                    <div className="card_info">
                      <Link href={`/doctorInfo/${doctor.id}`} className="title">
                        {doctor.name}
                      </Link>
                      <Link href={`/doctors`} className="category">
                        {doctor.specialty}
                      </Link>
                    </div>
                    <span>
                      {doctor.rating.toFixed(1)} <IoStar color="#FFC85D" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default Page;
