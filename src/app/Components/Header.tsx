import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/logo.png';
import ru from '../../../public/ru.png';
import kg from '../../../public/kg.png';
import searchIcon from '../../../public/search.png';
import chevronIcon from '../../../public/chevronIcon.png'

const Header: React.FC = () => {
  return (
    <header className="max-w-full font-gilroy">
      <div className="max-w-full w-full mx-auto flex items-center justify-between pb-4">
        <div className="flex items-center">
          <div className="mr-2">
            <Image src={logo} alt="Med-Pro Logo" width={72} height={72} />
          </div>
          <span className="text-2xl font-Gilroy-500 text-lightBlue">Med-Pro</span>
        </div>
        <nav className="flex space-x-4 h-custom-62 bg-white shadow rounded-full pr-4 pb-2">
          <Link href="/" legacyBehavior>
            <a className="px-4 pt-4 mb-4 h-custom-62 text-white bg-pink rounded-full">Главная</a>
          </Link>
          <Link href="/services " legacyBehavior>
            <a className="px-4 pt-4 mb-4 h-custom-62 text-black">Услуги</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="px-4 pt-4 mb-4 h-custom-62">О нас</a>
          </Link>
        </nav>
        <div className="flex items-center space-x-2 h-custom-62">
          <div className="relative flex items-center">
            <div className="absolute left-3">
              <Image src={searchIcon} alt="Icon Search" width={22} height={22} />
            </div>
            <input
              type="text"
              placeholder="Найдите доктора или сервис"
              className="h-custom-62 w-custom-294 pl-10 pr-4 py-2 border rounded-full"
            />
          </div>
          <div className="flex space-x-3">
            <div className="h-10">
              <Image src={ru} alt="Russian Flag" width={57} height={40} />
            </div>
            <div className="h-10">
              <Image src={kg} alt="Kyrgyz Flag" width={51} height={40} />
            </div>
          </div>
          <div className="flex items-center">
      <button className="ml-1 px-4 py-2 h-custom-62 w-custom-192 text-white bg-lightBlue rounded-full flex items-center justify-center">
        Регистрация 
        <div className="ml-2 flex items-center justify-center bg-white rounded-full" style={{ width: 50, height: 50 }}>
          <Image src={chevronIcon} alt='icon' width={24} height={24} />
        </div>
      </button>
    </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
