'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { serviceDetails } from '@/data/servicesData';

const ServicePage = () => {
  const { id } = useParams(); // Получаем id из URL

  // Проверяем, если id есть, и находим соответствующую услугу
  const service = id ? serviceDetails[parseInt(id)] : null;

  if (!service) {
    return <div>Услуга не найдена</div>;
  }

  return (
    <div>
      <h1>{service.title}</h1>
      <p>{service.description}</p>
    </div>
  );
};

export default ServicePage;
