// "use client";
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const VideoSection = () => {

//   const videoUrl = "/woman.png";
//   const videoLink = "https://www.youtube.com/watch?v=kz23xxukY5s&t=13s";
//   const description = "Описание видео";

//   return (
//     <div className=" ">
//       <div className="h-[592px] w-full rounded-2xl">
//         <div className="relative h-full">
//           <Link href={videoLink} legacyBehavior>
//             <a target="_blank" rel="noopener noreferrer">
//               <Image src={videoUrl} alt="Видеоотзыв" layout="fill" objectFit="cover" className="rounded-3xl" />
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="bg-lightBlue rounded-full p-2">
//                   <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M8 5v14l11-7z" />
//                   </svg>
//                 </div>
//               </div>
//               <div className="absolute bottom-4 left-4">
//                 <p className="text-white text-3xl font-Gilroy">{description}</p>
//               </div>
//             </a>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoSection;
