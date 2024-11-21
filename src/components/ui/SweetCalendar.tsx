'use client'
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ru";
dayjs.locale("ru");

type WorkTime = {
    [date: string]: {
        busy_slots: string[]; // Массив строк с временем, например: ["10:30", "14:00"]
    };
};

const SweetCalendar = ({ schedule, work_time }: { schedule: WorkTime, work_time: string }) => {
    const [currentMonth, setCurrentMonth] = useState(dayjs());
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [timeSlots, setTimeSlots] = useState<string[]>([]);

    const daysOfWeek = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
    const today = dayjs();

    // Генерация временных слотов через useEffect
    useEffect(() => {
        const [start, end] = work_time.split('-').map((t) => {
            const [hours, minutes] = t.split(':').map(Number);
            return new Date().setHours(hours, minutes, 0, 0);
        });

        const slots: string[] = [];
        for (let time = start; time <= end; time += 30 * 60 * 1000) {
            const date = new Date(time);
            slots.push(
                `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
            );
        }

        setTimeSlots(slots); // Обновляем список временных слотов
    }, [work_time]);

    const getDaysInMonth = (month: dayjs.Dayjs) => {
        const startOfMonth = month.startOf("month");
        const days = Array.from({ length: month.daysInMonth() }, (_, i) =>
            startOfMonth.add(i, "day")
        );
        return days;
    };

    const handleMonthChange = (offset: number) => {
        const newMonth = currentMonth.add(offset, "month");
        if (
            newMonth.month() === today.month() ||
            newMonth.month() === today.add(1, "month").month()
        ) {
            setCurrentMonth(newMonth);
        }
    };

    // Получаем занятые слоты для выбранной даты
    const getBusySlotsForDate = (date: string) => {
        return schedule[date]?.busy_slots || [];
    };

    return (
        <div className=" w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Выбрать дату</h2>
            <div className="bg-white shadow-md rounded-lg p-4 my-2">

                <div className="flex justify-between items-center mb-4">
                    <button
                        onClick={() => handleMonthChange(-1)}
                        className={`text-lg ${currentMonth.month() === today.month() ? "font-bold" : "font-normal"
                            }`}
                        disabled={currentMonth.month() === today.month()}
                    >
                        {today.format("MMMM").charAt(0).toUpperCase() +
                            today.format("MMMM").slice(1)}
                    </button>
                    <button
                        onClick={() => handleMonthChange(1)}
                        className={`text-lg ${currentMonth.month() === today.add(1, "month").month()
                            ? "font-bold"
                            : "font-normal"
                            }`}
                        disabled={currentMonth.month() === today.add(1, "month").month()}
                    >
                        {today.add(1, "month").format("MMMM").charAt(0).toUpperCase() +
                            today.add(1, "month").format("MMMM").slice(1)}
                    </button>
                </div>
                <div className="grid grid-cols-7 text-center gap-2 mb-6">
                    {daysOfWeek.map((day) => (
                        <div key={day} className="font-semibold text-gray-500">
                            {day}
                        </div>
                    ))}
                    {getDaysInMonth(currentMonth).map((date) => (
                        <button
                            key={date.toString()}
                            onClick={() => setSelectedDate(date.format("YYYY-MM-DD"))}
                            className={`py-2 rounded-full ${selectedDate === date.format("YYYY-MM-DD")
                                ? "bg-pink text-white"
                                : date.isBefore(today, "day")
                                    ? "text-gray-400 cursor-not-allowed"
                                    : "text-gray-700 hover:bg-gray-200"
                                }`}
                            disabled={date.isBefore(today, "day")}
                        >
                            {date.format("D")}
                        </button>
                    ))}
                </div>
            </div>
            {selectedDate && (
                <>
                    <div className="bg-white shadow-md rounded-lg p-4 my-2">
                        <h2 className="text-xl font-bold mb-4">Выберите удобное время</h2>
                        <div className="flex my-4 items-center gap-2">
                            <img src="/time.svg" alt="" />
                            <span className="font-bold text-xl">Город Ош</span>
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                            {timeSlots.length > 0 ? (
                                timeSlots.map((slot) => (
                                    <button
                                        key={slot}
                                        disabled={getBusySlotsForDate(selectedDate).includes(slot)}
                                        onClick={() => { getBusySlotsForDate(selectedDate).includes(slot) ? '' : setSelectedTime(slot) }}
                                        className={`py-2 rounded-lg text-white text-sm ${getBusySlotsForDate(selectedDate).includes(slot)
                                            ? "bg-red-400 cursor-not-allowed"
                                            : "bg-[#A7CBB6] hover:bg-green-600"
                                            } ${selectedTime === slot ? 'bg-green-600' : ''}`}
                                    >
                                        {slot}
                                    </button>
                                ))
                            ) : (
                                <p className="text-gray-500">Нет доступных временных слотов</p>
                            )}
                        </div>
                    </div>
                    <div className="mb-4 flex justify-between my-4 items-center center">
                        <div className="flex items-center mb-2">
                            <div className="w-4 h-4 rounded-full bg-red-400 mr-2"></div>
                            <span>Занято</span>
                        </div>
                        <div className="flex items-center mb-2">
                            <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                            <span>Свободно</span>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default SweetCalendar;
