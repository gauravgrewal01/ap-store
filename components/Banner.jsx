"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

const Banner = () => {
  return (
<div className='mt-5 mx-auto w-[98vw]'>
       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image loading="eager" src={"/banner1.png"} height={400} width={2492} alt="banner1" className='rounded-md'></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/banner2.jpg"} height={400} width={2492} alt="banner1" className='rounded-md'></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/banner3.jpg"} height={400} width={2492} alt="banner1" className='rounded-md'></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/banner4.jpg"} height={400} width={2492} alt="banner1" className='rounded-md'></Image>
        </SwiperSlide>
      </Swiper>
</div>
  )
}

export default Banner