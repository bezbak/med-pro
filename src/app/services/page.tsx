import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { serviceDetails } from '@/data/servicesData';
import Header from '@/app/Components/Header';

const Services: React.FC = () => {
  return (
    <div className="container mx-auto mt-4  font-gilroy">
      <Header />
      <div className='bg-white max-w-full h-custom-204 pt-8 p-4  rounded-3xl font-gilroy '>
        <h1 className="text-3xl font-bold text-left pl-4 m-4">Наши услуги</h1>
        <p className="text-center  w-custom-1236 h-custom-92 m-6">
          В <b className='text-l font-gilroy text-lightBlue'>Med-Pro</b>В Med-Pro наша команда медицинских специалистов стремится обеспечить сострадательный и индивидуальный уход. Каждый врач обладает богатым опытом и знаниями, гарантируя, что вы получите медицинское обслуживание высочайшего уровня. Познакомьтесь с нашей преданной командой ниже.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mt-16 ">
          {Object.keys(serviceDetails).map((key) => {
            const service = serviceDetails[Number(key)];
            return (
              <div key={key} className="bg-white  w-custom-420 h-custom-341 shadow-lg overflow-hidden rounded-3xl relative ">
                <Link href={`/services/${key}`} legacyBehavior>
                  <a>
                    <Image src={service.image} alt={service.title} width={390} height={240} className="w-full rounded-3xl p-4 h-50 object-cover" />
                    <div className="flex flex-col pt-2  items-center">
                      <h3 className="text-3xl font-gilroy text-center ">{service.title}</h3>
                      <button className="button mt-4 px-4 py-2 text-white bg-lightBlue rounded-full absolute top-4 right-8">
        Записаться
    </button>
                    </div>
                  </a>
                </Link>
                <div className="absolute top-0 left-0 right-0 h-1 bg-white"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
