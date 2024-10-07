'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface IReservedFormData {
  description: string;
  feedback: 'call' | 'video' | 'chat';
  acceptMediacalTerms: boolean;
  personalTerms: boolean;
  mediacalTerms: boolean;
}

const feedbackMethoods = [
  {
    id: 1,
    title: 'Видео',
    value: 'video',
  },
  {
    id: 2,
    title: 'Чат',
    value: 'chat',
  },
  {
    id: 3,
    title: 'Аудио',
    value: 'call',
  },
];

const ReserveForm = () => {
  const [feedbackValue, setFeedbackValue] = useState<string | undefined>(
    undefined
  );
  const { register, handleSubmit } = useForm();
  const onSubmit = (values: any) => {
    const data = { ...values, feedbackValue };
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p className="text-[28px] font-bold mb-[6px]">Описание проблем</p>
        <textarea
          {...register('description')}
          placeholder="Введите текст"
          className="rounded-[30px] placeholder:text-gray-600 p-[26px] w-full outline-none h-[200px] mb-[28px]"
        />
      </div>
      <div className="mb-[50px]">
        <p className="text-[24px] font-bold mb-[24px]">
          Предпочтительный способ связи
        </p>
        <div className="flex items-center gap-[22px]">
          {feedbackMethoods.map((el) => (
            <button
              key={`feedback_method_${el.id}`}
              onClick={(e) => {
                e.preventDefault();
                setFeedbackValue(el.value);
              }}
              className={`px-[18px] py-[10px] ${
                feedbackValue === el.value
                  ? 'bg-lightBlue text-white'
                  : 'bg-white'
              } rounded-[10px] text-black`}
            >
              {el.title}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[22px] mb-[130px]">
        <div className="flex items-center gap-3 text-[16px] text-gray-500">
          <input
            id="acceptMediacalTerms"
            type="checkbox"
            {...register('acceptMediacalTerms')}
          />
          <label htmlFor="acceptMediacalTerms">
            Согласие на{' '}
            <a href="#" className={'text-lightBlue underline'}>
              медицинское вмещательство
            </a>
          </label>
        </div>
        <div className="flex items-center gap-3 text-[16px] text-gray-500">
          <input
            id="personalTerms"
            type="checkbox"
            {...register('personalTerms')}
          />
          <label htmlFor="personalTerms">
            Согласие на{' '}
            <a href="#" className={'text-lightBlue underline'}>
              медицинское вмещательство
            </a>
          </label>
        </div>
        <div className="flex items-center gap-3 text-[16px] text-gray-500">
          <input
            id="mediacalTerms"
            type="checkbox"
            {...register('mediacalTerms')}
          />
          <label htmlFor="mediacalTerms">
            Согласие на{' '}
            <a href="#" className={'text-lightBlue underline'}>
              медицинское вмещательство
            </a>
          </label>
        </div>
      </div>
      <button
        className="py-[10px] px-[30px] rounded-full bg-lightBlue float-right text-white"
        type="submit"
      >
        Записаться
      </button>
    </form>
  );
};

export default ReserveForm;
