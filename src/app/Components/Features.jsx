import React from 'react';
import { features } from '@/data/data'; 

const Features = () => {
  return (
    <div className="container w-full grid grid-cols-1 md:grid-cols-3 gap-2 mt-[20px]">
      {features.map((feature, index) => (
        <div key={index} className="bg-white shadow-md rounded-3xl p-5 w-[420px] h-[270px] flex flex-col justify-between font-gilroy">
          
            <div className="flex items-center mb-4">
              <div className="border-gray-300  rounded-3xl  h-[45px] flex items-center justify-center mr-[20px]">
                <span className="text-lg font-Gilroy">{feature.number}</span>
              </div>
              <span className="bg-Green text-white h-10 rounded-full px-4 py-2 text-sm font-Gilroy ">{feature.title}</span>
            </div>
            <h3 className="text-xl font-Gilroy mb-2">{feature.heading}</h3>
          
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
