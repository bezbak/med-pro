'use client'
import SweetCalendar from "@/components/ui/SweetCalendar";
import ConsultationForm from "@/components/ui/ConsultationForm";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/lib/utils";
import { useParams } from "next/navigation";

interface Schedule {
  [date: string]: {
    busy_slots: string[];
  };
}

const AppointmentPage = () => {
  const { id } = useParams(); // Получаем параметр 'id' из URL

  const work_time = "09:00-16:00";

  // Состояния с типизацией
  const [schedule, setSchedule] = useState<Schedule>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Функция для загрузки расписания
  const fetchSchedule = async () => {
    try {
      setLoading(true); // Установка состояния загрузки
      const response = await axios.get<Schedule>(
        `${BASE_URL}/api/v1/shedule/${id}/`
      );
      setSchedule(response.data); // Установка данных расписания
    } catch (err) {
      setError("Не удалось загрузить данные расписания");
      console.error(err);
    } finally {
      setLoading(false); // Загрузка завершена
    }
  };

  // Загрузка данных расписания при монтировании компонента
  useEffect(() => {
    fetchSchedule();
  }, []);

  return (
    <section id="consultation">
      <div className="w-full container mx-auto mt-[36px]">
        <div className="py-8 rounded-lg">
          <div className="max-md:flex-col-reverse flex align-middle justify-center gap-12">
            {/* Выбор даты */}
            {loading ? (
              <p>Загрузка расписания...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <SweetCalendar schedule={schedule} work_time={work_time} />
            )}

            {/* Информация об обращении */}
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentPage;
