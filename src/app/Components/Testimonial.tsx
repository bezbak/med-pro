// import React from 'react';
// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Virtual } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/virtual';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import styles from '../Testimonial.module.css';

// const Testimonial: React.FC<any> = ({ testimonials }) => {
//   return (
//     <div className={styles.container}>
//       <Swiper
//         modules={[Virtual]}
//         spaceBetween={30}
//         slidesPerView={1}
//         direction="vertical"
//         virtual
//       >
//         {testimonials.map(({ name, image, text, rating }, index) => (
//           <SwiperSlide key={index} virtualIndex={index}>
//             <div className={styles.slide}>
//               <Image src={image} alt={name} width={50} height={50} className="rounded-full" />
//               <div>
//                 <h3 className="text-xl font-semibold">{name}</h3>
//                 <div className={styles.rating}>
//                   {[...Array(rating)].map((_, i) => (
//                     <span key={i} className={styles.starActive}>★</span>
//                   ))}
//                   {[...Array(5 - rating)].map((_, i) => (
//                     <span key={i} className={styles.starInactive}>★</span>
//                   ))}
//                 </div>
//                 <p className={styles.text}>{text}</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Testimonial;
