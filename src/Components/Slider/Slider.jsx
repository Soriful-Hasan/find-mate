import React from "react";
import swiper, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slider1 from "/slider1.jpg";
import slider2 from "/slider2.jpg";
import slider3 from "/slider3.jpg";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle?.current?.style?.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 3000)}s`;
  };

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper mt-10 rounded-lg"
    >
      <SwiperSlide>
        <div className="w-full ">
          <img src={slider1} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full ">
          <img src={slider2} alt="" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="w-full ">
          <img src={slider3} alt="" />
        </div>
      </SwiperSlide>

      <div className="autoplay-progress" slot="container-end">
        <span ref={progressContent}></span>
      </div>
    </Swiper>
  );
};

export default Slider;
