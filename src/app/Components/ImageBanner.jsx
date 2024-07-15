import Image from 'next/image';

const ImageBanner = ({ altText }) => (
  <div className="relative bg-cover bg-center rounded-3xl h-[350px] w-full my-8 overflow-hidden">
    <Image
      src="/imgObsessed.png"
      alt={altText}
      layout="fill"
      objectFit="cover"
      className="rounded-3xl"
      priority
    />
  </div>
);

export default ImageBanner;
