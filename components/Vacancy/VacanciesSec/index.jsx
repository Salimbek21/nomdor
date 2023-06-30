import { Swiper, SwiperSlide } from "swiper/react";
import cls from "./vacancy-sec.module.scss";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";

const VacancySec = () => {
	return (
		<div className={cls.jobs_wrapper}>
			<div className="container">
				<div className={cls.jobs_textItem}>
					<h1 className={cls.title}>Вакансии</h1>
					<p className={cls.desc}>
						Мы по праву гордимся, что на сегодняшний день наша компания является
						одним из крупнейших работодателей для студентов и молодежи
						Узбекистана, благодаря тем условиям, которые мы создаем для наших
						сотрудников.
					</p>
				</div>
				<div className={cls.vacancies_wrapper}>
					<Swiper
						spaceBetween={20}
						loop={true}
						autoplay={{
							delay: 25000,
							disableOnInteraction: false,
						}}
						navigation={{
							prevEl: `.${cls.prev_btnVaca}`,
							nextEl: `.${cls.next_btnVaca}`,
						}}
						modules={[Autoplay, Navigation]}
						className="mySwiper"
						breakpoints={{
							0: {
								slidesPerView: 1,
								spaceBetween: 20,
							},
							750: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							1440: {
								slidesPerView: 3,
								spaceBetween: 20,
							},
						}}
					>
						<SwiperSlide className={cls.vacancy_card}>
							<div className={cls.card}>
								<div>
									<div className={cls.title}>Оператор call-центра</div>
								</div>
								<div className={cls.vacancy_items}>
									<ul>
										<li>опыт работы не требуется, мы всему научим;</li>
										<li>опыт работы не требуется, мы всему научим;</li>
										<li>опыт работы не требуется, мы всему научим;</li>
										<li>опыт работы не требуется, мы всему научим;</li>
										<li>опыт работы не требуется, мы всему научим;</li>
									</ul>
								</div>
								<div className={cls.vacancy_btns}>
									<button className={cls.btn_outline}>Подробнее</button>
									<button className={cls.btn_primary}>Откликнуться</button>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className={cls.vacancy_card}>
							<div className={cls.card}>
								<div>
									<div className={cls.title}>Оператор call-центра</div>
								</div>
								<div className={cls.vacancy_items}>
									<ul>
										<li>опыт работы не требуется, мы всему научим;</li>
										<li>опыт работы не требуется, мы всему научим;</li>
										<li>опыт работы не требуется, мы всему научим;</li>
										<li>опыт работы не требуется, мы всему научим;</li>
										<li>опыт работы не требуется, мы всему научим;</li>
									</ul>
								</div>
								<div className={cls.vacancy_btns}>
									<button className={cls.btn_outline}>Подробнее</button>
									<button className={cls.btn_primary}>Откликнуться</button>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className={cls.vacancy_card}>
							<div className={cls.card}>
								<div>
									<div className={cls.title}>Оператор call-центра</div>
								</div>
								<div className={cls.vacancy_items}>
									<ul>
										<li>опыт работы не требуется, мы всему научим;</li>
										<li>опыт работы не требуется, мы всему научим;</li>
										<li>опыт работы не требуется, мы всему научим;</li>
										<li>опыт работы не требуется, мы всему научим;</li>
										<li>опыт работы не требуется, мы всему научим;</li>
									</ul>
								</div>
								<div className={cls.vacancy_btns}>
									<button className={cls.btn_outline}>Подробнее</button>
									<button className={cls.btn_primary}>Откликнуться</button>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className={cls.vacancy_card}>
							<div className={cls.card}>
								<div>
									<div className={cls.title}>Оператор call-центра</div>
								</div>
								<div className={cls.vacancy_items}>
									<ul>
										<li>опыт работы не требуется, мы всему научим;</li>
										<li>опыт работы не требуется, мы всему научим;</li>
										<li>опыт работы не требуется, мы всему научим;</li>
										<li>опыт работы не требуется, мы всему научим;</li>
										<li>опыт работы не требуется, мы всему научим;</li>
									</ul>
								</div>
								<div className={cls.vacancy_btns}>
									<button className={cls.btn_outline}>Подробнее</button>
									<button className={cls.btn_primary}>Откликнуться</button>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
					<div className={cls.vacancy_navigation}>
						<button className={`${cls.btn} ${cls.prev_btnVaca}`}>
							<svg
								focusable="false"
								aria-hidden="true"
								viewBox="0 0 24 24"
								data-testid="ArrowBackIosIcon"
							>
								<path d="M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"></path>
							</svg>
						</button>
						<button className={`${cls.btn} ${cls.next_btnVaca}`}>
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
		</div>
	);
};

export default VacancySec;
