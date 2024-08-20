'use client';
import React, { useState } from 'react';

const monthNames = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

const Calendar: React.FC = () => {
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const renderCalendarDates = () => {
    const dates = [];

    for (let i = 0; i < firstDay - 1; i++) {
      dates.push(<div key={`empty-${i}`} className="date empty"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentYear, currentMonth, i);
      dates.push(
        <div
          key={i}
          className={`date ${
            selectedDate?.getDate() === i &&
            selectedDate?.getMonth() === currentMonth &&
            selectedDate?.getFullYear() === currentYear
              ? 'selected'
              : ''
          }`}
          onClick={() => selectDate(date)}
        >
          {i}
        </div>
      );
    }

    return dates;
  };

  const selectDate = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div className="">
      <div className="flex items center gap-[44px] mb-[18px]">
        <button
          className="text-[32px] font-bold"
          onClick={() => setCurrentMonth(currentMonth - 1)}
        >{`${monthNames[currentMonth]}`}</button>
        <button
          className="text-[32px] font-light"
          onClick={() => setCurrentMonth(currentMonth + 1)}
        >{`${monthNames[currentMonth + 1]}`}</button>
      </div>
      <div className="calendar-days">
        <div className="day">пн</div>
        <div className="day">вт</div>
        <div className="day">ср</div>
        <div className="day">чт</div>
        <div className="day">пт</div>
        <div className="day">сб</div>
        <div className="day">вс</div>
      </div>
      <div className="calendar-dates">{renderCalendarDates()}</div>
    </div>
  );
};

export default Calendar;
