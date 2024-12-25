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
  const [loading, setLoading] = useState<boolean>(true); // Состояние загрузки
  const [userFav, setUserFav] = useState<any[]>([]); // Состояние загрузки


  // Получаем данные врачей с API
  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    const userId = localStorage.getItem("user_id");

    if (accessToken) {
      axios.get(`${BASE_URL}/api/v1/favorites/?doctor=&patient=${userId}`, { headers: { "Authorization": `Bearer ${accessToken}` } })
        .then((response) => {

          setUserFav(response.data);
          setLoading(false); // Выключаем состояние загрузки
        })
        .catch((error) => {
          console.error('Ошибка при получении данных:', error);
        });
    }
  }, []);

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
        <div className=" max-w-full p2-2 h-full rounded-3xl font-gilroy text-center">
          <h1 className="max-sm:text-[28px] max-sm:mb-[10px] text-[36px] font-bold text-left">Избранные</h1>
        </div>

        <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10 max-sm:place-items-center mt-8">
          {userFav.map((fav) => {
            return <div
              key={fav.doctor.id}
              style={{ backgroundImage: `url(${fav.doctor.user.profile})` }}
              className="doctor_card shadow-lg"
            >
              <div className="card_inner">
                <button className="card_bookmark" >
                  <IoBookmark onClick={() => { delFav(fav.doctor.id) }} width={'20px'} color="#9CC8FC" /> 
                </button>
                <div className="card_text">
                  <div className="card_info">
                    <Link href={`/doctorInfo/${fav.doctor.id}`} className="title">
                      {fav.doctor.user.last_name} {fav.doctor.user.first_name}
                    </Link>
                    <Link href={`/doctors`} className="category">
                      {fav.doctor.specialty.name}
                    </Link>
                  </div>
                  <span>
                    {fav.doctor.rating.toFixed(1)} <IoStar color="#FFC85D" />
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
