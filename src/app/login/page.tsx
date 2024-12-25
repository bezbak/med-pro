"use client";

import { BASE_URL } from '@/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
type Props = {}

export default function Login({ }: Props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);

    };
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        try {
            const response = await fetch(`${BASE_URL}/api/v1/login/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || 'Something went wrong!');
            } 
            const data = await response.json();
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('refresh_token', data.refresh_token);
            localStorage.setItem('user_id', data.user_id);
            localStorage.setItem('is_doctor', data.is_doctor);
            router.push('/');
        } catch (err: any) {
            setError(err.message);

        }
    };
    return (
        <section id='doctorList'>
            <div className="w-full container mx-auto mt-[36px] font-gilroy flex items-center justify-center bg-gray-100">
                <div className="flex bg-white rounded-lg overflow-hidden max-w-4xl w-full">
                    {/* Левая часть - форма */}
                    <div className="w-full sm:w-1/2 p-8">
                        <h2 className="text-2xl font-bold mb-6">Войти</h2>
                        <p className="text-gray-600 mb-6">
                            Войдите, чтобы получить доступ к своей учетной записи
                        </p>
                        <form onSubmit={handleLogin} className="space-y-4">
                            {error && <p className="text-red-500">{error}</p>}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700"> Email </label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700"> Пароль </label>
                                <div className="relative">
                                    <input type={showPassword ? 'text' : 'password'} id="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5" > {showPassword ? '👁️' : '🙈'} </button>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900"> Запомнить меня </label>
                            </div>
                            <div className="text-sm"> <Link href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Забыли пароль </Link> </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                Войти
                            </button>
                        </form>
                        <p className="text-gray-500 text-center mt-6">
                            У вас еще нет аккаунта?{" "}
                            <Link href="/register" className="text-blue-500">
                                Зарегистрируйтесь
                            </Link>
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
                    {/* Правая часть - изображение */}
                    <div className="hidden sm:block w-1/2 bg-gray-100 flex items-center justify-center">
                        <img src="/secure.png" alt="Secure Login" className="w-full h-full object-cover px-8" />
                    </div>
                </div>
            </div>
        </section>
    )
}