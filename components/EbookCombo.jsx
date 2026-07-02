 "use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import Book from './ui/Book';

const EbookCombo = () => {
    return (
        <div className='w-[96vw] mx-auto mt-10'>
            <h1 className='font-bold text-xl tracking-[-0.1rem]'>EBOOK COMBO</h1>
            <div className="slider p-6">
                <Swiper 
                slidesPerView={6}
                spaceBetween={30}
                navigation={true} 
                modules={[Navigation]} 
                className="mySwiper">
                    <SwiperSlide><Book /></SwiperSlide>
                    <SwiperSlide><Book /></SwiperSlide>
                    <SwiperSlide><Book /></SwiperSlide>
                    <SwiperSlide><Book /></SwiperSlide>
                    <SwiperSlide><Book /></SwiperSlide>
                    <SwiperSlide><Book /></SwiperSlide>
                    <SwiperSlide><Book /></SwiperSlide>
                    <SwiperSlide><Book /></SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}

export default EbookCombo