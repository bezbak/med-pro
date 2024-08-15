import React from 'react';
import Image from 'next/image';
import logo from '../../../public/advertisement/logo.png';
import TommorowTech from '../../../public/advertisement/TommorowTech.png';

const Advertisement = () => {
  return (
    <div className='w-full h-[350px] bg-[#1B1616] rounded-3xl ] flex items-center justify-center relative mt-[60px]'>
      <div className='absolute  mb-[288px] flex items-center bg-neutral-950 w-[148px] h-[36px] rounded-full'>
        <div className='w-[20px] h-[20px] mr-[13px] ml-[22px] bg-red-800 text-black flex items-center justify-center rounded-full '>
          <p>!</p>
        </div>
        <p className=' text-white'>Реклама</p>
      </div>
      <Image src={logo} width={120} height={120} alt="Логотип 1" className='mr-[42px]' />
      <Image src={TommorowTech} width={667} height={56} alt="Логотип 2" className="pl-[8px] pb-[10px]" />
    </div>
  );
};

export default Advertisement;
