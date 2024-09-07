import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Register from "../Register/Register";
import Footer from "../../components/Footer/Footer";
import VojohatPayment from "../../components/VojohatPayment/VojohatPayment";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

// Import uuid for generating unique IDs
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  let [value, setValue] = useState([]);
  const maxItems = 4; // Maximum number of items allowed

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  const handlerAdd = () => {
    if (value.length < maxItems) {
      let addSelectBox = [...value, { id: uuidv4() }];
      setValue(addSelectBox);
    }
  };

  const removeHandler = (id) => {
    let removeVal = value.filter((item) => item.id !== id);
    setValue(removeVal);
  };

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

      <div
        className="paymentVojohat container d-flex justify-content-center align-items-center mt-5"
        onSubmit={onSubmitHandler}
      >
        <form action="" dir="rtl">
          <div id="registrationForm" className="selectbox-wrapper mb-4">
            <select>
              <option value="-1">-- انتخاب کنید --</option>
              <option value="زکات">زکات</option>
              <option value="زکات فطره">زکات فطره</option>
              <option value="کفارات">کفارات</option>
              <option value="صدقه">خمس</option>
              <option value="صدقه">صدقه</option>
              <option value="رد مظالم">رد مظالم</option>
              <option value="تبرعات و امور خیریه">تبرعات و امور خیریه</option>
            </select>
            <div onClick={() => removeHandler(data.id)}>
              {/* <svg
                className="close-button"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                viewBox="0 0 320 512"
              >
                <path d="M317.7 402.3c3.125 3.125 3.125 8.188 0 11.31c-3.127 3.127-8.186 3.127-11.31 0L160 267.3l-146.3 146.3c-3.127 3.127-8.186 3.127-11.31 0c-3.125-3.125-3.125-8.188 0-11.31L148.7 256L2.344 109.7c-3.125-3.125-3.125-8.188 0-11.31s8.188-3.125 11.31 0L160 244.7l146.3-146.3c3.125-3.125 8.188-3.125 11.31 0s3.125 8.188 0 11.31L171.3 256L317.7 402.3z"></path>
              </svg> */}
            </div>
            <div className="d-flex align-items-center">
              <label className="gender-button" htmlFor="male">
                عام
              </label>
              <input
                type="radio"
                name="gender"
                value="female"
                className="d-none female"
              />
              <label className="gender-button" htmlFor="male">
                سادات
              </label>
              <input
                type="radio"
                name="gender"
                value="male"
                className="d-none male"
              />
            </div>
            <input className="input" type="number" placeholder="مبلغ" />
          </div>
          {value.map((data, index) => (
            <div
              key={data.id}
              id="registrationForm"
              className="selectbox-wrapper mb-4"
            >
              <select>
                <option value="-1">-- انتخاب کنید --</option>
                <option value="زکات">زکات</option>
                <option value="زکات فطره">زکات فطره</option>
                <option value="کفارات">کفارات</option>
                <option value="صدقه">خمس</option>
                <option value="صدقه">صدقه</option>
                <option value="رد مظالم">رد مظالم</option>
                <option value="تبرعات و امور خیریه">تبرعات و امور خیریه</option>
              </select>
              <div onClick={() => removeHandler(data.id)}>
                <svg
                  className="close-button"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  viewBox="0 0 320 512"
                >
                  <path d="M317.7 402.3c3.125 3.125 3.125 8.188 0 11.31c-3.127 3.127-8.186 3.127-11.31 0L160 267.3l-146.3 146.3c-3.127 3.127-8.186 3.127-11.31 0c-3.125-3.125-3.125-8.188 0-11.31L148.7 256L2.344 109.7c-3.125-3.125-3.125-8.188 0-11.31s8.188-3.125 11.31 0L160 244.7l146.3-146.3c3.125-3.125 8.188-3.125 11.31 0s3.125 8.188 0 11.31L171.3 256L317.7 402.3z"></path>
                </svg>
              </div>
              <div className="d-flex align-items-center">
                <label className="gender-button" htmlFor="male">
                  عام
                </label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="d-none female"
                />
                <label className="gender-button" htmlFor="male">
                  سادات
                </label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="d-none male"
                />
              </div>
              <input className="input" type="number" placeholder="مبلغ" />
            </div>
          ))}
          <button
            className="btn btn-primary"
            onClick={handlerAdd}
            disabled={value.length >= maxItems} // Disable button when limit is reached
          >
            افزودن
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
