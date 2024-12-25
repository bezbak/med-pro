"use client";

import React, { useState, Fragment } from 'react';
import BlockCollection from '../ui/BlockCollection';
import Block from '../ui/Block';
import { infoBlock } from '@/data/data';
import { Dialog, Transition } from '@headlessui/react';
import './styles/info.css'
import Link from 'next/link';
type Props = {};

const Info = (props: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section id="info">
            <BlockCollection className="*:min-h-[400px] *:xl:min-h-[570px] mt-[60px]">
                <Block className="w-3/5 bg-info-bg text-white p-8 relative bg-cover bg-no-repeat">
                    <h2 className="text-[36px] leading-tight font-gilroy">
                        У нас работают только <br /> опытные специалисты{' '}
                    </h2>
                    <Link
                        href={'/services'}
                        className="absolute bottom-9 right-11 px-8 py-4 rounded-full bg-[#9CC8FC]"
                    >
                        Записаться на консультацию
                    </Link>
                </Block>
                <Block className="w-2/5 text-white !bg-[#FFAEAD] px-7 py-10 suka_block">
                    {infoBlock.map((info) => (
                        <div key={`info_${info.id}`}>
                            <p className="text-[90px] info_amount leading-tight font-extrabold">
                                {info.amount}
                            </p>
                            <p className="text-[32px] info_title leading-tight font-extrabold">
                                {info.title}
                            </p>
                        </div>
                    ))}
                </Block>
            </BlockCollection>

            {/* Модальное окно для формы записи на консультацию */}
            <Transition appear show={isModalOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
                    <div className="fixed inset-0 bg-black opacity-30 "></div>
                    <div className="min-h-screen px-4 text-center">
                        <span className="inline-block h-screen align-middle" aria-hidden="true">
                            &#8203;
                        </span>
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
                            
                                <button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 text-gray hover:text-gray-400"
                                >
                                    &#10007; 
                                </button>

                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 mb-4">
                                    Запись на консультацию
                                </Dialog.Title>
                                {/* Форма с полями и кнопкой */}
                                <div className="flex flex-col gap-[20px]">
                                    <input
                                        type="text"
                                        placeholder="Имя"
                                        className="border border-gray-400 px-3 py-2 w-full rounded-xl"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Телефон"
                                        className="border border-gray-400 px-3 py-2 w-full rounded-xl"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="border border-gray-400 px-3 py-2 w-full rounded-xl"
                                    />
                                    <button
                                        onClick={closeModal}
                                        className="border border-gray-400 px-6 py-3 bg-lightBlue  text-[24px] text-gilroy text-white rounded-full"
                                    >
                                        Записаться
                                    </button>
                                </div>
                                {/* Конец формы */}
                            </div>
                            {/* Конец стиля модального окна */}
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </section>
    );
};

export default Info;
