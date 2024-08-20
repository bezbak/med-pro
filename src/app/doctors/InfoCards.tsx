"use client";

import React from 'react';
import Image from 'next/image';
import { doctorData, DoctorDetail } from '@/data/doctorData';

interface InfoCardsProps {
  doctorData: DoctorDetail;
}

const InfoCard: React.FC<{ title: string, content: string, link: string, icon: string }> = ({ title, content, link, icon }) => {
  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <div className="w-[640px] rounded-3xl shadow-md flex flex-col bg-white">
      <div className="h-[372px] w-[544px] p-[20px] pl-[48px]">
        <p className="text-black-700 text-[32px] pt-[18px] w-[544px] h-[41px] mb-[25px]">{title}</p>
        <p className="text-gray-500 w-[544px] h-[196px] text-[24px] line-clamp-5 pt-[6px]">{content}</p>
      </div>
      <div className="flex items-center pl-[48px] mb-[25px]">
        <button
          onClick={handleClick}
          className="font-gilroy-700 w-[439px] h-[54px] bg-lightBlue text-white text-[18px] pl-[20px]  rounded-2xl flex items-center justify-between"
        >
          Перейти в профессиональный сайт врача
          <Image src={icon} alt="Icon" width={30} height={30} className="ml-[8px] mr-[20px]" />
        </button>
      </div>
    </div>
  );
};

interface InfoCardsProps {
  doctorData: {
    education: string;
    treatmentApproach: string;
    workExperience: string;
    skills: string;
  };
}

const InfoCards: React.FC<InfoCardsProps> = ({ doctorData }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-x-6 gap-y-6">
      <InfoCard title="Образование и квалификации" content={doctorData.education} link="https://example.com/education" icon="/doctor/site.png" />
      <InfoCard title="Подход к лечению" content={doctorData.treatmentApproach} link="https://example.com/treatment" icon="/doctor/site.png" />
      <InfoCard title="Опыт работы" content={doctorData.workExperience} link="https://example.com/experience" icon="/doctor/site.png" />
      <InfoCard title="Навыки и опыт" content={doctorData.skills} link="https://example.com/skills" icon="/doctor/site.png" />
    </div>
  );
};

export default InfoCards;
