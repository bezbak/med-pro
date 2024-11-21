'use client'
import React, { useEffect, useState } from 'react';
import { Doctor } from "@/types/types";
import { useParams } from "next/navigation";
import { BASE_URL } from "@/lib/utils";

const ConsultationForm: React.FC = () => {
  const { id } = useParams(); // Получаем параметр 'id' из URL
  const [doctor, setDoctorData] = useState<Doctor | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const [problemDescription, setProblemDescription] = useState("");
  const [preferredContact, setPreferredContact] = useState("audio");
  const [agreements, setAgreements] = useState({
    medical: false,
    personal: false,
    contract: false
  });

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/v1/doctors/${id}`);
        if (!response.ok) {
          throw new Error('Ошибка при загрузке данных');
        }
        const data: Doctor = await response.json();
        setDoctorData(data);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDoctorData();
  }, [id]);

  const handleSubmit = () => {
    // Логика для отправки формы
  };

  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4">Информация об обращении</h2>
      {
        !isLoading && doctor ? (<div className="flex items-center mb-4">
          <img className="w-12 h-12 bg-gray-300 rounded-full mr-4" src={doctor.user.profile} alt="Doctor" />
          <div>
            <h3 className="text-lg font-semibold">Dr. {doctor.user.first_name} {doctor.user.last_name}</h3>
            <p className="text-gray-500">{doctor.specialty.name}</p>
          </div>
        </div>) : <p>Загрузка данных...</p>
      }
      <textarea
        value={problemDescription}
        onChange={(e) => setProblemDescription(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        placeholder="Введите текст"
      />
      <h3 className="text-lg font-semibold mb-2">Предпочтительный способ связи</h3>
      <div className="flex gap-4 mb-4">
        {["audio", "chat", "video"].map((method) => (
          <label key={method} className="flex items-center gap-2">
            <input
              type="radio"
              name="contact"
              value={method}
              checked={preferredContact === method}
              onChange={() => setPreferredContact(method)}
            />
            {method === "audio" ? "Аудио" : method === "chat" ? "Чат" : "Видео"}
          </label>
        ))}
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Соглашения</h2>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={agreements.medical}
              onChange={() => setAgreements({ ...agreements, medical: !agreements.medical })}
            />
            Согласие на медицинское вмешательство
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={agreements.personal}
              onChange={() => setAgreements({ ...agreements, personal: !agreements.personal })}
            />
            Согласие на обработку персональных данных
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={agreements.contract}
              onChange={() => setAgreements({ ...agreements, contract: !agreements.contract })}
            />
            Договор об оказании платных медицинских услуг
          </label>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="mt-6 w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600"
      >
        Записаться
      </button>
    </div>
  );
};

export default ConsultationForm;
