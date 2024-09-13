import React from 'react';
import Image from 'next/image';

const ImageBanner = () => {
  
  const altText = "Описание изображения";

  return (
    <div className="rounded-3xl my-8 mt-[60px] container lg:w-full">
      <Image
        src="/imgObsessed.png"
        alt={altText}
        layout="responsive"
        width={1600}  
        height={350}  
        className="rounded-3xl"
        priority
      />
    </div>
  );
};

export default ImageBanner;
