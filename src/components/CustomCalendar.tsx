'use client'
import React, { useState } from 'react';
import Calendar from './ui/Calendar';

const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

const CustomCalendar: React.FC = () => {
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const renderCalendarDates = () => {
    const dates = [];
    
    // Add previous month's dates
    for (let i = 0; i < firstDay - 1; i++) {
      dates.push(<div key={`empty-${i}`} className="date empty"></div>);
    }

    // Add current month's dates
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentYear, currentMonth, i);
      dates.push(
        <div
          key={i}
          className={`date ${selectedDate?.getDate() === i && selectedDate?.getMonth() === currentMonth && selectedDate?.getFullYear() === currentYear ? 'selected' : ''}`}
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

  const prevMonth = () => {
    setCurrentMonth(prev => prev === 0 ? 11 : prev - 1);
    if (currentMonth === 0) {
      setCurrentYear(prev => prev - 1);
    }
  };

  const nextMonth = () => {
    setCurrentMonth(prev => prev === 11 ? 0 : prev + 1);
    if (currentMonth === 11) {
      setCurrentYear(prev => prev + 1);
    }
  };

  return (
  <div className="rounded-[30px] px-10 py-5 bg-white flex justify-center flex-col">
      <p className="text-[34px] font-bold">Выбрать дату</p>
      <Calendar/>
    </div>
    
  );
};

export default CustomCalendar;
