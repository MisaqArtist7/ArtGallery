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
        <Slide src="/images/slider1.jpg" title="Welcome to the Art Gallery" p="Discover a curated selection of artworks from emerging and established artists." btnText="GET STARTED" btnHref="/" />
      </SwiperSlide>
      <SwiperSlide>
        <Slide src="/images/slider2.jpg" title="Collect Art from Artists on the Rise" p="Through rough, honest materials, Andrew's simple yet profound paintings echo the raw emotion of early art." btnText="GET STARTED" btnHref="/" />
      </SwiperSlide>
      <SwiperSlide>
        <Slide src="/images/slider3.jpg" title="Work with an Art Advisor" p="Get assistance with art selection, framing, hanging, shipping, and financing" btnText="GET STARTED" btnHref="/" />
      </SwiperSlide>
    </Swiper>
  );
}
