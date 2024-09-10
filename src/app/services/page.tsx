'use client';

import React, { useState, Fragment } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'; 
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { serviceDetails } from '@/data/servicesData'; 

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenForm = () => setIsModalOpen(true);
  const handleCloseForm = () => setIsModalOpen(false);

  return (
    <div className="w-full container mx-auto mt-[36px] font-gilroy">
      <div className="bg-white max-w-full h-custom-204 pt-[32px] pl-[32px] rounded-3xl font-gilroy text-center">
        <h1 className="text-[30px] font-bold text-left">Наши услуги</h1>
        <p className="text-left text-[22px] lg:w-[1236px] h-[92px] line-clamp-3">
          В <b className="text-l font-gilroy text-lightBlue">Med-Pro</b> наша команда медицинских специалистов стремится обеспечить сострадательный и индивидуальный уход.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-y-5 gap-x-7 mt-8">
        {Object.keys(serviceDetails).map((key) => {
          const service = serviceDetails[Number(key)];
          return (
            <div key={key} className="bg-white w-custom-420 h-custom-341 shadow-lg overflow-hidden rounded-3xl relative">
              <Link href={`/serviceDetails/${key}`}>
                <div>
                  <Image src={service.image} alt={service.title} width={390} height={240} className="w-full rounded-3xl p-4 h-50 object-cover" />
                  <div className="flex flex-col pt-2 items-center">
                    <h3 className="text-3xl font-gilroy text-center">{service.title}</h3>
                    <button
                      className="button mt-4 px-4 py-2 text-white bg-lightBlue rounded-full absolute top-4 right-8 border-2 border-white"
                      onClick={handleOpenForm}
                    >
                      Записаться
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Модальное окно */}
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={handleCloseForm}>
          <div className="fixed inset-0 bg-black opacity-30"></div>
          <div className="min-h-screen px-4 text-center">
            <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="relative inline-block w-full max-w-[800px] h-auto p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <button onClick={handleCloseForm} className="absolute top-4 right-4 text-gray hover:text-gray-400">
                  &#10007;
                </button>
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 mb-4">
                  Запись на консультацию
                </Dialog.Title>

                {/* Форма */}
                <div className="flex flex-col gap-[20px]">
                  <input type="text" placeholder="Имя" className="border border-gray-400 px-3 py-2 w-full rounded-xl" />
                  <input type="tel" placeholder="Телефон" className="border border-gray-400 px-3 py-2 w-full rounded-xl" />
                  <input type="email" placeholder="Email" className="border border-gray-400 px-3 py-2 w-full rounded-xl" />
                  <button onClick={handleCloseForm} className="border border-gray-400 px-6 py-3 bg-lightBlue text-[24px] text-gilroy text-white rounded-full">
                    Записаться
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

const serviceDetail = () => {
  const router = useRouter(); 
  const { id } = router.query;

  if (!id || !serviceDetails[Number(id)]) {
    return <div>Услуга не найдена</div>;
  }

  const service = serviceDetails[Number(id)];

  return (
    <div>
      <h1>{service.title}</h1>
      <p>{service.description}</p>
      <Image src={service.image} alt={service.title} width={400} height={300} />
    </div>
  );
};

export default Services;
