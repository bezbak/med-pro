'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '@/lib/utils'; // Обратите внимание на правильный импорт BASE_URL

const DoctorConsultations: React.FC = () => {
    const [consultations, setConsultations] = useState<any[]>([]); // Массив для хранения данных консультаций
    const [loading, setLoading] = useState<boolean>(true); // Состояние для загрузки

    useEffect(() => {
        const accessToken = localStorage.getItem("access_token");

        axios.get(`${BASE_URL}/api/v1/consultations?doctor=1`, {
            headers: { "Authorization": `Bearer ${accessToken}` } // Передаем токен авторизации
        })
            .then((response) => {
                setConsultations(response.data); // Сохраняем данные консультаций
                console.log(response.data);
                
                setLoading(false); // Останавливаем индикатор загрузки
            })
            .catch((error) => {
                console.error('Ошибка при получении данных:', error);
                setLoading(false); // В случае ошибки также останавливаем индикатор загрузки
            });
    }, []);

    if (loading) {
        return <div>Загрузка данных...</div>;
    }

    return (
        <section id="doctorConsultations">
            <div className="w-full container mx-auto mt-[36px] font-gilroy">
                <h2 className="text-xl font-semibold mb-6">Консультации для доктора</h2>
                {consultations.length === 0 ? (
                    <p>У доктора нет записанных консультаций.</p>
                ) : (
                    consultations.map((cons) => (
                        <div key={cons.id} className="flex items-center justify-between my-4">
                            <div className="flex items-center rounded bg-[#A7CBB6] p-2 gap-2 mr-4 w-full">
                                <div className="bg-lightBlue text-white p-2">
                                    {cons.consul_type === 'chat' && 'Чат консультация'}
                                    {cons.consul_type === 'video' && 'Видеоконсультация'}
                                    {cons.consul_type === 'audio' && 'Аудио консультация'}
                                </div>
                                <div className='text-white'>
                                    {cons.date} - {cons.time}
                                </div>
                            </div>
                            <div className="bg-[#FFAEAD] p-4 text-white rounded w-full">
                                Пациент: {cons.patient.user.first_name} {cons.patient.user.last_name}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
};

export default DoctorConsultations;
