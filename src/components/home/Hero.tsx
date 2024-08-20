import {
    CallIcon,
    InstagramIcon,
    TelegramIcon,
    WhatsappIcon,
  } from "@/assets/images/home/socialIcons";
import BlockCollection from "../ui/BlockCollection";
import Block from "../ui/Block";
import { doctors } from "@/data/data";
import Link from "next/link";
import Image from "next/image";
import ArrowRightIcon from '@/assets/images/home/ArrowRightIcon.svg'
import ArrowTopRightIcon from '@/assets/images/home/ArrowTopRightIcon.svg'

const Hero = () => {
    return (
        <section id="hero">
            <BlockCollection className="*:min-h-[400px] *:xl:min-h-[530px]">
                <Block className="py-[30px] lg:py-[60px] xl:py-[75px] px-[20px] lg:px-[40px] xl:px-[56px] w-1/2">
                    <h1 className="text-[#1B1616] font-semibold text-[22px] lg:text-[26px] xl:text-[30px] 2xl:text-[34px] mb-2 leading-tight">
                        Иновационный способ заботы о себе и своем здоровее{' '}
                    </h1>
                    <h2 className="text-[#A7CBB6] text-[22px] lg:text-[26px] xl:text-[30px] 2xl:text-[34px] mb-8 leading-tight">
                        Ваше здоровее, наш приоритет
                    </h2>
                    <div className="flex gap-[6px] items-center flex-wrap mb-12">
                        {doctors.map((doctor) => (
                            <Link
                                key={`dortor_${doctor.id}`}
                                href={'#'}
                                className="border border-black rounded-full px-4 py-2 lg:py-3 xl:py-4 flex gap-[7px] items-center"
                            >
                                {doctor.title}
                                <Image src={ArrowRightIcon} width={20} height={20} alt='arrow_rigth'></Image>
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 lg:gap-7 text-transparent">
                        <Link
                            href={'tel:+996555555555'}
                            target="_blank"
                            className="text-white rounded-full bg-[#9CC8FC] py-3 px-5 flex items-center gap-2 justify-center"
                        >
                            Свяжитесь с нами <CallIcon />
                        </Link>
                        <div className="flex items-center gap-3">
                            <Link
                                href={'https://www.instagram.com/kaktus_media/'}
                                target="_blank"
                                className="w-11 h-11 bg-[#FFAEAD] rounded-full flex items-center justify-center"
                            >
                                <InstagramIcon />
                            </Link>
                            <Link
                                href={'https://wa.me/996555555555'}
                                target="_blank"
                                className="w-11 h-11 bg-[#FFAEAD] rounded-full flex items-center justify-center"
                            >
                                <WhatsappIcon />
                            </Link>
                            <Link
                                href={'https://t.me/pavel'}
                                target="_blank"
                                className="w-11 h-11 bg-[#FFAEAD] rounded-full flex items-center justify-center"
                            >
                                <TelegramIcon />
                            </Link>
                        </div>
                    </div>
                </Block>
                <Block className="w-1/2 bg-hero-bg relative bg-cover bg-no-repeat">
                    <div className="px-4 pt-5 pb-11 bg-[#FFFFFF40] absolute bottom-10 right-10 backdrop-blur-md rounded-3xl w-[200px] h-[224px]">
                        <div className="flex items-start justify-between mb-7">
                            <p className="px-4 py-1 bg-[#FFAEAD] rounded-full text-[14px] text-white">
                                Акция
                            </p>
                            <div className="bg-white p-[10px] rounded-full">
                                <Image
                                    height={12}
                                    width={12}
                                    src={ArrowTopRightIcon}
                                    alt="arrow_top"
                                ></Image>
                            </div>
                        </div>
                        <p className="text-sm text-white mb-4">
                            Полное медицинское обследование
                        </p>
                        <p className="text-sm text-white">
                            Получи <span className="text-[#FFAEAD]">50%</span> с
                            14-апреля по 4марта 2024-года
                        </p>
                    </div>
                </Block>
            </BlockCollection>
        </section>
    );
};

export default Hero;
