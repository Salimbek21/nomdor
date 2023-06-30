import cls from "./career-stories.module.scss";
import worker from "@/public/assets/images/worker.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import Image from "next/image";

const CareerStories = () => {
	return (
		<div className="container">
			<div className={cls.career_stories_wrapper}>
				<div className={cls.title}>
					<h1>Истории карьерного роста</h1>
				</div>
				<Swiper
					spaceBetween={10}
					navigation={{
						prevEl: `.${cls.prev_btnCar}`,
						nextEl: `.${cls.next_btnCar}`,
					}}
					modules={[Navigation]}
					className="mySwiper"
				>
					<SwiperSlide>
						<div className={cls.career_stories_card}>
							<div className={cls.career_inner}>
								<div className={cls.career_img}>
									<div className={cls.img_container}>
										<Image src={worker} alt="Worker" />
									</div>
								</div>
								<div className={cls.career_info}>
									<div className={cls.info_wrapper}>
										<h2 className={cls.title}>Шолатифов Абдуллох</h2>
										<p className={cls.description}>
											<div>
												<p>
													в 2018 году приступил к работе кассира в филиале на
													EVOS Паркентский, где показал себя целеустремленным,
													искренне любящим свою работу сотрудником, после чего
													начал быстрый рост по карьерной лестнице:
												</p>
												<p>&bull; Старший кассир в 2019 г.</p>
												<p>&bull; Старший кассир в 2019 г.</p>
												<p>&bull; Старший кассир в 2019 г.</p>
												<p>&bull; Старший кассир в 2019 г.</p>
												<p>
													Сегодня Абдуллох успешно исполняет на должности
													Консультанта по производству в городе Ташкент и под
													его операционное руководство вверено несколько крупных
													ресторанов сети. Вся команда ценит профессиональные
													качества Абдуллоха и уверена в его дальнейшем
													карьерном продвижении.
												</p>
											</div>
										</p>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={cls.career_stories_card}>
							<div className={cls.career_inner}>
								<div className={cls.career_img}>
									<div className={cls.img_container}>
										<Image src={worker} alt="Worker" />
									</div>
								</div>
								<div className={cls.career_info}>
									<div className={cls.info_wrapper}>
										<h2 className={cls.title}>Шолатифов Абдуллох</h2>
										<p className={cls.description}>
											<div>
												<p>
													в 2018 году приступил к работе кассира в филиале на
													EVOS Паркентский, где показал себя целеустремленным,
													искренне любящим свою работу сотрудником, после чего
													начал быстрый рост по карьерной лестнице:
												</p>
												<p>&bull; Старший кассир в 2019 г.</p>
												<p>&bull; Старший кассир в 2019 г.</p>
												<p>&bull; Старший кассир в 2019 г.</p>
												<p>&bull; Старший кассир в 2019 г.</p>
												<p>
													Сегодня Абдуллох успешно исполняет на должности
													Консультанта по производству в городе Ташкент и под
													его операционное руководство вверено несколько крупных
													ресторанов сети. Вся команда ценит профессиональные
													качества Абдуллоха и уверена в его дальнейшем
													карьерном продвижении.
												</p>
											</div>
										</p>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
				<div className={cls.career_navigation}>
					<button className={`${cls.btn} ${cls.prev_btnCar}`}>
						<svg
							focusable="false"
							aria-hidden="true"
							viewBox="0 0 24 24"
							data-testid="ArrowBackIosIcon"
						>
							<path d="M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"></path>
						</svg>
					</button>
					<button className={`${cls.btn} ${cls.next_btnCar}`}>
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

export default CareerStories;
