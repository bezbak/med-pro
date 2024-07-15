import React from 'react';
import Testimonial from './components/Testimonial';
import VideoSection from './components/VideoSection';
import Features from './components/Features';
import ImageBanner from './components/ImageBanner';

export default function Home() {
  const testimonials = [
    { name: 'Ganizhanov Muhammad', image: '/Ellipse1.png', text: 'Я очень рад, что у меня была возможность провести лечение в вашей клинике. Очень удобный онлайн формат. Очень доброжелательные. Всегда готовы предложить удобное время и день для посещения доктора.', rating: 4 },
    { name: 'Razhabaliev Abay', image: '/Ellipse2.png', text: 'Я очень рад, что у меня была возможность провести лечение в вашей клинике. Очень удобный онлайн формат. Очень доброжелательные. Всегда готовы предложить удобное время и день для посещения доктора.', rating: 5 },
    { name: 'Karimova Aiym', image: '/Ellipse2.png', rating: 3 },
  ];

  const featuresData = [
    {
      number: '01',
      title: 'Наши преимущества',
      heading: 'Удобный доступ к вашему благополучию',
      subtitle: 'Забота о здоровье',
      description: 'Простой способ заботиться о своем здоровье. Безопасный доступ к вашей медицинской истории через индивидуальные профили.'
    },
    {
      number: '02',
      title: 'Безопасность данных',
      heading: 'Защита ваших данных',
      subtitle: 'Современные технологии',
      description: 'Ваши данные защищены с использованием современных технологий безопасности и шифрования.'
    },
    {
      number: '03',
      title: 'Легкий доступ',
      heading: 'Доступ из любой точки мира',
      subtitle: 'Любое устройство',
      description: 'Доступ к вашим данным из любой точки мира с любого устройства в любое время.'
    },
  ];

  return (
    <div className="container mx-auto p-4 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-5">
          <Testimonial testimonials={testimonials} />
        </div>
        <div className="w-full flex justify-center items-center">
          <VideoSection videoUrl="/woman.png" description="Видеоотзыв от Светланы" />
        </div>
      </div>
      <div className="mt-8">
        <Features features={featuresData} />
      </div>
      <ImageBanner altText="Image description" />
    </div>
  );
}
