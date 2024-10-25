import React from 'react';
import Testimonial from '@/app/Components/Testimonial';
import Link from 'next/link';
import Image from 'next/image';

const CombinedSection = () => {

  const videoUrl = "/woman.png";
  const videoLink = "https://www.youtube.com/watch?v=kz23xxukY5s&t=13s";



  return (
    <div className="container w-full mx-auto mt-[60px] flex flex-col lg:flex-row gap-6">

      {/* Testimonials Section */}
      <div className="w-full lg:w-[592px] bg-white p-6 rounded-3xl">
        <Testimonial />
      </div>

      {/* Video Section */}
      <div className="w-full lg:w-[776px] relative">

        {/* Add play button overlay */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-[#B3D4F2] p-4 rounded-full cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8 5.63604V18.364C8 19.5 9.2925 20.136 10.2929 19.4142L16.2929 15.4142C17.2925 14.6925 17.2925 13.3075 16.2929 12.5858L10.2929 8.58579C9.2925 7.86396 8 8.5 8 9.63604Z" fill="white" />
            </svg>
          </div>
        </div>
        <div className=" ">
          <div className="h-[592px] max-sm:h-[400px] w-full rounded-2xl">
            <div className="relative h-full max-sm:h-[400px]">
              <Link href={videoLink} legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  <Image src={videoUrl} alt="Видеоотзыв" layout="fill" objectFit="cover" className="rounded-3xl max-sm:h-[400px]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-lightBlue rounded-full p-2">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">

                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 text-white text-lg font-medium">
          Видеоотзыв от Светланы
        </div>
      </div>
    </div>
  );
};

export default CombinedSection;
