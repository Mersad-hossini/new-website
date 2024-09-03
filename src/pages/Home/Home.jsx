import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Register from "../Register/Register";
import VojohatPayment from "../../components/VojohatPayment/VojohatPayment";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Home() {
  return (
    <div className="wrapper">
      <Header />

      {/* Slider */}
      <div className="container mt-3 mb-3">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          dir="rtl"
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="./images/siteslide2.jpg" className="w-100" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/siteslide2.jpg" className="w-100" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/siteslide2.jpg" className="w-100" />
          </SwiperSlide>
        </Swiper>
      </div>

      <Register />

      {/* section pardakht vojohat */}
      <VojohatPayment />

    </div>
  );
}
