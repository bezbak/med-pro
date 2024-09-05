"use client"
import React from 'react';
import { useParams } from 'next/navigation';
import { serviceDetails } from '@/data/servicesData';

const ServicePage = () => {
  const router = useParams();
  const { id } = router;


  const serviceId = id ? parseInt(id as string) : null;
  const service = serviceId ? serviceDetails[serviceId] : null;

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
