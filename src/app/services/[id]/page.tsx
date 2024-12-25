'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import './doctors.css'
import { IoBookmarkOutline, IoStar, IoBookmark } from 'react-icons/io5';
import { BASE_URL } from '@/lib/utils';
import { useParams } from 'next/navigation';
import { Doctor } from '@/types/types';
import axios from 'axios';

const Page: React.FC = () => {
  const { id } = useParams(); // Получаем параметр 'id' из URL
  const [doctors, setDoctors] = useState<Doctor[]>([]); // Храним список врачей
  const [loading, setLoading] = useState<boolean>(true); // Состояние загрузки
  const [serviceName, setServiceName] = useState<boolean>(true); // Состояние загрузки
  const [userFav, setUserFav] = useState<any[]>([]); // Состояние загрузки


  // Получаем данные врачей с API
  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    const userId = localStorage.getItem("user_id");

    fetch(`${BASE_URL}/api/v1/doctors?specialty=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDoctors(data); // Сохраняем данные в состояние
        setServiceName(data[0].specialty.name)
        setLoading(false); // Выключаем состояние загрузки
      })
      .catch((error) => {
        console.error('Ошибка при получении данных:', error);
        setLoading(false);
      });
    if (accessToken) {

      axios.get(`${BASE_URL}/api/v1/favorites/?doctor=&patient=${userId}`, { headers: { "Authorization": `Bearer ${accessToken}` } })
        .then((response) => {
          setUserFav(response.data);
        })
        .catch((error) => {
          console.error('Ошибка при получении данных:', error);
        });
    }
  }, []);

  const setFav = (id: number) => {
    const userId = localStorage.getItem("user_id");
    const accessToken = localStorage.getItem("access_token");

    if (userId && id) {
      axios.post(`${BASE_URL}/api/v1/favorites/`, {
        'patient': userId,
        'doctor_id': id,
      },
        { headers: { "Authorization": `Bearer ${accessToken}` } })
        .then((response) => {
          axios.get(`${BASE_URL}/api/v1/favorites/?doctor=&patient=${userId}`, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then((response) => {
              setUserFav(response.data);
            })
            .catch((error) => {
              console.error('Ошибка при получении данных:', error);
            });
        })
        .catch((error) => {
          console.error('Ошибка при получении данных:', error);
        });
    }
  }
  const delFav = (id: number) => {
    const userId = localStorage.getItem("user_id");
    const accessToken = localStorage.getItem("access_token");

    if (userId && id) {
      axios.get(`${BASE_URL}/api/v1/favorites/?doctor=${id}&patient=${userId}`, { headers: { "Authorization": `Bearer ${accessToken}` } })
        .then((response) => {
          axios.delete(`${BASE_URL}/api/v1/favorites//${response.data[0].id}`, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(() => {
              axios.get(`${BASE_URL}/api/v1/favorites/?doctor=${id}&patient=${userId}`, { headers: { "Authorization": `Bearer ${accessToken}` } })
                .then((response) => {
                  setUserFav(response.data)
                })
            })
        })
        .catch((error) => {
          console.error('Ошибка при получении данных:', error);
        });
    }
  }

  if (loading) return <p>Загрузка данных...</p>; // Рендерим загрузку, пока данные не получены


  return (
    <section id='doctorList'>
      <div className="w-full container mx-auto mt-[36px] font-gilroy">
        <div className="bg-white max-w-full p-[32px] h-full rounded-3xl font-gilroy text-center">
          <h1 className="max-sm:text-[28px] max-sm:mb-[10px] text-[30px] font-bold text-left">Наши врачи - <span className='text-l font-gilroy text-lightBlue'>{serviceName}</span></h1>
          <p className="text-left max-sm:text-[18px] text-[22px] w-full break-words">
            В <b className="text-l font-gilroy text-lightBlue ">Med-Pro</b> наша команда медицинских специалистов стремится обеспечить сострадательный и индивидуальный уход. Каждый врач обладает богатым опытом и знаниями, гарантируя, что вы получите медицинское обслуживание высочайшего уровня. Познакомьтесь с нашей преданной командой ниже.
          </p>
        </div>

        <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10 max-sm:place-items-center mt-8">
          {doctors.map((doctor) => {
            const isFavorite = userFav.some(fav => fav.doctor.id === doctor.id);
            return <div
              key={doctor.id}
              style={{ backgroundImage: `url(${doctor.user.profile})` }}
              className="doctor_card shadow-lg"
            >
              <div className="card_inner">
                <button className="card_bookmark" >
                  {isFavorite ? (
                    <IoBookmark onClick={() => { delFav(doctor.id) }} width={'20px'} color="#9CC8FC" /> // Иконка filled
                  ) : (
                    <IoBookmarkOutline onClick={() => { setFav(doctor.id) }} width={'20px'} color="#9CC8FC" /> // Иконка outline
                  )}
                </button>
                <div className="card_text">
                  <div className="card_info">
                    <Link href={`/doctorInfo/${doctor.id}`} className="title">
                      {doctor.user.last_name} {doctor.user.first_name}
                    </Link>
                    <Link href={`/doctors`} className="category">
                      {doctor.specialty.name}
                    </Link>
                  </div>
                  <span>
                    {doctor.rating.toFixed(1)} <IoStar color="#FFC85D" />
                  </span>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </section>
  );
};

export default Page;
