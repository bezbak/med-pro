import React from 'react';
import { useRouter } from 'next/router';
import { serviceDetails } from '@/data/servicesData';

const ServicePage = () => {
  const router = useRouter();
  const { id } = router.query;

  
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

