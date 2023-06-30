import Link from "next/link";
import cls from "./contacts.module.scss";
import { Map, Placemark, YMaps, ZoomControl } from "@pbe/react-yandex-maps";

const Contacts = () => {
  return (
    <div className="container">
      <div className={cls.contacts_wrapper}>
        <div className={cls.contacts}>
          <div className={cls.left}>
            <div className={cls.info_wrapper}>
              <div className={cls.info}>
                <h1 className={cls.title}>Контакты</h1>
                <div className={cls.call_center}>
                  <p className={cls.call_title}>Call-центр</p>
                  <span className={cls.numbers}>
                    <Link className={cls.phoneNumbers} href="tel:+998712031212">
                      +998 71-203-12-12
                    </Link>
                    <Link className={cls.phoneNumbers} href="tel:+998712031212">
                      +998 71-203-12-12
                    </Link>
                  </span>
                </div>
                <div className={cls.title_info}>
                  <p className={cls.title}>Телефоны доставки:</p>
                  <div className={cls.info}>
                    <div className={cls.info_inner}>
                      <Link
                        href="tel:+998712031212"
                        className={cls.phoneNumbers}
                      >
                        +998 71-203-12-12 (единый номер доставки)
                      </Link>
                    </div>
                  </div>
                </div>
                <hr className={cls.line} />
                <div className={cls.title_info}>
                  <p className={cls.title}>Адрес офиса:</p>
                  <div className={cls.info}>
                    <div className={cls.info_inner}>
                      <div className={cls.phoneNumbers}>
                        г. Ташкент, 100066, Чиланзарский р-н., тупик Фурката,
                        175
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cls.title_info}>
                  <p className={cls.title}>Часы работы офиса:</p>
                  <div className={cls.info}>
                    <div className={cls.info_inner}>
                      <div className={cls.phoneNumbers}>
                        9:00 – 18:00 Выходные: суббота, воскресенье
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cls.title_info}>
                  <p className={cls.title}>Электронная почта:</p>
                  <div className={cls.info}>
                    <div className={cls.info_inner}>
                      <div className={cls.phoneNumbers}>
                        HR – rabota@evos.uz Маркетинг – marketing@evos.uz
                      </div>
                    </div>
                  </div>
                </div>
                <span className={cls.delivery_link}>
                  Вы можете заказать доставку через наш бот:{"  "}
                  <Link
                    href="https://t.me/evosdeliverybot"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://t.me/evosdeliverybot
                  </Link>
                  .
                </span>
              </div>
            </div>
          </div>
          <div className={cls.right}>
            <div className={cls.maps}>
              <YMaps query={{ lang: "en_RU" }}>
                <Map
                  width={"100%"}
                  height={"100%"}
                  defaultState={{
                    center: [41.2646, 69.2163],
                    zoom: 9,
                    controls: [],
                  }}
                >
                  <ZoomControl options={{ float: "right" }} />
                  <Placemark geometry={[41.2646, 69.2163]} />
                </Map>
              </YMaps>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
