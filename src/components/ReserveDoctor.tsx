import Image from 'next/image';
import React from 'react';
import ReserveForm from './ReserveForm';

type Props = {};

const ReserveDoctor = (props: Props) => {
  return (
    <div>
      <p className="text-[38px] font-bold mb-[32px]">Информация об обращении</p>
      <div className="flex items-center gap-[14px] mb-[36px]">
        <Image
          src={'/doctor/doc.png'}
          width={110}
          height={110}
          className="rounded-full w-[110px] h-[110px] object-cover"
          alt="doctor"
        />
        <div className="flex flex-col gap-[10px]">
          <p className="text-[32px] font-bold">Dr. Ганижанова Айым</p>
          <p className="text-[24px] text-lightBlue">Кардиолог</p>
        </div>
      </div>
      <ReserveForm/>
    </div>
  );
};

export default ReserveDoctor;
