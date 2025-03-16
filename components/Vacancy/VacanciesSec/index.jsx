import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import cls from "./vacancy-sec.module.scss";

const VacancySec = () => {
  const vacancies = [
    {
      title: "Yetkazib beruvchi",
      description:
        "- Piyoda, velosipedda / avtotransportda, mashinada - Toshkent shahrini yaxshi bilish - Android smartfoniga ega bo'lish - Aniqlik va mas'uliyat # - Buyurtmani o'z vaqtida yetkazib berish",
    },
    { title: "Tozalovchi", description: "" },
    { title: "Ofitsiantlar", description: "" },
    { title: "Idish yuvuvchi", description: "" },
  ];

  return (
    <div className={cls.jobs_wrapper}>
      <div className="container">
        <div className={cls.jobs_textItem}>
          <h1 className={cls.title}>Вакансии</h1>
        </div>
        <div className={cls.vacancies_wrapper}>
          <Swiper
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: `.${cls.prev_btnVaca}`,
              nextEl: `.${cls.next_btnVaca}`,
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20 },
              750: { slidesPerView: 2, spaceBetween: 20 },
              1440: { slidesPerView: 3, spaceBetween: 20 },
            }}
          >
            {vacancies.map((vacancy, index) => (
              <SwiperSlide key={index} className={cls.vacancy_card}>
                <div className={cls.card}>
                  <div className={cls.title}>{vacancy.title}</div>
                  <div className={cls.vacancy_items}>{vacancy.description}</div>
                  <div className={cls.vacancy_btns}>
                    <button className={cls.btn_outline}>Подробнее</button>
                    <button className={cls.btn_primary}>Откликнуться</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={cls.vacancy_navigation}>
            <button className={`${cls.btn} ${cls.prev_btnVaca}`}>
              <svg viewBox="0 0 24 24">
                <path d="M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
              </svg>
            </button>
            <button className={`${cls.btn} ${cls.next_btnVaca}`}>
              <svg viewBox="0 0 24 24">
                <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacancySec;
