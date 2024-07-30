// import Testimonial from './Components/Testimonial';
import Header from './Components/Header';
import React, { Suspense } from "react";
import VideoSection from "./components/VideoSection";
import Features from "./components/Features";
import ImageBanner from "./components/ImageBanner";
import ArrowRightIcon from "@/assets/home/ArrowRightIcon.svg";
import ArrowTopRightIcon from "@/assets/home/ArrowTopRightIcon.svg";
import {
  CallIcon,
  InstagramIcon,
  TelegramIcon,
  WhatsappIcon,
} from "@/assets/home/socialIcons";
import Block from "@/components/ui/Block";
import BlockCollection from "@/components/ui/BlockCollection";
import { doctors, infoBlock, testimonials, featuresData, questions } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
// import 'swiper/css';
// import 'swiper/css/bundle';

import DoctorsSlider from "@/components/ui/DoctorsSlider";
import Loading from "@/components/ui/Loading";
import { Input, TextArea } from "@/components/ui/Input";
import Accordion from "@/components/ui/Accordion";

export default function Home() {
  console.log(ArrowRightIcon);

  return (
    <main className="*:mt-16 w-custom-1300 font-gilroy">
      <section id="hero">
      <Header />
        <BlockCollection className="*:min-h-[400px] *:xl:min-h-[530px]">
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
                  {doctor.title}
                  {/* <Image src={ArrowRightIcon} alt='arrow_rigth'></Image> */}
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
                  <Image src={ArrowTopRightIcon} alt="arrow_top"></Image>
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
          <Block className="px-16 py-7 font-gilroy !bg-[#A7CBB6] text-white w-1/3">
            <div className="text-[95px] leading-tight font-semibold">40К +</div>
            <p className="text-[22px] font-gilroy leading-tight mb-1">
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
              <h2 className="text-[40px] leading-tight font-gilroy">
                Наша миссия
              </h2>
              <Link
                href={"#"}
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
              Мы в <span className="text-[#9CC8FC]">&quot;Med-Pro&quot;</span> даем доступ
              к качественной медицинской помощи в любое время и в любом месте
            </p>
            <p className="text-[24px] font-gilroy leading-tight">
              Мы предлагаем удобные онлайн консультации с профессионалами,
              обеспечивая клиентам качественное медицинское обслуживание
              удаленно.
            </p>
          </Block>
        </BlockCollection>
      </section>
      <section id="info">
        <BlockCollection className="*:min-h-[400px] *:xl:min-h-[570px]">
          <Block className="w-3/5 bg-info-bg text-white p-8 relative bg-cover bg-no-repeat">
            <h2 className="text-[36px] leading-tight font-gilroy">
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
      <div className="container mx-auto  bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            {/* <Testimonial testimonials={testimonials} /> */}
          </div>
          <div className="w-full flex justify-center items-center mb-12">
            <VideoSection
              videoUrl="/woman.png"
              description="Видеоотзыв от Светланы"
            />
          </div>
        </div>
        <div className="mb-12">
          <Features features={featuresData} />
        </div>
        <div className="mt-12">
          <ImageBanner altText="Image description" />
        </div>
      </div>


      <section>
        <BlockCollection>
          <Block className="!bg-[#9CC8FC] w-full pt-9 pb-8 text-white">
            <div className="mb-7 px-9">
              <div className="flex items-center justify-between mb-7">
                <h2 className="text-[44px] leading-tight font-semibold">
                  Узнайте о наших врачах
                </h2>
                <Link
                  href={"#"}
                  className="border-[#FFAEAD] bg-white border-[5px] rounded-full p-2 flex items-center justify-center"
                >
                  <Image
                    src={ArrowTopRightIcon}
                    alt="arrow_top"
                    width={20}
                    height={20}
                  ></Image>
                </Link>
              </div>
              <h3 className="text-[36px] leading-tight">
                <span className="font-semibold">Med-Pro </span>- доступ к
                качественной медицине онлайн без очередей.
              </h3>
            </div>
            <Suspense fallback={<Loading />}>
              <DoctorsSlider doctors={doctors} />
            </Suspense>
          </Block>
        </BlockCollection>
      </section>
      <section>
        <BlockCollection className="*:min-h-[600px] *:xl:min-h-[700px]">
          <Block className="w-1/2 bg-feedback-bg bg-cover bg-center bg-no-repeat"></Block>
          <Block className="w-1/2 px-12 py-14">
            <h2 className="text-[36px] leading-tight font-semibold mb-[14px]">
              Оставьте свои данные и мы с вами{" "}
              <span className="text-[#9CC8FC]">свяжемся</span>
            </h2>
            <p className="text-[20px] leading-tight mb-[34px]">
              Если у вас есть вопросчы, предложения или вы нуждетесь в помощь то
              свяжитесь с нами. Мы будем рады вам помочь
            </p>
            <form className="flex flex-col gap-8">
              <div className="flex flex-col gap-5">
                <Input placeholder="Ваше имя" />
                <Input placeholder="Ваш e-mail " />
                <TextArea
                  placeholder="Ваше cообщение"
                  className="max-h-[120px] min-h-[120px]"
                />
              </div>
              <button className="bg-[#9CC8FC] py-6 rounded-3xl text-white text-[22px]">
                Отправить
              </button>
            </form>
          </Block>
        </BlockCollection>
      </section>
      <section>
        <BlockCollection className="*:min-h-[600px] *:xl:min-h-[700px]">
          <Block className="w-2/3 p-8 xl:p-16 ">
            <h2 className="text-[40px] leading-tight font-semibold mb-5">Как записаться на консутьтацию</h2>
            <div className="flex flex-col gap-8">
            {questions.map(el=>(
              <Accordion key={el.id} question={el}/>
            ))}
            </div>
          </Block>
          <Block className="w-1/3 bg-questions-bg bg-cover bg-no-repeat bg-center">

          </Block>
        </BlockCollection>
      </section>
    </main>
  );
}
