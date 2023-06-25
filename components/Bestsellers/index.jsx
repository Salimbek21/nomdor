import { Swiper, SwiperSlide } from "swiper/react";
import cls from "./bestsellers.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import { Autoplay, Navigation, EffectCoverflow } from "swiper";
import Card from "../Card";

const Bestsellers = (props) => {
	return (
		<div className={cls.bestsellers_wrapper}>
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
						prevEl: `.${cls.prev_btn}`,
						nextEl: `.${cls.next_btn}`,
					}}
					modules={[EffectCoverflow, Autoplay, Navigation]}
					className="mySwiper"
				>
					<SwiperSlide className={cls.seller_swiper_slide}>
						<Card innerData={props} />
					</SwiperSlide>
					<SwiperSlide className={cls.seller_swiper_slide}>
						<Card innerData={props} />
					</SwiperSlide>
					<SwiperSlide className={cls.seller_swiper_slide}>
						<Card innerData={props} />
					</SwiperSlide>
					<SwiperSlide className={cls.seller_swiper_slide}>
						<Card innerData={props} />
					</SwiperSlide>
					<SwiperSlide className={cls.seller_swiper_slide}>
						<Card innerData={props} />
					</SwiperSlide>
					<SwiperSlide className={cls.seller_swiper_slide}>
						<Card innerData={props} />
					</SwiperSlide>
					<SwiperSlide className={cls.seller_swiper_slide}>
						<Card innerData={props} />
					</SwiperSlide>
					<SwiperSlide className={cls.seller_swiper_slide}>
						<Card innerData={props} />
					</SwiperSlide>
					<SwiperSlide className={cls.seller_swiper_slide}>
						<Card innerData={props} />
					</SwiperSlide>
					<SwiperSlide className={cls.seller_swiper_slide}>
						<Card innerData={props} />
					</SwiperSlide>
					<SwiperSlide className={cls.seller_swiper_slide}>
						<Card innerData={props} />
					</SwiperSlide>
					<SwiperSlide className={cls.seller_swiper_slide}>
						<Card innerData={props} />
					</SwiperSlide>
				</Swiper>
				<div className={cls.banner_navigation}>
					<button className={`${cls.btn} ${cls.prev_btn}`}>
						<svg
							focusable="false"
							aria-hidden="true"
							viewBox="0 0 24 24"
							data-testid="ArrowBackIosIcon"
						>
							<path d="M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"></path>
						</svg>
					</button>
					<button className={`${cls.btn} ${cls.next_btn}`}>
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
