"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Pagination, Autoplay, EffectFade  } from "swiper/modules";
import Slide from "./Slide"; // component

export default function Carousel() {
  return (
    <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        speed={800} 
    >
      <SwiperSlide>
        <Slide src="/images/slider1.jpg" title="Welcome to the Art Gallery" btnText="GET STARTED" btnHref="/" />
      </SwiperSlide>
      <SwiperSlide>
        <Slide src="/images/slider2.jpg" title="Collect Art from Artists on the Rise" btnText="GET STARTED" btnHref="/" />
      </SwiperSlide>
      <SwiperSlide>
        <Slide src="/images/slider3.jpg" title="Collect Art from Artists on the Rise" btnText="GET STARTED" btnHref="/" />
      </SwiperSlide>
    </Swiper>
  );
}
