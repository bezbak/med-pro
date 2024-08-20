import Image from 'next/image';
import Button from './ui/Button';
import { FooterInput } from './ui/Input';
import logo from '@/assets/images/home/logo_footer.svg';
import { InstagramIcon, TelegramIcon, WhatsappIcon, YoutubeIcon } from '@/assets/images/home/socialIcons';
import ttlogo from '@/assets/images/TTlogo.svg'

const Footer = () => {
  return (
    <footer className="bg-[#22242A] mt-8">
      <div className="container mx-auto pt-[65px] w-custom-1300 pb-[32px] flex gap-32 items-center justify-between">
        <div className="h-[677px] w-[392px] bg-[#9CC8FC] rounded-2xl px-6 py-8 flex flex-col items-start justify-between">
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
              <p className="mb-6">Инфо</p>
              <p>Акции</p>
              <p>Статистика</p>
              <p>Контакты</p>
              <p>Соц сети</p>
            </div>
            <div>
              <p className="mb-6">О нас</p>
              <p>Наша клиника</p>
              <p>Миссия</p>
              <p>Доктора</p>
              <p>Наши партнеры</p>
            </div>
            <div>
              <Image src={logo} alt="logo" width={80} height={80} />
            </div>
          </div>
          <div className="first-line:text-[#FFAEAD]">
            <p className="mb-6">Контакты</p>
            <p>+996 (990) 090-086</p>
            <p>Medpro@gmail.com</p>
            <p>Кыргызстан, г.Ош, улица Баялинова 180/А</p>
          </div>
          <div className="text-[#FFAEAD]">
            <p className="mb-3">Подпишитесь на нас</p>
            <form className='relative'>
              <input
                type="text"
                placeholder="E-mail"
                className=" w-full rounded-xl pl-5 py-[14px] pr-6 placeholder:text-[#808080] bg-transparent border text-white"
              />
              <button type="submit" className='absolute right-0 px-6 top-[20%] border-l h-[60%]'> &#62; </button>
            </form>
          </div>
          <div className='flex items-end justify-between'>
            <div className='flex items-center gap-3'>
                <div className='w-[50px] h-[50px] border border-[#FFFFFF12] rounded-full flex items-center justify-center'><WhatsappIcon/></div>
                <div className='w-[50px] h-[50px] border border-[#FFFFFF12] rounded-full flex items-center justify-center'><TelegramIcon/></div>
                <div className='w-[50px] h-[50px] border border-[#FFFFFF12] rounded-full flex items-center justify-center'><InstagramIcon/></div>
                <div className='w-[50px] h-[50px] border border-[#FFFFFF12] rounded-full flex items-center justify-center'><YoutubeIcon/></div>
            </div>
            <div className='text-[10px]'>&#169; 2024 — <span className='text-[#9CC8FC]'>Политика конфидициальности</span></div>
          </div>
        </div>
      </div>
      <div className='max-w-[510px] mx-auto text-white flex gap-3 px-5 py-6 rounded-xl bg-[#7153FF] items-center justify-center text-[20px]'><Image src={ttlogo} alt='TTlogo' width={28} height={28}/> Разработано компанией Tommorow-Techs ✨</div>
    </footer>
  );
};

export default Footer;
