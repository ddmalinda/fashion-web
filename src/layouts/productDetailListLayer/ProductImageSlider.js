import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SingleProductImageSlider from './SingleProductImageSlider';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Grid2 } from '@mui/material';
import SmallThumnailList from './smallThumnailList/SmallThumnailList';


export default function ProductImageSlider({ images }) {
    const swiperRef = useRef(null);

    const slideTo = (index) => {
        swiperRef.current && swiperRef.current.swiper.slideTo(index);
    };
    return (
        <Grid2 >
                <Swiper
                    ref={swiperRef}
                    spaceBetween={50}
                    slidesPerView={1}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    
                >
                    {images.map((val, key) => {
                        return (
                            <SwiperSlide key={key} >
                                <SingleProductImageSlider image={val} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            
            <Grid2 container>
                <SmallThumnailList images={images} slideTo={slideTo} />
            </Grid2>
        </Grid2>
    )
}
