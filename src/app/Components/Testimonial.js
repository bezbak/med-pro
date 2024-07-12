import Image from 'next/image';

const Testimonial = ({ name, image, text, rating }) => (
  <div className="bg-white shadow-md rounded-lg p-4 mb-4">
    <Image src={image} alt={name} width={50} height={50} className="rounded-full" />
    <h3 className="text-xl font-semibold">{name}</h3>
    <p className="text-gray-600">{text}</p>
    <div className="flex">
      {[...Array(rating)].map((_, i) => (
        <span key={i} className="text-yellow-500">★</span>
      ))}
      {[...Array(5 - rating)].map((_, i) => (
        <span key={i} className="text-gray-300">★</span>
      ))}
    </div>
  </div>
);

export default Testimonial;
