'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BASE_URL } from '@/lib/utils';

interface Service {
  id: number;
  name: string;
  image: string;
}

const Services = () => {
  const [services, setServices] = useState<Service[]>([]); // Храним список врачей
  const [loading, setLoading] = useState<boolean>(true); // Состояние загрузки

  // Получаем данные врачей с API
  useEffect(() => {
    fetch(`${BASE_URL}/api/v1/categories/`)
      .then((response) => response.json())
      .then((data) => {
        setServices(data); // Сохраняем данные в состояние
        setLoading(false); // Выключаем состояние загрузки
      })
      .catch((error) => {
        console.error('Ошибка при получении данных:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Загрузка данных...</p>;


  return (
    <div className="w-full container mx-auto mt-[36px] font-gilroy">
      <div className="bg-white max-w-full h-custom-204 pt-[32px] pl-[32px] rounded-3xl font-gilroy text-center">
        <h1 className="max-sm:text-[26px] text-[30px] font-bold text-left">Наши услуги</h1>
        <p className="text-left max-sm:text-[18px] text-[22px]  line-clamp-3">
          В <b className="text-l font-gilroy text-lightBlue">Med-Pro</b> наша команда медицинских специалистов стремится обеспечить сострадательный и индивидуальный уход.
        </p>
      </div>

      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-y-5 gap-x-7 mt-8">
        {services.map((service) => {
          return (
            <div key={service.id} className="bg-white w-full pb-4 h-full shadow-lg overflow-hidden rounded-3xl relative">
              <Link href={`/services/${service.id}`} passHref>
                <div>
                  <img
                    src={service.image}
                    alt={service.name}
                    width={100}
                    height={240}
                    className="w-full rounded-3xl p-4 h-50 object-cover"
                  />
                  <div className="flex flex-col pt-2 items-center">
                    <h3 className="text-3xl font-gilroy text-center">{service.name}</h3>
                  </div>
                </div>
              </Link>
              <button className="button mt-4 px-4 py-2 text-white bg-lightBlue rounded-full absolute top-4 right-8 border-2 border-white">
                Записаться
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
