'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/lib/utils";

interface Review {
    id: number;
    patient: {
        user: {
            profile: string;
            first_name: string;
        };
    };
    stars: number;
    text: string;
}

const ReviewsPage: React.FC = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Функция загрузки отзывов
    const fetchReviews = async () => {
        try {
            setLoading(true);

            // Получение user_id из localStorage
            const userId = localStorage.getItem("user_id");

            if (!userId) {
                throw new Error("Пользователь не авторизован");
            }

            // Запрос к API
            const response = await axios.get<Review[]>(
                `${BASE_URL}/api/v1/reviews/?doctor=${userId}`
            );
            setReviews(response.data);
        } catch (err: any) {
            setError(err.message || "Не удалось загрузить отзывы");
        } finally {
            setLoading(false);
        }
    };

    // Загрузка данных при монтировании компонента
    useEffect(() => {
        fetchReviews();
    }, []);

    return (
        <section className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-6">Отзывы которые вы оставляли</h2>

            {loading ? (
                <p>Загрузка...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((item) => (
                        <div
                            key={item.id}
                            className="bg-[#A7CBB6] h-[220px] gap-[10px] p-4 rounded-lg shadow-md flex flex-col"
                        >
                            <div className="flex justify-between w-full">
                                <img
                                    src={item.patient.user.profile}
                                    alt={item.patient.user.first_name}
                                    className="w-20 h-20 rounded-full mb-3"
                                />
                                <div>
                                    <h3 className="font-bold text-lg mb-1">
                                        {item.patient.user.first_name}
                                    </h3>
                                    <div className="flex mb-3">
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <span
                                                key={index}
                                                className={`text-xl ${index < item.stars
                                                        ? "text-yellow-400"
                                                        : "text-gray-300"
                                                    }`}
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-black-700">{item.text}</p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default ReviewsPage;
