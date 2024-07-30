import React from 'react';
import Image from 'next/image';
import { employees, aboutText } from '@/data/aboutData';

const AboutUs: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">О нас</h1>
        <p className="text-center mb-8">{aboutText}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {employees.map((employee) => (
            <div key={employee.id} className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
              <Image src={employee.image} alt={employee.name} width={150} height={150} className="w-24 h-24 mx-auto rounded-full" />
              <h3 className="text-xl font-semibold text-center mt-4">{employee.name}</h3>
              <p className="text-center text-gray-600">{employee.position}</p>
              <p className="text-center mt-4">{employee.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
