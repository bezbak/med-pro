'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { doctorCard } from '@/data/doctorData';


const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>(''); 
  const [filteredDoctors, setFilteredDoctors] = useState<typeof doctorCard>(doctorCard); // Изначально показываем всех врачей
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // Для управления мобильным меню

  // Логика поиска врачей
  // const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const searchValue = event.target.value;
  //   setSearchTerm(searchValue);

  //   if (searchValue.trim() !== '') {
  //     const filtered = doctorCard.filter((doctor) =>
  //       doctor.name.toLowerCase().includes(searchValue.toLowerCase()) ||
  //       doctor.specialty.toLowerCase().includes(searchValue.toLowerCase())
  //     );
  //     setFilteredDoctors(filtered);
  //   } else {
  //     setFilteredDoctors(doctorCard); // Если строка поиска пуста, показываем всех врачей
  //   }
  // };

  const handleNavClick = (page: string) => {
    setIsMenuOpen(false); // Закрыть меню при клике
  };

  return (
    <div>
      <header className="container mx-auto flex flex-wrap justify-center md:flex items-center justify-center mb-10 mt-9">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <div className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={72} height={72} className='sm:w-[44px] sm:h-[44px] md:w-[62px] md:h-[62px] lg:w-[72px] lg:h-[72px]'/>
            <Link href="/" className="text-sm sm:text-[24px] md:text-[24px] font-Gilroy-500 text-lightBlue pl-3 lg:text-[30px]">
              Med-Pro
            </Link>
          </div>

          {/* Гамбургер-меню для мобильных устройств */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex items-center justify-between">
          {/* Навигация */}
          <nav className="flex bg-white rounded-full p-2 shadow mr-[56px] ml-[85px]">
            <Link
              href="/"
              className={`text-sm sm:text-base md:text-lg px-5 py-3 rounded-full transition-colors duration-300`}
              onClick={() => handleNavClick('Главная')}
            >
              Главная
            </Link>
            <Link
              href="/services"
              className={`text-sm sm:text-base md:text-lg px-5 py-3 rounded-full transition-colors duration-300`}
              onClick={() => handleNavClick('Услуги')}
            >
              Услуги
            </Link>
            <Link
              href="/doctors"
              className={`text-sm sm:text-base md:text-lg px-5 py-3 rounded-full transition-colors duration-300`}
              onClick={() => handleNavClick('Докторы')}
            >
              Докторы
            </Link>
            <Link
              href="/about"
              className={`text-sm sm:text-base md:text-lg px-5 py-3 rounded-full transition-colors duration-300`}
              onClick={() => handleNavClick('О нас')}
            >
              О нас
            </Link>
          </nav>

          {/* Поиск врачей */}
          <div className="relative w-full md:w-[294px] md:mr-[12px] lg:w-[294px] lg:mr-0">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <Image src="/search.png" alt="Search Icon" width={22} height={22} />
            </div>
            <input
              type="text"
              placeholder="Найдите доктора по имени или специальности"
              value={searchTerm}
              // onChange={handleSearchChange}
              className="h-12 md:h-16 w-full pl-12 pr-4 text-sm sm:text-base border rounded-full focus:outline-none focus:ring-2 focus:ring-lightBlue"
            />
          </div>
        </div>
      </header>

    
    </div>
  );
};

export default Header;
