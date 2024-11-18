"use client";
import Link from 'next/link';
import React, { useState } from 'react'
import { ApiError, RegistrationFormData } from '@/types/types';
import { useRouter } from "next/navigation";
import { BASE_URL } from '@/lib/utils';
type Props = {}

export default function Regitster({ }: Props) {
    const [formData, setFormData] = useState<RegistrationFormData>({
        email: "",
        phone_number: "",
        password: "",
        password2: "",
        last_name: "",
        first_name: "",
        is_doctor: false,
    });

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);

    };
    const [error, setError] = useState<ApiError | null>(null);
    const [success, setSuccess] = useState(false);
    const router = useRouter();

    // Обновление состояния формы
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    // Отправка данных на сервер
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            console.log(formData);

            const response = await fetch(`${BASE_URL}/api/v1/register/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess(true);
                setError(null);
                router.push("/login");
            } else {
                setSuccess(false);
                setError(data);
            }
        } catch (err) {
            setSuccess(false);
            setError({ detail: "Произошла ошибка, попробуйте снова." });
            console.error("Ошибка:", err);
        }
    };
    return (
        <section id='register'>
            <div className="w-full container mx-auto mt-[36px] font-gilroy flex items-center justify-center bg-gray-100">
                <div className="flex bg-white rounded-lg overflow-hidden max-w-6xl w-full">
                    {/* Левая часть - изображение */}
                    <div className="hidden sm:block w-1/2 bg-gray-100 flex items-center justify-center">
                        <img src="/register.png" alt="Register Illustration" className="w-full h-full object-cover px-8" />
                    </div>
                    {/* Правая часть - форма */}
                    <div className="w-full sm:w-1/2 p-8">
                        <h2 className="text-2xl font-bold mb-4">Зарегистрироваться</h2>
                        <p className="text-gray-600 mb-6">
                            Давайте подготовим вас, чтобы вы могли получить доступ к своей личной учетной записи.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="relative">
                                <input onChange={handleInputChange}
                                    type="text"
                                    id="firstName"
                                    name="first_name"
                                    placeholder=" "
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black peer"
                                    required
                                />
                                <label
                                    htmlFor="firstName"
                                    className="absolute text-gray-500 text-sm top-[-10px] left-3 bg-white px-1 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-black"
                                >
                                    Имя
                                </label>
                            </div>
                            <div className="relative">
                                <input onChange={handleInputChange}
                                    type="text"
                                    id="lastName"
                                    name="last_name"
                                    placeholder=" "
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black peer"
                                    required
                                />
                                <label
                                    htmlFor="lastName"
                                    className="absolute text-gray-500 text-sm top-[-10px] left-3 bg-white px-1 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-black"
                                >
                                    Фамилия
                                </label>
                            </div>
                            <div className="relative">
                                <input onChange={handleInputChange}
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black peer"
                                    required
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute text-gray-500 text-sm top-[-10px] left-3 bg-white px-1 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-black"
                                >
                                    Email
                                </label>
                            </div>
                            <div className="relative">
                                <input onChange={handleInputChange}
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    placeholder=" "
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black peer"
                                    required
                                />
                                <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5" > {showPassword ? '👁️' : '🙈'} </button>

                                <label
                                    htmlFor="password"
                                    className="absolute text-gray-500 text-sm top-[-10px] left-3 bg-white px-1 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-black"
                                >
                                    Пароль
                                </label>
                            </div>
                            <div className="relative">
                                <input onChange={handleInputChange}
                                    type={showPassword ? 'text' : 'password'}
                                    id="confirmPassword"
                                    placeholder=" "
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black peer"
                                    required
                                    name="password2"
                                />
                                <label
                                    htmlFor="confirmPassword"
                                    className="absolute text-gray-500 text-sm top-[-10px] left-3 bg-white px-1 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-black"
                                >
                                    Подтвердите пароль
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" id="policy" className="mr-2" required />
                                <label htmlFor="policy" className="text-sm text-gray-500">
                                    Я согласен с <Link href="/agreement" className="text-blue-500">политикой конфиденциальности</Link>
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                Создать аккаунт
                            </button>
                        </form>
                        <p className="text-gray-500 text-center mt-6">
                            Уже есть аккаунт? <Link href="/login" className="text-blue-500">Войдите</Link>
                        </p>
                        <div className="mt-6">
                            <p className="text-center text-gray-500 mb-3">Или войдите с помощью</p>
                            <div className="flex justify-center space-x-4">
                                <button className="bg-[#FFAEAD] text-white py-2 px-4 rounded-lg">
                                    Facebook
                                </button>
                                <button className="bg-[#FFAEAD] text-white py-2 px-4 rounded-lg">
                                    Google
                                </button>
                                <button className="bg-[#FFAEAD] text-white py-2 px-4 rounded-lg">
                                    Apple
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}