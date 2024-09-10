import React, { useState } from 'react';
import Image from 'next/image';
import { serviceDetails} from '@/data/servicesData'; 

const ServiceList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState<any[]>(Object.values(serviceDetails));

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);

    const filtered = Object.values(serviceDetails).filter((service) =>
      service.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      service.description.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredServices(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Найдите услугу"
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredServices.map((service, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-lg">
            <Image src={service.image} alt={service.title} width={100} height={100} />
            <h3 className="text-xl font-bold mt-2">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
