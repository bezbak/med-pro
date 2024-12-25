import Image from 'next/image';
import { FooterInput } from './ui/Input';
import logo from '@/assets/images/home/logo_footer.svg';
import {
  InstagramIcon,
  TelegramIcon,
  WhatsappIcon,
  YoutubeIcon,
} from '@/assets/images/home/socialIcons';
import ttlogo from '@/assets/images/TTlogo.svg';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#22242A] mt-8">
      <div className="container mx-auto pt-[65px]  pb-[32px] flex gap-32 items-center justify-between">
        <div className="h-[677px] w-[392px] bg-[#9CC8FC] rounded-2xl px-6 py-8 flex flex-col items-start justify-between hidden md:block">
          <div className="leading-tight">
            <p>Обратная связь</p>
            <div className="text-[28px] mt-5 text-[#060606]">
              Ищете индивидуальную поддержку?{' '}
              <span className="text-[#FFFFFF]">
                Закажите звонок от нашей команды
              </span>
            </div>
            <div>
              <form className="mt-6 space-y-5">
                <FooterInput placeholder="Самат" title="Ваше имя" />
                <FooterInput placeholder="+996555222222" title="Тел. номер" />
                <button
                  type="submit"
                  className="mt-6 py-[10px] px-8 rounded-full text-white bg-[#FFAEAD]"
                >
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
          <p className="text-[10px]">Privacy</p>
        </div>
        <div className="flex-1 space-y-16 text-[14px] text-white">
          <div className="grid grid-cols-3 gap-6 *:first-line:text-[#FFAEAD]">
            <div>
              <p className="mb-6">Инфо</p><br/>
              <Link href={"/promotion"}>Акции</Link ><br/>
              <Link href={"/hero"}>Статистика</Link ><br/>
              <Link href={"/hero"}>Контакты</Link ><br/>
              <Link href={"/hero"}>Соц сети</Link >
            </div>
            <div>
              <p className="mb-6">
                <Link href="/about">О нас</Link>
              </p>
              <p>
                <Link href="/clinic">Наша клиника</Link>
              </p>
              <p>
                <Link href="/mission">Миссия</Link>
              </p>
              <p>
                <Link href="/doctors">Доктора</Link>
              </p>
              <p>
                <Link href="/partners">Наши партнеры</Link>
              </p>
            </div>
            <div>
              <Image src={logo} alt="logo" width={80} height={80} />
            </div>
          </div>
          <div className="first-line:text-[#FFAEAD]">
            <p className="mb-6">Контакты</p><br/>
            <Link href="tel:+996990090086">+996 (990) 090-086</Link><br/>
            <Link href="mailto:Medpro@gmail.com">Medpro@gmail.com</Link><br/>
            <Link href="https://maps.google.com/?q=Кыргызстан, г.Ош, улица Баялинова 180/А" target="_blank">
              Кыргызстан, г.Ош, улица Баялинова 180/А
            </Link>
          </div>
          <div className="text-[#FFAEAD]">
            <p className="mb-3">Подпишитесь на нас</p>
            <form className="relative">
              <input
                type="text"
                placeholder="E-mail"
                className=" w-full rounded-xl pl-5 py-[14px] pr-6 placeholder:text-[#808080] bg-transparent border text-white"
              />
              <button
                type="submit"
                className="absolute right-0 px-6 top-[20%] border-l h-[60%]"
              >
                {' '}
                &#62;{' '}
              </button>
            </form>
          </div>
          <div className="flex items-end justify-between">
            <div className="flex items-center gap-3">
              <Link
                href={'https://wa.me/996555555555'}
                className="w-[50px] h-[50px] border border-[#FFFFFF12] rounded-full flex items-center justify-center">
                <WhatsappIcon />
              </Link>
              <Link
                href={'https://t.me/pavel'}
                className="w-[50px] h-[50px] border border-[#FFFFFF12] rounded-full flex items-center justify-center">
                <TelegramIcon />
              </Link>
              <Link
                href={'https://www.instagram.com/kaktus_media/'}
                className="w-[50px] h-[50px] border border-[#FFFFFF12] rounded-full flex items-center justify-center">
                <InstagramIcon />
              </Link>
              <Link
                href={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
                className="w-[50px] h-[50px] border border-[#FFFFFF12] rounded-full flex items-center justify-center">
                <YoutubeIcon />
              </Link>
            </div>
          </div>
            <div className="text-[10px]">
              &#169; 2024 —{' '}
              <span className="text-[#9CC8FC]">Политика конфидициальности</span>
            </div>
        </div>
      </div>
      <div className="max-w-[510px] mx-auto text-white flex gap-3 px-5 py-6 rounded-xl bg-[#7153FF] items-center justify-center text-[12px] md:text-[20px] sm:px-3 sm:py-4 sm:gap-2 max-sm:mx-[10px] max-sm:pb-[20px] sm:m-[20px]">
        <Image src={ttlogo} alt="TTlogo" width={28} height={28} /> Разработано
        компанией Tommorow-Techs ✨
      </div>
    </footer>
  );
};

export default Footer;
