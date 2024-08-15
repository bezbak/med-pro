"use client" ;


import React, { useState } from 'react';
import Image from 'next/image';
import { serviceDetails, ServiceDetail } from '@/data/servicesData'; 
import chevronIcon from "../../../public/chevronIcon.png"
import kg from  "../../../public/kg.png"
import ru from "../../../public/ru.png"



const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState<ServiceDetail[]>([]); 
  const [hasSearched, setHasSearched] = useState(false); 

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
    setHasSearched(true); 

    
    if (searchValue.trim() !== '') {
      const filtered = Object.values(serviceDetails).filter((service) =>
        service.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        service.description.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredServices(filtered);
    } else {
      
      setFilteredServices([]);
    }
  };

  return (
    <header className="w-full font-gilroy mb-[42px]">
      <div className="flex items-center">
        <div className="flex items-center mr-[2px]">
          <Image src="/logo.png" alt="Logo" width={72} height={72} />
          <span className="text-[34px] font-Gilroy-500 text-lightBlue pl-[12px]">Med-Pro</span>
        </div>
        <nav className="flex items-center bg-white shadow rounded-full w-[299px] ml-[85px]">
          <a href="/" className="flex items-center text-[16px] w-[100px] h-[62px] text-white bg-pink rounded-full pl-[20px]">Главная</a>
          <a href="/services" className="flex items-center justify-center w-[100px] h-[62px] pl-[12px] text-black">Услуги</a>
          <a href="/about" className="flex items-center justify-center w-[100px] h-[62px] pl-[18px]">О нас</a>
        </nav>
        <div className="flex items-center">
          <div className="relative flex items-center">
            <div className="absolute left-4 ml-[64px] mt-[8px]">
              <Image src="/search.png" alt="Search Icon" width={22} height={22} />
            </div>
            <input
              type="text"
              placeholder="Найдите услугу"
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[62px] w-[294px] text-[16px] pl-[55px] ml-[56px] border rounded-full"
            />
          </div>
        </div>
        
      <div className="flex items-center ">
            <div className=" ml-[12px] mr-[13px] border-2  border-lightBlue rounded-lg">
              <Image src={ru} alt="Russian Flag" width={50} height={32} />
            </div>
            <div className="mr-[13px] pl-[6px]">
              <Image src={kg} alt="Kyrgyz Flag" width={51} height={34} />
            </div>
          </div>
          <div className=" ">
            <button className="h-[62px] w-[192px] text-white bg-lightBlue rounded-full flex items-center justify-center pl-[12px] ">
              Регистрация
              <div className="flex items-center justify-center bg-white ml-[12px] rounded-full w-[50px] h-[50px]">
                <Image src={chevronIcon} alt="icon" width={24} height={24} />
              </div>
            </button>
          </div>
      
      </div>


    
      <div className="mt-[20px]">
        {filteredServices.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredServices.map((service, index) => (
              <li key={index} className="border rounded-3xl p-6 shadow-lg">
                <Image src={service.image} alt={service.title} width={100} height={100} className='rounded-lg' />
                <h3 className="text-xl font-bold mt-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </li>
            ))}
          </ul>
        ) : (
         
          hasSearched && searchTerm.trim() !== '' && <p className="text-[16px]">Не найдено услуг по вашему запросу.</p>
        )}
      </div>
    </header>
  );
};

export default Header;
