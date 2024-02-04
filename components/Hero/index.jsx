import { Swiper, SwiperSlide } from "swiper/react";
import cls from "./hero.module.scss";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const data = [
    {
      name: "Ochiq ish o'rini",
      title: "Kuryerlikga ishga taklif etamiz",
      img: "/hero.png",
    },
    {
      name: "Nomdordan mahsus so'msalar",
      title: "Tovuqli va Sirli",
      img: "/scndHerp.webp",
    },
    {
      name: "Nomdordan shashlik",
      title: "Jaz shashligimizni ta'tib ko'rganmisiz?v",
      img: "/heroThrd.webp",
    },
  ];
  return (
    <>
      <div className={cls.wrapper}>
        <div className="container">
          <Swiper
            spaceBetween={30}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 2500000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: `.prev_button`,
              nextEl: `.next_button`,
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {data.map((item) => (
              <SwiperSlide className={cls.swiper_item}>
                <div className={cls.left}>
                  <div className={cls.box}>
                    <div className={cls.info}>
                      <h2 className={cls.title}>{item.name}</h2>
                      <div className={cls.desc}>{item.title}</div>
                    </div>
                    <div className={cls.btn_review}>
                      <div className={cls.btn_box}>
                        <Link href="#bestSeller">
                          <button className={cls.btn_head}>Наше меню </button>
                        </Link>
                        <Link
                          href="https://t.me/nomdor_somsa_osh_markazi_bot"
                          target="_blank"
                        >
                          <button
                            className={`${cls.btn_head} ${cls.btn_head1}`}
                          >
                            Наш бот{" "}
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
                    </div>
                  </div>
                </div>
                <div className={cls.right}>
                  <div className={cls.img_wrapper}>
                    <div className={cls.img_box}>
                      <Image
                        width={633}
                        height={633}
                        src={item.img}
                        alt="Hero img"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={cls.banner_navigation}>
            <button className="prev_button">
              <svg
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                width="20"
                data-testid="ArrowBackIosIcon"
              >
                <path d="M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"></path>
              </svg>
            </button>
            <button className="next_button">
              <svg
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="ArrowForwardIosIcon"
                width="20"
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
                <Link className={cls.menu_link} href="#bestSeller">
                  Хиты продаж
                </Link>
              </li>
              <li className={cls.menu_item}>
                <Link className={cls.menu_link} href="#plov">
                  Ош
                </Link>
              </li>
              <li className={cls.menu_item}>
                <Link className={cls.menu_link} href="#Сомса">
                  Сомса
                </Link>
              </li>
              <li className={cls.menu_item}>
                <Link className={cls.menu_link} href="#salati">
                  Салаты
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
