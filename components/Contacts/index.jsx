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
                <h1 className={cls.title}>Kontaktlar</h1>
                <div className={cls.call_center}>
                  <p className={cls.call_title}>Qo'ng'iroqlar markazi</p>
                  <span className={cls.numbers}>
                    <Link className={cls.phoneNumbers} href="tel:+998712070404">
                      +998 71-207 04-04
                    </Link>
                  </span>
                </div>

                <hr className={cls.line} />

                <div className={cls.title_info}>
                  <p className={cls.title}>Ish vaqti:</p>
                  <div className={cls.info}>
                    <div className={cls.info_inner}>
                      <div className={cls.phoneNumbers}>24/7</div>
                    </div>
                  </div>
                </div>
                <span className={cls.delivery_link}>
                  Bizning bot orqali yetkazib berishga buyurtma berishingiz
                  mumkin:{"  "}
                  <Link
                    href="https://t.me/nomdorsomsa_bot"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://t.me/nomdorsomsa_bot
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
                  height={"350px"}
                  defaultState={{
                    center: [41.280312, 69.198924],
                    zoom: 9,
                    controls: [],
                  }}
                >
                  <ZoomControl options={{ float: "right" }} />

                  <Placemark geometry={[41.280312, 69.198924]} />
                  <Placemark geometry={[41.370866, 69.313412]} />
                  <Placemark geometry={[41.292206, 69.221438]} />
                  <Placemark geometry={[41.304387, 69.280868]} />
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
