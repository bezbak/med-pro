"use client";

import { useRouter } from 'next/router';
import { doctors } from '@/data/doctorData'; // Импортируйте массив данных о врачах
import DoctorInfo from '@/components/DoctorInfo'; // Ваш компонент DoctorInfo

const DoctorPage = () => {
  const router = useRouter();
  const { id } = router.query; // Получаем параметр id из URL

  // Найдём врача по id
  const doctorData = doctors.find((doctor) => doctor.id === Number(id));

  if (!doctorData) {
    return <p>Врач не найден</p>;
  }

  // Передаем данные о враче в компонент DoctorInfo
  return <DoctorInfo doctorData={doctorData} />;
};

export default DoctorPage;
