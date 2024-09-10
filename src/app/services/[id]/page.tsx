<<<<<<< HEAD:src/app/services/[id]/page.tsx
"use client"
=======
"use client";

>>>>>>> 0a913fd (slider):src/app/services/[id].tsx
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
