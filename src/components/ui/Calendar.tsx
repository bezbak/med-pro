import Header from '@/app/Components/Header';
import React, { useState } from 'react';

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  const handleDateClick = (date: number) => {
    setSelectedDate(date);
  };

  return (
    <div className="calendar">
        <Header/>
      <h2 className="text-xl mb-4">Выбрать дату</h2>
      <div className="grid grid-cols-7 gap-2">
        {[...Array(31)].map((_, i) => (
          <button
            key={i}
            onClick={() => handleDateClick(i + 1)}
            className={`p-2 rounded ${selectedDate === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
