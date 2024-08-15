import React from 'react';
import BlockCollection from '../ui/BlockCollection';
import Block from '../ui/Block';
import Image from 'next/image';
import Link from 'next/link';
import ArrowTopRightIcon from '@/assets/images/home/ArrowTopRightIcon.svg';
import client1 from '@/assets/images/home/mission/client1.png';
import client2 from '@/assets/images/home/mission/client2.png';
import client3 from '@/assets/images/home/mission/client3.png';
import client4 from '@/assets/images/home/mission/client4.png';

const OurMission = () => {
    return (
        <section id="our-mission">
            <BlockCollection>
                <Block className="px-16 py-7 font-gilroy !bg-[#A7CBB6] text-white w-1/3">
                    <div className="text-[95px] leading-tight font-semibold">
                        40К +
                    </div>
                    <p className="text-[22px] font-gilroy leading-tight mb-1">
                        Регулярных клиентов которые пользюуются нашими услугами{' '}
                    </p>
                    <div className="flex items-center justify-center *:-ml-5">
                        <Image
                            src={client1}
                            alt="client"
                            width={100}
                            height={100}
                        />
                        <Image
                            src={client2}
                            alt="client"
                            width={100}
                            height={100}
                        />
                        <Image
                            src={client3}
                            alt="client"
                            width={100}
                            height={100}
                        />
                        <Image
                            src={client4}
                            alt="client"
                            width={100}
                            height={100}
                        />
                    </div>
                </Block>
                <Block className="text-[#1B1616] w-2/3 p-8">
                    <div className="flex items-center justify-between mb-5">
                        <h2 className="text-[40px] leading-tight font-gilroy">
                            Наша миссия
                        </h2>
                        <Link
                            href={'#'}
                            className="border-[#FFAEAD]  border-[5px] rounded-full p-2 flex items-center justify-center"
                        >
                            <Image
                                src={ArrowTopRightIcon}
                                alt="arrow_top"
                                width={20}
                                height={20}
                            ></Image>
                        </Link>
                    </div>
                    <p className="text-[28px] font-gilroy leading-tight mb-4">
                        Мы в{' '}
                        <span className="text-[#9CC8FC]">
                            &quot;Med-Pro&quot;
                        </span>{' '}
                        даем доступ к качественной медицинской помощи в любое
                        время и в любом месте
                    </p>
                    <p className="text-[24px] font-gilroy leading-tight">
                        Мы предлагаем удобные онлайн консультации с
                        профессионалами, обеспечивая клиентам качественное
                        медицинское обслуживание удаленно.
                    </p>
                </Block>
            </BlockCollection>
        </section>
    );
};

export default OurMission;
