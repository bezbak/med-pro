'use client'
import React, { useEffect, useState } from 'react';
import { PatientData } from '@/types/types';
import axios from 'axios';
import { BASE_URL } from '@/lib/utils';
import { useParams } from 'next/navigation';
import { parseISO, format } from 'date-fns';

const Schedule: React.FC = () => {
    const { id } = useParams(); // Получаем параметр 'id' из URL
    const [patientData, setPatientData] = useState<PatientData | null>(null);
    const [consuleType, setConsuleType] = useState<string | null>(null);
    const [date, setDate] = useState<string | null>(null);

    const data_types = {
        'chat': 'Чат консультация',
        'video': 'Видеоконсультация',
        'audio': 'Аудио консультация',
    } as const
    useEffect(() => {
        const accessToken = localStorage.getItem("access_token");

        axios.get(`${BASE_URL}/api/v1/patients/${id}`, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then((response) => {
                setPatientData(response.data);
            })
            .catch((error) => {
                console.error('Ошибка при получении данных:', error);
            });
    }, []);
    if (!patientData) {
        return <div>Загрузка данных...</div>;
    }
    return (
        <section id='doctorList'>
            <div className="w-full container mx-auto mt-[36px] font-gilroy">
                <h2 className="text-xl font-semibold mb-6">Ваше расписание на эту неделю</h2>
                {
                    patientData.consultations.map((cons) => (
                        <div className="flex items-center justify-between my-4">
                            <div className="flex items-center rounded bg-[#A7CBB6] p-2 gap-2 mr-4 w-full">
                                <div className="bg-lightBlue text-white p-2">{data_types[cons.consul_type as keyof typeof data_types]}</div>
                                <div className='text-white'>{cons.date}-{cons.time}</div>
                            </div>
                            <div className="bg-[#FFAEAD] p-4 text-white rounded w-full">{cons.doctor.user.last_name} {cons.doctor.user.first_name}</div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};
export default Schedule;