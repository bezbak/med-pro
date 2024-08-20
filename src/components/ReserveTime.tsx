import { reserveData } from '@/data/data';
import { Clock } from 'lucide-react';
import { ReactNode } from 'react';

type Props = {};

const ReserveTime = (props: Props) => {
  return (
    <>
    <div className="px-10 py-5 rounded-[30px] bg-white">
        <p className='mb-[26px] text-[34px] font-bold'>Выберите удобное время</p>
      <div className="flex items-center gap-2 text-2xl font-bold mb-[16px]">
        <Clock width={42} height={42} className="fill-blue-300 text-white" />{' '}
        Город {reserveData.city}
      </div>
      <div className="flex flex-wrap gap-[10px]">
        {reserveData.time.map((el) => (
          <ReserveTimeButton key={`reserve_time${el}`} status={el.reserved}>
            {el.time}
          </ReserveTimeButton>
        ))}
      </div>
    </div>
    <div className='flex items-center justify-between'>
        <div className='flex items-center gap-1'><div className='w-[30px] h-[30px] rounded-full bg-red-200'></div>Занято</div>
        <div className='flex items-center gap-1'><div className='w-[30px] h-[30px] rounded-full bg-green-300'></div>Свободно</div>
        <div className='flex items-center gap-1'><div className='w-[30px] h-[30px] rounded-full bg-gray-300'></div>Нерабочее время</div>
    </div>
    </>
  );
};

const ReserveTimeButton = ({
  status,
  children,
}: {
  status?: boolean;
  children: ReactNode;
}) => {
  const btnColor = () => {
    switch (status) {
      case true:
        return 'bg-red-200';
      case false:
        return 'bg-green-300';
      default:
        return 'bg-gray-300';
    }
  };
  return (
    <button className={`rounded-full px-[34px] py-[10px] ${btnColor()}`}>
      {children}
    </button>
  );
};

export default ReserveTime;
