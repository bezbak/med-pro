import Testimonial from './components/Testimonial';
import VideoSection from './components/VideoSection';
import Features from './components/Features';



export default function Home() {
  const testimonials = [
    { name: 'Ganizhanov Muhammad', image: '/Ellipse1.png', text: 'Great service!', rating: 5 },
    { name: 'Razhabaliev Abay', image: '/Ellipse2.png', text: 'Loved it!', rating: 4 },
    { name: 'Karimova Aiym', image: '/Ellipse2.png', text: 'Loved it!', rating: 4 },
  ];

  const features = [
    { title: 'Feature 1', description: 'Я очень рад, что у меня была возможность провести лечение в вашей клинике. Очень удобный онлайн формат Очень доброжелательные. Всегда готовы предложить удобное время и день для посещения доктора.' },
    { title: 'Feature 2', description: 'Я очень рад, что у меня была возможность провести лечение в вашей клинике. Очень удобный онлайн формат Очень доброжелательные. Всегда готовы предложить удобное время и день для посещения доктора.' },
    { title: 'Feature 3', description: 'Description of feature 3' },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
        <VideoSection videoUrl="/video.mp4" description="Видеоотзыв от Светланы" />
      </div>
      <Features features={features} />
    </div>
  );
}
