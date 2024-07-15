import React from 'react';
import Testimonial from './components/Testimonial';
import VideoSection from './components/VideoSection';
import Features from './components/Features';
import ImageBanner from './components/ImageBanner';
import { ArrowRightIcon, ArrowTopRightIcon } from "@/assets/home/arrowIcons";
import {
  CallIcon,
  InstagramIcon,
  TelegramIcon,
  WhatsappIcon,
} from "@/assets/home/socialIcons";
import Block from "@/components/ui/Block";
import BlockCollection from "@/components/ui/BlockCollection";
import { doctors, infoBlock } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const testimonials = [
    { name: 'Ganizhanov Muhammad', image: '/Ellipse1.png', text: 'Я очень рад, что у меня была возможность провести лечение в вашей клинике. Очень удобный онлайн формат. Очень доброжелательные. Всегда готовы предложить удобное время и день для посещения доктора.', rating: 4 },
    { name: 'Razhabaliev Abay', image: '/Ellipse2.png', text: 'Я очень рад, что у меня была возможность провести лечение в вашей клинике. Очень удобный онлайн формат. Очень доброжелательные. Всегда готовы предложить удобное время и день для посещения доктора.', rating: 5 },
    { name: 'Karimova Aiym', image: '/Ellipse2.png', rating: 3 },
  ];

  const featuresData = [
    {
      number: '01',
      title: 'Наши преимущества',
      heading: 'Удобный доступ к вашему благополучию',
      subtitle: 'Забота о здоровье',
      description: 'Простой способ заботиться о своем здоровье. Безопасный доступ к вашей медицинской истории через индивидуальные профили.'
    },
    {
      number: '02',
      title: 'Безопасность данных',
      heading: 'Защита ваших данных',
      subtitle: 'Современные технологии',
      description: 'Ваши данные защищены с использованием современных технологий безопасности и шифрования.'
    },
    {
      number: '03',
      title: 'Легкий доступ',
      heading: 'Доступ из любой точки мира',
      subtitle: 'Любое устройство',
      description: 'Доступ к вашим данным из любой точки мира с любого устройства в любое время.'
    },
  ];

  return (
    <div className="container mx-auto p-4 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-5">
          <Testimonial testimonials={testimonials} />
        </div>
        <div className="w-full flex justify-center items-center">
          <VideoSection videoUrl="/woman.png" description="Видеоотзыв от Светланы" />
        </div>
      </div>
      <div className="mt-8">
        <Features features={featuresData} />
      </div>
      <ImageBanner altText="Image description" />
    </div>
    <main className="*:mt-16">
      <section id="hero">
        <BlockCollection>
          <Block className="py-[30px] lg:py-[60px] xl:py-[75px] px-[20px] lg:px-[40px] xl:px-[56px] w-1/2">
            <h1 className="text-[#1B1616] font-semibold text-[22px] lg:text-[26px] xl:text-[30px] 2xl:text-[34px] mb-2 leading-tight">
              Иновационный способ заботы о себе и своем здоровее{" "}
            </h1>
            <h2 className="text-[#A7CBB6] text-[22px] lg:text-[26px] xl:text-[30px] 2xl:text-[34px] mb-8 leading-tight">
              Ваше здоровее, наш приоритет
            </h2>
            <div className="flex gap-[6px] items-center flex-wrap mb-12">
              {doctors.map((doctor) => (
                <Link
                  key={`dortor_${doctor.id}`}
                  href={"#"}
                  className="border border-black rounded-full px-4 py-2 lg:py-3 xl:py-4 flex gap-1 items-center"
                >
                  {doctor.title} <ArrowRightIcon />
                </Link>
              ))}
            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 lg:gap-7">
              <Link
                href={"tel:+996555555555"}
                target="_blank"
                className="text-white rounded-full bg-[#9CC8FC] py-3 px-5 flex items-center gap-2 justify-center"
              >
                Свяжитесь с нами <CallIcon />
              </Link>
              <div className="flex items-center gap-3">
                <Link
                  href={"https://www.instagram.com/kaktus_media/"}
                  target="_blank"
                  className="w-11 h-11 bg-[#FFAEAD] rounded-full flex items-center justify-center"
                >
                  <InstagramIcon />
                </Link>
                <Link
                  href={"https://wa.me/996555555555"}
                  target="_blank"
                  className="w-11 h-11 bg-[#FFAEAD] rounded-full flex items-center justify-center"
                >
                  <WhatsappIcon />
                </Link>
                <Link
                  href={"https://t.me/pavel"}
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
                  <ArrowTopRightIcon />
                </div>
              </div>
              <p className="text-sm text-white mb-4">
                Полное медицинское обследование
              </p>
              <p className="text-sm text-white">
                Получи <span className="text-[#FFAEAD]">50%</span> с 14-апреля
                по 4марта 2024-года
              </p>
            </div>
          </Block>
        </BlockCollection>
      </section>
      <section id="our-mission">
        <BlockCollection>
          <Block className="px-16 py-7 !bg-[#A7CBB6] text-white w-1/3">
            <div className="text-[95px] leading-tight font-semibold">40К +</div>
            <p className="text-[22px] leading-tight mb-1">
              Регулярных клиентов которые пользюуются нашими услугами{" "}
            </p>
            <div className="flex items-center justify-center *:-ml-5">
              <Image
                src={"/mission/client1.png"}
                alt="client"
                width={100}
                height={100}
              />
              <Image
                src={"/mission/client2.png"}
                alt="client"
                width={100}
                height={100}
              />
              <Image
                src={"/mission/client3.png"}
                alt="client"
                width={100}
                height={100}
              />
              <Image
                src={"/mission/client4.png"}
                alt="client"
                width={100}
                height={100}
              />
            </div>
          </Block>
          <Block className="text-[#1B1616] w-2/3 p-8">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-[40px] leading-tight font-semibold">
                Наша миссия
              </h2>
              <Link
                href={"#"}
                className="border-[#FFAEAD]  border-[5px] rounded-full p-2 flex items-center justify-center"
              >
                <ArrowTopRightIcon size={20} />
              </Link>
            </div>
            <p className="text-[28px] leading-tight mb-4">
              Мы в <span className="text-[#9CC8FC]">"Med-Pro"</span> даем доступ
              к качественной медицинской помощи в любое время и в любом месте
            </p>
            <p className="text-[24px] leading-tight">
              Мы предлагаем удобные онлайн консультации с профессионалами,
              обеспечивая клиентам качественное медицинское обслуживание
              удаленно.
            </p>
          </Block>
        </BlockCollection>
      </section>
      <section id="info">
        <BlockCollection>
          <Block className="w-3/5 bg-info-bg text-white p-8 relative bg-cover bg-no-repeat">
            <h2 className="text-[36px] leading-tight font-semibold">
              У нас работают только <br /> опытные специалисты{" "}
            </h2>
            <Link
              href={"#"}
              className="absolute bottom-9 right-11 px-8 py-4 rounded-full bg-[#9CC8FC]"
            >
              Записаться на консультацию
            </Link>
          </Block>
          <Block className="w-2/5 text-white !bg-[#FFAEAD] px-7 py-10">
            {infoBlock.map((info) => (
              <div key={`info_${info.id}`}>
                <p className="text-[90px] leading-tight font-extrabold">
                  {info.amount}
                </p>
                <p className="text-[32px] leading-tight font-extrabold">
                  {info.title}
                </p>
              </div>
            ))}
          </Block>
        </BlockCollection>
      </section>
    </main>
  );
}
