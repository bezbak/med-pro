import Image from 'next/image';

const Testimonial = ({ testimonials }) => (
  <div className="bg-white rounded-3xl p-9 shadow-md">
    <div className="space-y-3">
      {testimonials.map(({ name, image, text, rating }, index) => (
        <div key={index} className="bg-lightBlue p-5 rounded-3xl flex items-start space-x-4">
          <Image src={image} alt={name} width={50} height={50} className="rounded-full" />
          <div>
            <h3 className="text-xl font-semibold">{name}</h3>
            <div className="flex items-center mb-2">
              {[...Array(rating)].map((_, i) => (
                <span key={i} className="text-yellow-500">★</span>
              ))}
              {[...Array(5 - rating)].map((_, i) => (
                <span key={i} className="text-gray-300">★</span>
              ))}
            </div>
            <p className="text-gray-600">{text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Testimonial;
