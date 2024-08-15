"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { reviews as reviewData } from '@/data/doctorData';
import star from '../../../public/doctor/star.png'

interface ReviewDetail {
  name: string;
  content: string;
  avatar: string; 
  rating?: number; 
}

const Review: React.FC<ReviewDetail> = ({ name, content, avatar, rating }) => {
  const defaultAvatar = '/doctor/icon-user.png';

  return (
    <div className="w-full  h-[460px] mb-[40px] bg-green-100 pl-[25px] pt-[40px]  rounded-3xl shadow-md font-gilroy">
      <div className='flex items-center '>
        <Image 
          src={avatar || defaultAvatar}
          alt={`${name} avatar`}
          width={88} 
          height={88}
          className="rounded-full mr-[10px]  shadow-lg border-white"
        />
       <div className='flex-1'>
  <p className="text-[24px] font-extrabold tracking-normal font-gilroy mb-[18px]">{name}</p>
  <div className="flex w-[158px] mb-[5px] ">
    {[...Array(5)].map((_, i) => (
      <span
        key={i}
        className={` text-[32px] pr-[5px] ${i < 3 ? 'text-yellow-500' : 'text-gray-500'}`}
      >
        <Image src={star} alt='review' className='pb-[10px]'/>
      </span>
    ))}
  </div>
</div>

      </div>
     <div className='  w-[370px] h-[260px] mt-[20px] '>
     <p className="text-black text-[20px] font-gilroy-500   ">{content}</p>
     </div>
    </div>
  );
};

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewDetail[]>(reviewData[1]);

  const [newReview, setNewReview] = useState<string>('');
  const [rating, setRating] = useState<number>(0);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const handleSubmit = () => {
    if (newReview.trim() !== '') {
      const newReviewData: ReviewDetail = {
        name: 'Анонимный пользователь',
        content: newReview,
        avatar: '/icon-user.png', 
        rating: rating || 0,
      };
      setReviews([newReviewData, ...reviews]); 
      setNewReview(''); 
      setRating(0); 
    }
  };

  return (
    <div className="rounded-3xl mt-[40px]">
      <div className="w-[1300px] grid grid-cols-1 md:grid-cols-3 gap-4 text-[22px] pt-[25px]">
        {reviews.map((review, index) => (
          <Review 
            key={index} 
            name={review.name} 
            content={review.content} 
            avatar={review.avatar} 
            rating={review.rating} 
          />
        ))}
      </div>

      <div className="mt-4">
        <div className="flex ">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg 
              key={star} 
              onClick={() => handleRating(star)} 
              className={`  w-[70px] h-[70px] cursor-pointer ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`} 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927C9.198 2.582 9.602 2.582 9.751 2.927L11.28 6.384L15.021 7.014C15.401 7.077 15.552 7.572 15.249 7.854L12.734 10.07L13.454 13.721C13.532 14.101 13.073 14.368 12.751 14.155L9.5 12.235L6.249 14.155C5.926 14.368 5.467 14.101 5.545 13.721L6.265 10.07L3.751 7.854C3.448 7.572 3.599 7.077 3.979 7.014L7.72 6.384L9.249 2.927H9.049Z" />
            </svg>
          ))}
        </div>

     

        <textarea 
  placeholder="Написать отзыв" 
  value={newReview}
  onChange={(e) => setNewReview(e.target.value)}
  className="border rounded-3xl w-full h-[141px] resize-none pl-[60px] pt-[50px]  text-[20px] text-start align-top" 
/>


        <button 
          onClick={handleSubmit}
          className="border-white    absolute mt-[180px] ml-[-170px] right-center  bg-pink text-white py-2 px-4 rounded-full w-[173px] h-[49px] "
        >
          Отправить
        </button>
        </div>
      </div>
    
  );
};

export default Reviews;
