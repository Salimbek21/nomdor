import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import cls from "./bestsellers.module.scss";
import { url } from "@/api";
import CardLoader from "../CardLoader";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import { Autoplay, Navigation, EffectCoverflow } from "swiper";
import Card from "../Card";

const Bestsellers = () => {
  const bestData = [
    {
      name: "Гушт сомса",
      title: "Говядина",
      price: "10 000",
      img: "/xitimg/goshtsomsa.webp",
    },
    {
      name: "Жаз 100 гр (Кусковой)",
      title: "",
      price: "18 000",
      img: "/shashlik/jaz.webp",
    },
    {
      name: "Сабзавот ва гуштли сомса",
      title: "Oвощной сомса",
      price: "11 000",
      img: "/xitimg/sabzovotsomsa.webp",
    },
    {
      name: "Туй оши 0,8",
      title: "",
      price: "34 000",
      img: "/xitimg/toyosh.webp",
    },
    {
      name: "Чойхона палов 0.8",
      title: "",
      price: "36 000",
      img: "/xitimg/choyxonaosh.webp",
    },
    {
      name: "Кузикорин ва пишлокли сомса",
      title: "Грибы",
      price: "7 000",
      img: "/xitimg/qoziqornsomsa.webp",
    },
  ];
  return (
    <div id="bestSeller" className={cls.bestsellers_wrapper}>
      <div className="container">
        <h1 className={cls.title}>Хиты продаж</h1>
        <Swiper
          spaceBetween={60}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 25000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: "auto",
              spaceBetween: 20,
            },
            320: {
              slidesPerView: "auto",
              spaceBetween: 20,
            },
            400: {
              slidesPerView: "auto",
              spaceBetween: 40,
            },
            640: {
              slidesPerView: "auto",
              spaceBetween: 60,
            },
            1000: {
              slidesPerView: "auto",
              spaceBetween: 70,
            },
            1440: {
              slidesPerView: "auto",
              spaceBetween: 80,
            },
          }}
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={{
            prevEl: ".prev_button1",
            nextEl: ".next_button1",
          }}
          modules={[EffectCoverflow, Autoplay, Navigation]}
          className="mySwiper"
        >
          {bestData?.length &&
            bestData.map((item) => (
              <SwiperSlide key={item?.id} className={cls.seller_swiper_slide}>
                <Card
                  name={item.name}
                  description={item?.title}
                  price={item.price}
                  img={item?.img}
                />
              </SwiperSlide>
            ))}
        </Swiper>
        <div className={cls.banner_navigation}>
          <button className="prev_button1">
            <svg
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ArrowBackIosIcon"
            >
              <path d="M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"></path>
            </svg>
          </button>
          <button className="next_button1">
            <svg
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ArrowForwardIosIcon"
            >
              <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bestsellers;
