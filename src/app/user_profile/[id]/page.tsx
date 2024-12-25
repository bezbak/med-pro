'use client'
import { PatientData, Consultation, User } from '@/types/types';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '@/lib/utils';
import { useParams } from 'next/navigation';
import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';

type Props = {}

export default function Profile({ }: Props) {
    const { id } = useParams(); // Получаем параметр 'id' из URL
    const [patientData, setPatientData] = useState<PatientData | null>(null);
    const [user2, setUser] = useState<User | null>(null);
    const [consultations2, setConsultations] = useState<Consultation[] | null>(null);
    const [consuleType, setConsuleType] = useState<string | null>(null);
    const [favCount, setFavCount] = useState<number | null>(null);
    const [date, setDate] = useState<string | null>(null);
    const data_types = {
        'chat': 'Чат консультация',
        'video': 'Видеоконсультация',
        'audio': 'Аудио консультация',
    } as const

    useEffect(() => {
        const accessToken = localStorage.getItem("access_token");

        // Отправка запроса на получение данных
        axios
            .get(`${BASE_URL}/api/v1/patients/${id}`, {
                headers: {
                    "Authorization": `Bearer ${accessToken}` // Добавляем токен в заголовок
                }
            },)
            .then((response) => {
                setPatientData(response.data);

            })
            .catch((error) => {
                console.error('Ошибка при получении данных:', error);
            });
        if (accessToken) {
            axios.get(`${BASE_URL}/api/v1/favorites/?doctor=&patient=${id}`, { headers: { "Authorization": `Bearer ${accessToken}` } })
                .then((response) => {

                    setFavCount(response.data.length);
                })
                .catch((error) => {
                    console.error('Ошибка при получении данных:', error);
                });
        }
    }, [id]);
    useEffect(() => {
        if (patientData != null) {
            setConsultations(patientData.consultations)

            setUser(patientData.user)
        }
    }, [patientData])
    useEffect(() => {
        if (consultations2 != null && user != null && consultations2.length > 0) {

            const consul_type = consultations2[0].consul_type;


            setConsuleType(data_types[consul_type as keyof typeof data_types])
            // Соединяем дату и время в одну строку
            const dateTimeString = `${consultations2[0].date}T${consultations2[0].time}`;

            // Парсим строку в объект Date
            const parsedDate = parseISO(dateTimeString);

            // Форматируем дату
            setDate(format(parsedDate, "dd MMM 'в' HH:mm", { locale: ru }))
        }
    }, [user2, consultations2])

    if (!patientData) {
        return <p>Загрузка данных...</p>;
    }
    const { user, consultations } = patientData;

    return (
        <section id='doctorList'>
            <div className="w-full container mx-auto mt-[36px] font-gilroy">
                <div className="flex flex-col gap-6 p-6 w-full">
                    {/* Левая секция: Профиль */}
                    <div className="flex max-md:flex-col justify-between rounded-lg w-full gap-4">
                        <div className='flex flex-col bg-white shadow-md rounded-lg max-md:w-full w-1/2 h-full p-6 min-h-[300px]'>
                            <img
                                src={user.profile} // замените на путь к изображению
                                alt="User Profile"
                                className="w-24 h-24 rounded-full object-cover shadow"
                            />
                            <h2 className="text-xl font-semibold mt-4">{user.last_name} {user.first_name}</h2>
                            <p className="text-gray-500 mt-2">Телефон: {user.phone_number ?? 'Не добавили'}</p>
                            <p className="text-gray-500">E-mail: {user.email}</p>
                            <button className="mt-4 px-4 py-2 bg-lightBlue text-white rounded-md shadow hover:bg-lightBlue-600 transition">
                                Редактировать профиль
                            </button>
                        </div>
                        {
                            consultations && patientData.consultations.length > 0 ? (

                                <div className="bg-[#A7CBB6] border border-[#A7CBB6] text-white p-6 rounded-lg shadow-md max-md:w-full w-1/2 h-full min-h-[300px]">
                                    <h3 className="text-[32px] font-semibold">Напоминает что вы записывались на консультацию</h3>
                                    <p className="mt-2 text-[24px]">
                                        {consuleType}-{date} у доктора {consultations[0].doctor.user.first_name}
                                    </p>
                                    <Link href={`/user_profile/${id}/catalog`} className="mt-8 w-[fit-content] block px-4 py-2 bg-lightBlue text-white rounded-md shadow hover:bg-lightBlue-600 transition">
                                        Перейти в каталог
                                    </Link>
                                </div>
                            ) : (
                                <div className="bg-[#FFAEAD] border border-red-300 text-white p-6 rounded-lg shadow-md max-md:w-full w-1/2 h-full min-h-[300px]">
                                    <h3 className="text-[32px] font-semibold">Вы пока не записались на консультацию</h3>
                                    <p className="mt-2 text-[24px]">
                                        Вы пока не записались на консультацию. Запишитесь, перейдя в каталог.
                                    </p>
                                    <Link href={'/services'} className="mt-8 w-[fit-content] block px-4 py-2 bg-lightBlue text-white rounded-md shadow hover:bg-lightBlue-600 transition">
                                        Записаться на консультацию
                                    </Link>
                                </div>
                            )
                        }
                    </div>

                    {/* Правая секция: Консультация */}
                    <div className="flex-1 flex flex-col gap-6">


                        {/* Карточки */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="bg-white p-4 rounded-lg shadow-md text-center">
                                <div className='flex align-center justify-center items-center gap-2'>
                                    <svg width="40" height="40" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1.5" y="1.5" width="67" height="67" rx="33.5" fill="white" />
                                        <rect x="1.5" y="1.5" width="67" height="67" rx="33.5" stroke="#9CC8FC" strokeWidth="3" />
                                        <path d="M23.236 31.12C25.5613 31.12 27.46 31.8347 28.932 33.264C30.404 34.672 31.14 36.5067 31.14 38.768C31.14 41.0293 30.404 42.8747 28.932 44.304C27.46 45.712 25.5613 46.416 23.236 46.416C20.8893 46.416 18.98 45.712 17.508 44.304C16.036 42.8747 15.3 41.0293 15.3 38.768C15.3 37.0613 15.748 35.5573 16.644 34.256L23.748 23.6H27.94L22.82 31.12H23.236ZM23.236 42.928C24.4733 42.928 25.4867 42.5547 26.276 41.808C27.0653 41.04 27.46 40.0267 27.46 38.768C27.46 37.5093 27.0653 36.5067 26.276 35.76C25.4867 34.992 24.4733 34.608 23.236 34.608C21.9773 34.608 20.9533 34.992 20.164 35.76C19.3747 36.5067 18.98 37.5093 18.98 38.768C18.98 40.0267 19.3747 41.04 20.164 41.808C20.9533 42.5547 21.9773 42.928 23.236 42.928ZM41.5288 31.952C40.5474 32.9333 39.3101 33.424 37.8168 33.424C36.3234 33.424 35.0754 32.9333 34.0728 31.952C33.0701 30.9493 32.5688 29.7333 32.5688 28.304C32.5688 26.8747 33.0701 25.6693 34.0728 24.688C35.0754 23.6853 36.3234 23.184 37.8168 23.184C39.3101 23.184 40.5474 23.6747 41.5288 24.656C42.5314 25.6373 43.0328 26.8533 43.0328 28.304C43.0328 29.7333 42.5314 30.9493 41.5288 31.952ZM37.7848 30.608C38.4674 30.608 39.0221 30.384 39.4488 29.936C39.8754 29.488 40.0888 28.944 40.0888 28.304C40.0888 27.6427 39.8754 27.088 39.4488 26.64C39.0221 26.192 38.4674 25.968 37.7848 25.968C37.1234 25.968 36.5794 26.192 36.1528 26.64C35.7261 27.088 35.5128 27.6427 35.5128 28.304C35.5128 28.944 35.7261 29.488 36.1528 29.936C36.5794 30.384 37.1234 30.608 37.7848 30.608ZM34.4568 42.704L49.2088 26.288L50.9368 27.28L36.1848 43.728L34.4568 42.704ZM48.0568 46.384C46.5634 46.384 45.3154 45.8933 44.3128 44.912C43.3101 43.9093 42.8088 42.6933 42.8088 41.264C42.8088 39.8347 43.3101 38.6293 44.3128 37.648C45.3154 36.6453 46.5634 36.144 48.0568 36.144C49.5288 36.144 50.7661 36.6453 51.7688 37.648C52.7714 38.6293 53.2728 39.8347 53.2728 41.264C53.2728 42.6933 52.7714 43.9093 51.7688 44.912C50.7661 45.8933 49.5288 46.384 48.0568 46.384ZM48.0248 43.568C48.7074 43.568 49.2621 43.344 49.6888 42.896C50.1154 42.448 50.3288 41.904 50.3288 41.264C50.3288 40.6027 50.1154 40.048 49.6888 39.6C49.2621 39.152 48.7074 38.928 48.0248 38.928C47.3634 38.928 46.8194 39.152 46.3928 39.6C45.9661 40.048 45.7528 40.6027 45.7528 41.264C45.7528 41.904 45.9661 42.448 46.3928 42.896C46.8194 43.344 47.3634 43.568 48.0248 43.568Z" fill="#9CC8FC" />
                                    </svg>
                                    <p className="text-lg font-semibold text-gray-800">Ваша скидка</p>
                                </div>
                                <p className="text-gray-400">Общая сумма консультаций: 200</p>
                            </div>
                            <Link href={`/user_profile/${id}/bookmarks`} className="bg-white p-4 rounded-lg shadow-md text-center">
                                <div className='flex align-center justify-center items-center gap-2'>
                                    <svg width="40" height="40" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1.5" y="1.5" width="67" height="67" rx="33.5" stroke="#9CC8FC" strokeWidth="3" />
                                        <path d="M41.375 22.8125H28.625C27.7796 22.8125 26.9689 23.1088 26.3711 23.6363C25.7733 24.1637 25.4375 24.8791 25.4375 25.625V45.1323C25.4375 45.9663 26.3984 46.4339 27.0546 45.9192L34.3829 40.1715C34.7452 39.8873 35.2548 39.8873 35.6171 40.1715L42.9454 45.9192C43.6016 46.4339 44.5625 45.9663 44.5625 45.1323V25.625C44.5625 24.8791 44.2267 24.1637 43.6289 23.6363C43.0311 23.1088 42.2204 22.8125 41.375 22.8125Z" stroke="#9CC8FC" strokeWidth="3" strokeLinejoin="round" />
                                    </svg>
                                    <h4 className="text-lg font-semibold text-gray-800">Избранные</h4>
                                </div>
                                <p className="text-gray-400 mt-2">Доступно {favCount} врачей</p>
                            </Link>
                            <Link href={`/user_profile/${id}/reviews`} className="bg-white p-4 rounded-lg shadow-md text-center">
                                <div className='flex align-center justify-center items-center gap-2'>
                                    <svg width="40" height="40" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1.5" y="1.5" width="67" height="67" rx="33.5" stroke="#9CC8FC" strokeWidth="3" />
                                        <path d="M44.9701 51.3867L44.9705 51.3869C45.2653 51.5589 45.573 51.5223 45.8073 51.358C46.0383 51.1962 46.1246 50.9716 46.0652 50.7241L44.9701 51.3867ZM44.9701 51.3867L37.7657 47.1873C36.057 46.1913 33.945 46.1895 32.2345 47.1825L25.0321 51.364L25.0295 51.3655M44.9701 51.3867L25.0295 51.3655M25.0295 51.3655C24.7347 51.5375 24.427 51.5009 24.1927 51.3366M25.0295 51.3655L24.1927 51.3366M24.1927 51.3366C23.9617 51.1748 23.8754 50.9502 23.9348 50.7027L24.1927 51.3366ZM44.2071 43.0404L46.065 50.7234L23.935 50.702L25.7929 43.019C26.2849 40.9842 25.5792 38.8465 23.9723 37.5047L17.7318 32.2935L17.7313 32.293C17.4987 32.099 17.4588 31.8644 17.5334 31.6442C17.6098 31.4185 17.8067 31.2219 18.1507 31.1956L18.1507 31.1956L18.1583 31.195L26.5092 30.5118C28.5204 30.3473 30.28 29.0946 31.0937 27.2481L34.3298 19.9049L34.3298 19.9049L34.3324 19.899C34.4368 19.6594 34.6719 19.5 35 19.5C35.3281 19.5 35.5632 19.6594 35.6676 19.899L35.6697 19.9038L38.9067 27.2655C39.7196 29.1142 41.4802 30.3687 43.493 30.5334L51.8417 31.2164L51.8493 31.217C52.1933 31.2434 52.3902 31.4399 52.4666 31.6656C52.5412 31.8858 52.5013 32.1204 52.2687 32.3144L52.2682 32.3149L46.0277 37.5261C44.4208 38.8679 43.7151 41.0056 44.2071 43.0404Z" stroke="#9CC8FC" strokeWidth="3" />
                                    </svg>

                                    <h4 className="text-lg font-semibold text-gray-800">Ваши оценки</h4>
                                </div>
                                <p className="text-gray-400 mt-2">Вы оставляли 8 отзывов</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}