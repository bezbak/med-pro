import React from 'react';
import Image from 'next/image';
import { employees } from '@/data/aboutData';
import { sponsors } from '@/data/aboutData';





import Advertisement from '../doctors/advertisement';




const AboutUs: React.FC = () => {
  
  return (
    <section id='About'>
      <div className="w-full container mx-auto mt-[36px] font-gilroy">
        <div  className="   bg-white pt-4 mt-2 rounded-3xl font-gilroy h-custom-204">
        <h1 className="text-4xl font-bold text-left ml-[32px]   mt-[32px]">О нас</h1>
        <p className="text-left text-[20px]  h-[92px] ml-[32px]  mb-[32px]">
          В <b className="text-l font-gilroy text-lightBlue">Med-Pro2</b> мы стремимся к тому, чтобы каждый человек имел доступ к качественной медицинской помощи независимо от своего местоположения или времени суток. Наша миссия заключается в предоставлении удобного и профессионального онлайн сервиса медицинских консультаций, позволяющего нашим клиентам получать квалифицированное медицинское обслуживание на расстоянии.
        </p>
        </div>
        <div className="space-y-6 mt-[36px]">
          {employees.map((employee) => (
            <div key={employee.id} className="flex flex-col lg:flex-row overflow-hidden space-y-4 lg:space-y-0 lg:space-x-6">
              <div className="flex-shrink-0">
                <Image src={employee.image} alt={employee.name} width={640} height={470} className="rounded-3xl" />
              </div>
              <div className="flex flex-col justify-center bg-white shadow-lg text-left w-full lg:w-auto h-auto rounded-3xl p-4">
                <h3 className="text-3xl font-gilroy-700  px-6 py-8">{employee.name}</h3>
                <p className="text-lightBlue text-2xl font-gilroy-700 pl-6 ">{employee.position}</p>
                <p className="font-gilroy text-3xl mt-4 text-center pl-4">{employee.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className=' bg-Green rounded-3xl h-custom-774 mt-8 '>
          <div className="mt-16">
            <h2 className="text-4xl text-white font-bold text-left pl-10  pt-10 m-8 ">Наши партнёры</h2>
            <div>
              <div className="p-6 pl-16 gap-6">
                <div className="grid grid-cols-4 gap-6">
                  {sponsors.slice(0, 8).map((sponsor) => (
                    <div key={sponsor.id} className="bg-white rounded-3xl">
                      <Image src={sponsor.image} alt={sponsor.name} width={290} height={290} className="m-auto p-4" />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="  ">
         
          <Advertisement />
        </div> 
      </div>

    </section>
  );
};
export default AboutUs;
