import React from 'react';

const Features = ({ features }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-custom-105 mt-[20px] ">
    {features.map((feature, index) => (
      <div key={index} className="bg-white shadow-md rounded-3xl p-5 w-[420px] h-[270px] flex flex-col justify-between font-gilroy">
        <div>
          <div className="flex items-center mb-4">
            <div className="bg-gray-200 rounded-full w-16 h-10 flex items-center justify-center mr-3">
              <span className="text-lg font-semibold">{feature.number}</span>
            </div>
            <span className="bg-Green text-white h-10 rounded-full px-4 py-2  text-sm font-medium">{feature.title}</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">{feature.heading}</h3>
        </div>
        <p className="text-gray-600">{feature.description}</p>
      </div>
    ))}
  </div>
);

export default Features;
