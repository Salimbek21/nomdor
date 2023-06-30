import { Swiper, SwiperSlide } from "swiper/react";
import cls from "./hero.module.scss";
import bannerIcon1 from "@/public/assets/icon/bannerIcon1.svg";
import bannerIcon2 from "@/public/assets/icon/bannerIcon2.svg";
import bannerIcon3 from "@/public/assets/icon/bannerIcon3.svg";
import bannerIcon4 from "@/public/assets/icon/bannerIcon4.svg";
import bannerIcon5 from "@/public/assets/icon/bannerIcon5.svg";
import user1 from "@/public/assets/icon/user1.svg";
import user2 from "@/public/assets/icon/user2.svg";
import user3 from "@/public/assets/icon/user3.svg";
import morojenoe from "@/public/assets/images/morojenoe.jpg";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
	return (
		<>
			<div className={cls.wrapper}>
				<div className="container">
					<Swiper
						spaceBetween={30}
						loop={true}
						centeredSlides={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						navigation={{
							prevEl: `.${cls.prev_button}`,
							nextEl: `.${cls.next_button}`,
						}}
						modules={[Autoplay, Navigation]}
						className="mySwiper"
					>
						<SwiperSlide className={cls.swiper_item}>
							<div className={cls.left}>
								<div className={cls.box}>
									<div className={cls.info}>
										<h2 className={cls.title}>Вкусно. Быстро. Качественно.</h2>
										<div className={cls.banner_icons}>
											<Image src={bannerIcon1} alt="banner icon" />
											<Image src={bannerIcon2} alt="banner icon" />
											<Image src={bannerIcon3} alt="banner icon" />
											<Image src={bannerIcon4} alt="banner icon" />
											<Image src={bannerIcon5} alt="banner icon" />
										</div>
										<div className={cls.desc}>
											Любимые блюда и восточное гостеприимство
										</div>
									</div>
									<div className={cls.btn_review}>
										<div className={cls.btn_box}>
											<Link href="#">
												<button className={cls.btn_head}>Наше меню</button>
											</Link>
											<Link href="#">
												<button className={`${cls.btn_head} ${cls.btn_head1}`}>
													APP Evos
													<svg
														focusable="false"
														aria-hidden="true"
														viewBox="0 0 24 24"
														data-testid="ArrowForwardIcon"
													>
														<path
															fill="#ffffff"
															d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
														></path>
													</svg>
												</button>
											</Link>
										</div>
										<div className={cls.user_box}>
											<div className={cls.user_imgs}>
												<Image src={user1} alt="user" />
												<Image src={user2} alt="user" />
												<Image src={user3} alt="user" />
											</div>
											<div className={cls.user_info}>
												<span>200K+</span> положительных отзывов каждый месяц
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={cls.right}>
								<div className={cls.img_wrapper}>
									<div className={cls.img_box}>
										<Image src={morojenoe} alt="morojenoe" />
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className={cls.swiper_item}>
							<div className={cls.left}>
								<div className={cls.box}>
									<div className={cls.info}>
										<h2 className={cls.title}>Вкусно. Быстро. Качественно.</h2>
										<div className={cls.banner_icons}>
											<Image src={bannerIcon1} alt="banner icon" />
											<Image src={bannerIcon2} alt="banner icon" />
											<Image src={bannerIcon3} alt="banner icon" />
											<Image src={bannerIcon4} alt="banner icon" />
											<Image src={bannerIcon5} alt="banner icon" />
										</div>
										<div className={cls.desc}>
											Любимые блюда и восточное гостеприимство
										</div>
									</div>
									<div className={cls.btn_review}>
										<div className={cls.btn_box}>
											<Link href="#">
												<button className={cls.btn_head}>Наше меню</button>
											</Link>
											<Link href="#">
												<button className={`${cls.btn_head} ${cls.btn_head1}`}>
													APP Evos
													<svg
														focusable="false"
														aria-hidden="true"
														viewBox="0 0 24 24"
														data-testid="ArrowForwardIcon"
													>
														<path
															fill="#ffffff"
															d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
														></path>
													</svg>
												</button>
											</Link>
										</div>
										<div className={cls.user_box}>
											<div className={cls.user_imgs}>
												<Image src={user1} alt="user" />
												<Image src={user2} alt="user" />
												<Image src={user3} alt="user" />
											</div>
											<div className={cls.user_info}>
												<span>200K+</span> положительных отзывов каждый месяц
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className={cls.right}>
								<div className={cls.img_wrapper}>
									<div className={cls.img_box}>
										<Image src={morojenoe} alt="morojenoe" />
									</div>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
					<div className={cls.banner_navigation}>
						<button className={`${cls.btn} ${cls.prev_button}`}>
							<svg
								focusable="false"
								aria-hidden="true"
								viewBox="0 0 24 24"
								data-testid="ArrowBackIosIcon"
							>
								<path d="M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"></path>
							</svg>
						</button>
						<button className={`${cls.btn} ${cls.next_button}`}>
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
			<div className={cls.menu_bottom}>
				<div className="container">
					<div className={cls.menu_listTop}>
						<ul className={cls.menu_list}>
							<li className={cls.menu_item}>
								<Link className={cls.menu_link} href="#">
									Хиты продаж
								</Link>
							</li>
							<li className={cls.menu_item}>
								<Link className={cls.menu_link} href="#">
								Ош
								</Link>
							</li>
							<li className={cls.menu_item}>
								<Link className={cls.menu_link} href="#">
								Сомса

								</Link>
							</li>
							<li className={cls.menu_item}>
								<Link className={cls.menu_link} href="#">
									Капучино
								</Link>
							</li>
							<li className={cls.menu_item}>
								<Link className={cls.menu_link} href="#">
									Латте
								</Link>
							</li>
							<li className={cls.menu_item}>
								<Link className={cls.menu_link} href="#">
									Шаурма
								</Link>
							</li>
							<li className={cls.menu_item}>
								<Link className={cls.menu_link} href="#">
									Бургеры
								</Link>
							</li>
							<li className={cls.menu_item}>
								<Link className={cls.menu_link} href="#">
									Хот-Дог
								</Link>
							</li>
							<li className={cls.menu_item}>
								<Link className={cls.menu_link} href="#">
									Блюда
								</Link>
							</li>
							<li className={cls.menu_item}>
								<Link className={cls.menu_link} href="#">
									COMBO
								</Link>
							</li>
							<li className={cls.menu_item}>
								<Link className={cls.menu_link} href="#">
									Десерты
								</Link>
							</li>
							<li className={cls.menu_item}>
								<Link className={cls.menu_link} href="#">
									Соусы, добавки
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
