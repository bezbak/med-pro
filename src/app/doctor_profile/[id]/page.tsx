'use client'
import { Doctor } from '@/types/types';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '@/lib/utils';
import { useParams } from 'next/navigation';

type Props = {}

export default function Profile({ }: Props) {
    const { id } = useParams(); // Получаем параметр 'id' из URL
    const [Doctor, setDoctor] = useState<Doctor | null>(null);
    const [consultations, setConsultations] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [reviews, setReviews] = useState<any[]>([]);
    const data_types = {
        'chat': 'Чат консультация',
        'video': 'Видеоконсультация',
        'audio': 'Аудио консультация',
    } as const

    useEffect(() => {
        const accessToken = localStorage.getItem("access_token");

        // Отправка запроса на получение данных
        axios
            .get(`${BASE_URL}/api/v1/doctors/${id}`, {
                headers: {
                    "Authorization": `Bearer ${accessToken}` // Добавляем токен в заголовок
                }
            },)
            .then((response) => {
                setDoctor(response.data);

            })
            .catch((error) => {

                console.error('Ошибка при получении данных:', error);
            });
        const fetchConsultations = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/v1/consultations?doctor=${id}`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                setConsultations(response.data);
            } catch (err: any) {
                setError('Ошибка при загрузке данных');
            } finally {
                setLoading(false);
            }
        };
        const fetchReviews = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/v1/reviews/?doctor=${id}&patient=`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                setReviews(response.data);
            } catch (err: any) {
                setError('Ошибка при загрузке отзывов');
            }
        };
        fetchReviews();
        fetchConsultations();
    }, [id]);

    if (loading) {
        return <p>Загрузка...</p>;
    }

    if (error) {
        return <p>Ошибка: {error}</p>;
    }

    if (!Doctor) {
        return <p>Загрузка данных...</p>;
    }
    const consultationCount = consultations.length;
    const consultation = consultations[0];
    const reviewCount = reviews.length;

    return (
        <section id='doctorList'>
            <div className="w-full container mx-auto mt-[36px] font-gilroy">
                <div className="flex flex-col gap-6 p-6 w-full">
                    {/* Левая секция: Профиль */}
                    <div className="flex max-md:flex-col justify-between  rounded-lg w-full gap-4">
                        <div className='flex flex-col bg-white shadow-md rounded-lg max-md:w-full w-1/2 h-full p-6 min-h-[300px]'>
                            <div className='flex items-center gap-2'>
                                <img
                                    src={Doctor.user.profile} // замените на путь к изображению
                                    alt="Doctor.User Profile"
                                    className="w-24 h-24 rounded-full object-cover shadow"
                                />
                                <h2 className="text-xl font-semibold mt-4">{Doctor.user.last_name} {Doctor.user.first_name}</h2>
                            </div>
                            <p className="text-[#9CC8FC] mt-2">{Doctor.specialty.name ?? 'Не добавили'}</p>
                            <p className="text-gray-500">E-mail: {Doctor.user.email}</p>
                        </div>

                        <div className="bg-[#A7CBB6] border border-[#A7CBB6] text-white p-6 rounded-lg shadow-md max-md:w-full w-1/2 h-full min-h-[300px]">
                            <h3 className="text-[32px] font-semibold">Ваши записи на консультацию на этой неделе</h3>
                            <p className="mt-2 text-[24px]">
                                У вас {consultationCount} записей на консультацию на эту неделю. Посмотрите расписание
                            </p>
                            <Link
                                href={`/doctor_profile/${consultation.doctor.id}/catalog`}
                                className="mt-8 w-[fit-content] block px-4 py-2 bg-lightBlue text-white rounded-md shadow hover:bg-lightBlue-600 transition"
                            >
                                Посмотреть расписание
                            </Link>
                        </div>
                    </div>

                    {/* Правая секция: Консультация */}
                    <div className="flex-1 flex flex-col gap-6">


                        {/* Карточки */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="bg-white p-4 rounded-lg shadow-md text-center">
                                <div className='flex align-center justify-center items-center gap-2'>
                                    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1" y="1" width="68" height="68" rx="34" fill="white" />
                                        <rect x="1" y="1" width="68" height="68" rx="34" stroke="#9CC8FC" strokeWidth="2" />
                                        <g clipPath="url(#clip0_699_6793)">
                                            <path d="M34.8988 20.9667C34.8532 20.975 34.8083 20.9861 34.7642 21.0001C34.521 21.0546 34.3043 21.1917 34.1509 21.3881C33.9976 21.5845 33.917 21.828 33.9231 22.0771V23.154H24.2308C23.3739 23.154 22.5522 23.4944 21.9463 24.1002C21.3404 24.7061 21 25.5279 21 26.3847V40.3847C21 42.1681 22.4474 43.6155 24.2308 43.6155H33.9231V44.0194L28.0668 46.9475C27.808 47.0725 27.6095 47.2951 27.5148 47.5664C27.4202 47.8378 27.4373 48.1356 27.5622 48.3944C27.6872 48.6531 27.9098 48.8517 28.1812 48.9463C28.4525 49.0409 28.7503 49.0239 29.0091 48.8989L33.9231 46.4424V46.8463C33.9231 47.1319 34.0365 47.4058 34.2385 47.6078C34.4405 47.8097 34.7144 47.9232 35 47.9232C35.2856 47.9232 35.5595 47.8097 35.7615 47.6078C35.9635 47.4058 36.0769 47.1319 36.0769 46.8463V46.4424L40.9909 48.8989C41.2497 49.0239 41.5475 49.0409 41.8188 48.9463C42.0902 48.8517 42.3128 48.6531 42.4378 48.3944C42.5627 48.1356 42.5798 47.8378 42.4852 47.5664C42.3905 47.2951 42.192 47.0725 41.9332 46.9475L36.0769 44.0194V43.6155H45.7692C47.5526 43.6155 49 42.1681 49 40.3847V26.3847C49 25.5279 48.6596 24.7061 48.0537 24.1002C47.4478 23.4944 46.6261 23.154 45.7692 23.154H36.0769V22.0771C36.0824 21.9239 36.0551 21.7714 35.9968 21.6296C35.9386 21.4879 35.8508 21.3602 35.7393 21.2551C35.6278 21.15 35.4951 21.0699 35.3502 21.0202C35.2052 20.9705 35.0513 20.9522 34.8988 20.9667ZM23.1538 26.3847H46.8462V40.3847H23.1538V26.3847ZM43.4808 27.4617C43.2395 27.4876 43.0141 27.5942 42.8411 27.7643L39.3077 31.2987L36.8512 28.8401C36.7336 28.7194 36.5893 28.628 36.4298 28.5733C36.2704 28.5185 36.1004 28.5019 35.9334 28.5249C35.7664 28.5478 35.6072 28.6096 35.4684 28.7053C35.3297 28.8011 35.2153 28.928 35.1346 29.076L31.9372 34.6631L30.6245 31.3644C30.5607 31.1941 30.4549 31.0427 30.3168 30.9244C30.1787 30.806 30.013 30.7245 29.8349 30.6875C29.6569 30.6505 29.4723 30.6592 29.2985 30.7128C29.1248 30.7664 28.9674 30.8631 28.8411 30.994L25.6103 34.2247C25.5085 34.3265 25.4277 34.4473 25.3726 34.5803C25.3174 34.7133 25.289 34.8558 25.289 34.9998C25.2889 35.1437 25.3172 35.2863 25.3723 35.4193C25.4273 35.5523 25.508 35.6732 25.6098 35.775C25.7115 35.8768 25.8323 35.9576 25.9653 36.0127C26.0983 36.0679 26.2408 36.0963 26.3848 36.0963C26.5287 36.0964 26.6713 36.0681 26.8043 36.013C26.9373 35.958 27.0582 35.8773 27.16 35.7755L29.2126 33.7229L30.7612 37.5589C30.8343 37.7513 30.961 37.9187 31.1263 38.0413C31.2916 38.1639 31.4885 38.2366 31.6938 38.2508C31.8991 38.265 32.1042 38.22 32.2848 38.1212C32.4653 38.0225 32.6138 37.874 32.7126 37.6935L36.3138 31.4L38.5345 33.6217C38.6349 33.7256 38.7552 33.8082 38.8882 33.8646C39.0213 33.921 39.1643 33.9501 39.3088 33.9501C39.4533 33.9501 39.5963 33.921 39.7293 33.8646C39.8623 33.8082 39.9826 33.7256 40.0831 33.6217L44.3908 29.314C44.5609 29.1565 44.6756 28.9483 44.718 28.7204C44.7603 28.4924 44.728 28.2569 44.6257 28.0489C44.5235 27.8408 44.3569 27.6712 44.1506 27.5655C43.9443 27.4597 43.7094 27.4233 43.4808 27.4617Z" fill="#9CC8FC" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_699_6793">
                                                <rect width="28" height="28" fill="white" transform="translate(21 21)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <p className="text-lg font-semibold text-gray-800">Ваш поток клиентов</p>
                                </div>
                                <p className="text-gray-400">В среднем у вас 4 пациента в день</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-md text-center">
                                <div className='flex align-center justify-center items-center gap-2'>
                                    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1" y="1" width="68" height="68" rx="34" stroke="#9CC8FC" strokeWidth="2" />
                                        <path d="M31.0003 45.667H27.0003C25.5858 45.667 24.2293 45.1051 23.2291 44.1049C22.2289 43.1047 21.667 41.7481 21.667 40.3337V28.3337C21.667 26.9192 22.2289 25.5626 23.2291 24.5624C24.2293 23.5622 25.5858 23.0003 27.0003 23.0003H41.667C43.0815 23.0003 44.438 23.5622 45.4382 24.5624C46.4384 25.5626 47.0003 26.9192 47.0003 28.3337V32.3337M29.667 21.667V24.3337M39.0003 21.667V24.3337M21.667 29.667H47.0003M43.667 39.8577L41.667 41.8577" stroke="#9CC8FC" strokeWidth="2" strokeLinejoin="round" />
                                        <path d="M41.6667 48.3333C45.3486 48.3333 48.3333 45.3486 48.3333 41.6667C48.3333 37.9848 45.3486 35 41.6667 35C37.9848 35 35 37.9848 35 41.6667C35 45.3486 37.9848 48.3333 41.6667 48.3333Z" stroke="#9CC8FC" strokeWidth="2" strokeLinejoin="round" />
                                    </svg>

                                    <h4 className="text-lg font-semibold text-gray-800">Ваш график работы</h4>
                                </div>
                                <p className="text-gray-400 mt-2">Укажите свой график работы</p>
                            </div>
                            <Link href={`/doctor_profile/${id}/reviews`} className="bg-white p-4 rounded-lg shadow-md text-center">
                                <div className='flex align-center justify-center items-center gap-2'>
                                    <svg width="46" height="44" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.2589 36.4209L23.0005 36.2645L22.7418 36.4205L11.5872 43.1459L11.5863 43.1465C9.9249 44.1529 7.8894 42.6679 8.32738 40.7821C8.3274 40.782 8.32741 40.782 8.32743 40.7819L11.284 28.0845L11.3524 27.7909L11.1247 27.5934L1.26016 19.0386L1.25999 19.0384C-0.20839 17.7662 0.584725 15.3598 2.50435 15.207L2.50435 15.207L2.50699 15.2067L15.4894 14.1038L15.7896 14.0783L15.9074 13.8009L20.9874 1.8296L20.9882 1.82766C21.7307 0.0574467 24.2693 0.0574467 25.0117 1.82766L25.0124 1.82923L30.0925 13.8274L30.2101 14.1051L30.5106 14.1307L43.493 15.2336L43.4957 15.2339C45.4153 15.3867 46.2084 17.7931 44.74 19.0653L44.7398 19.0655L34.8754 27.6203L34.6476 27.8178L34.716 28.1114L37.6726 40.8088C38.1108 42.6947 36.0752 44.1798 34.4137 43.1734L34.4136 43.1733L23.2589 36.4209Z" fill="#FFC85D" stroke="#FFC85D" />
                                    </svg>


                                    <h4 className="text-lg font-semibold text-gray-800">{Doctor.rating} Ваши оценки</h4>
                                </div>
                                <p className="text-gray-400 mt-2">Вы оставляли {reviewCount} отзывов</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}