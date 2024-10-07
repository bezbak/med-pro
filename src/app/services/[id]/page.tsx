'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { serviceDetails } from '@/data/servicesData';

const ServicePage = () => {
  const params = useParams()  // Получаем id из URL

  // Проверяем, если id есть, и находим соответствующую услугу
  const service = params.id && typeof params.id == 'string' ? serviceDetails[parseInt(params.id)] : null;

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
