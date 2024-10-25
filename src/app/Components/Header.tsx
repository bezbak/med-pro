'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// @ts-ignore
import Flag from 'react-world-flags'
import Image from 'next/image';
import Link from 'next/link';
import './styles/header.css'
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const pathname = usePathname();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [lang, setLang] = useState<string>('RU');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ?window.innerWidth: 1200);
  const handleResize = () => setWindowWidth(typeof window !== 'undefined' ?window.innerWidth: 1200);
  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    pathname === href || pathname?.startsWith(`${href}/`)
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <div>
      <header className="container mx-auto flex flex-wrap justify-center md:flex items-center justify-center mb-10 mt-9">
        <div className="flex items-center justify-between w_100p">
          {/* Логотип */}
          <div className="flex items-center header_logo">
            <Image src="/logo.png" alt="Logo" width={72} height={72} className='sm:w-[44px] sm:h-[44px] md:w-[62px] md:h-[62px] lg:w-[72px] lg:h-[72px]' />
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
          <nav className="header_nav flex bg-white rounded-full shadow mr-[50px] ml-[50px]">
            <Link
              href="/"
              className={`text-sm sm:text-base md:text-lg px-5 py-3 rounded-full transition-colors duration-300 ${'/' === pathname ? 'link_active' : ''}`}
              onClick={() => handleNavClick('/')}
            >
              Главная
            </Link>
            <Link
              href="/services"
              className={`text-sm sm:text-base md:text-lg px-5 py-3 rounded-full transition-colors duration-300 ${'/services' === pathname ? 'link_active' : ''}`}
              onClick={() => handleNavClick('services')}
            >
              Услуги
            </Link>
            <Link
              href="/about"
              className={`text-sm sm:text-base md:text-lg px-5 py-3 rounded-full transition-colors duration-300 ${'/about' === pathname ? 'link_active' : ''}`}
              onClick={() => handleNavClick('about')}
            >
              О нас
            </Link>
          </nav>

          {/* Поиск врачей */}
          {windowWidth > 980 ? (<div className="search relative w-full md:w-[294px] md:mr-[12px] lg:w-[294px] lg:mr-0">
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
          </div>) : (
            ''
          )}

          <div className="flex items-center ml-4">
            {windowWidth > 980 ? (
              <><Flag code="RU" onClick={() => { setLang('RU') }} style={{ width: 56, padding: '5px', marginRight: '16px', borderRadius: '4px', border: lang == 'RU' ? '1px solid #fff' : 'none' }} />
                <Flag code="KG" onClick={() => { setLang('KG') }} style={{ width: 56, padding: '5px', marginRight: '16px', borderRadius: '4px', border: lang == 'KG' ? '1px solid #fff' : 'none' }} /></>
            ) : (
              ''
            )}


            <button className="bg-lightBlue text-white pl-6 pr-2 py-3 rounded-full flex items-center justify-between font-gilroy">
              Регистрация
              <span className="ml-2 bg-white text-black px-3 py-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>
        {windowWidth < 980 ?<div className="container mx-auto mt-6 flex items-center justify-between p-4">
          {/* Поисковая строка */}
          <div className="relative w-full max-w-lg">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17.25 10.5a6.75 6.75 0 11-13.5 0 6.75 6.75 0 0113.5 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Найдите доктора или сервис"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-12 pl-12 pr-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-lightBlue focus:outline-none transition"
            />
          </div>

          {/* Флаги */}
          {windowWidth > 550 && windowWidth < 980 ? (<div className="flex items-center ml-4 space-x-2 w-100">
            <Flag code="RU" onClick={() => { setLang('RU') }} style={{ width: 56, padding: '5px', marginRight: '16px', borderRadius: '4px', border: lang == 'RU' ? '1px solid #fff' : 'none' }} />
            <Flag code="KG" onClick={() => { setLang('KG') }} style={{ width: 56, padding: '5px', marginRight: '16px', borderRadius: '4px', border: lang == 'KG' ? '1px solid #fff' : 'none' }} />
          </div>) : ''}
        </div> :""}
      </header>


    </div>
  );
};

export default Header;
