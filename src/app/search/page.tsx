'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { BASE_URL } from '@/lib/utils';
import { IoBookmarkOutline, IoStar } from 'react-icons/io5';
import Link from 'next/link';
import '../doctors/doctors.css'

const SearchPage: React.FC = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get('query');; // Получение параметра из URL
    const [results, setResults] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchResults = async () => {
            if (query) {
                try {
                    const response = await fetch(`${BASE_URL}/api/v1/doctors?search=${encodeURIComponent(query as string)}`);
                    if (!response.ok) throw new Error('Ошибка загрузки данных');

                    const data = await response.json();
                    setResults(data);
                } catch (error) {
                    console.error('Ошибка при поиске:', error);
                } finally {
                    setIsLoading(false);
                }
            }
        };

        fetchResults();
    }, [query]);

    return (
        <section id="doctorList">
            <div className="w-full container mx-auto mt-[36px] font-gilroy">
                <div className="bg-white max-w-full p-[32px] h-full rounded-3xl font-gilroy text-center">
                    <h1 className="max-sm:text-[28px] max-sm:mb-[10px] text-[30px] font-bold text-left">
                        Результаты поиска
                    </h1>
                </div>

                {isLoading ? (
                    <p>Загрузка...</p>
                ) : results.length > 0 ? (
                    <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10 max-sm:place-items-center mt-8">
                        {results.map((result) => (
                            <div
                                key={result.id}
                                style={{ backgroundImage: `url(${result.user.profile})` }}
                                className="doctor_card shadow-lg"
                            >
                                <div className="card_inner">
                                    <button className="card_bookmark">
                                        <IoBookmarkOutline width="20px" height="20px" color="#9CC8FC" />
                                    </button>
                                    <div className="card_text">
                                        <div className="card_info">
                                            <Link href={`/doctorInfo/${result.id}`} className="title">
                                                {result.user.last_name} {result.user.first_name}
                                            </Link>
                                            <Link href={`/doctors`} className="category">
                                                {result.specialty.name}
                                            </Link>
                                        </div>
                                        <span>
                                            {result.rating.toFixed(1)} <IoStar color="#FFC85D" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Ничего не найдено.</p>
                )}
            </div>
        </section>
    );
};

export default SearchPage;