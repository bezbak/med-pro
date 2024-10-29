'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link'; 
import './doctors.css'
import { IoBookmarkOutline, IoStar } from 'react-icons/io5';
import { BASE_URL } from '@/lib/utils';


interface Service {
  id: number;
  name: string;
  image: string;
}

interface Doctor {
  id: number;
  name: string;
  specialty: Service;
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
    fetch(`${BASE_URL}/api/v1/doctors`)
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
        <div className="bg-white max-w-full p-[32px] h-full rounded-3xl font-gilroy text-center">
          <h1 className="max-sm:text-[28px] max-sm:mb-[10px] text-[30px] font-bold text-left">Наши врачи</h1>
          <p className="text-left max-sm:text-[18px] text-[22px] w-full break-words">
            В <b className="text-l font-gilroy text-lightBlue ">Med-Pro</b> наша команда медицинских специалистов стремится обеспечить сострадательный и индивидуальный уход. Каждый врач обладает богатым опытом и знаниями, гарантируя, что вы получите медицинское обслуживание высочайшего уровня. Познакомьтесь с нашей преданной командой ниже.
          </p>
        </div>

        <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10 max-sm:place-items-center mt-8">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                style={{ backgroundImage: `url(${doctor.image})` }}
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
                        {doctor.specialty.name}
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
