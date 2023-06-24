import Image from "next/image";
import cls from "./header.module.scss";
import logo from "@/public/assets/icon/logo.svg";
import basket from "@/public/assets/icon/basket.svg";
import ru from "@/public/assets/icon/ru.svg";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <div className={cls.wrapper}>
      <div className="container">
        <div className={cls.header}>
          <div className={cls.left}>
            <div className={cls.logo}>
              <Image src={logo} />
              <div className={cls.vaqtinchalik}>EVOS</div>
            </div>
            <ul className={cls.nav_items}>
              <li className={cls.nav_item}>
                <Link className={cls.nav_link} href="#">
                  Главная
                </Link>
              </li>
              <li className={cls.nav_item}>
                <Link className={cls.nav_link} href="#">
                  Филиалы
                </Link>
              </li>
              <li className={cls.nav_item}>
                <Link className={cls.nav_link} href="#">
                  Вакансии
                </Link>
              </li>
              <li className={cls.nav_item}>
                <Link className={cls.nav_link} href="#">
                  Новости
                </Link>
              </li>
              <li className={cls.nav_item}>
                <Link className={cls.nav_link} href="#">
                  О нас
                </Link>
              </li>
              <li className={cls.nav_item}>
                <Link className={cls.nav_link} href="#">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          <div className={cls.right}>
            <div className={cls.buttons}>
              <button className={cls.qrApp}>QR app</button>
              <div className={cls.basket}>
                <button className={cls.basket_btn}>
                  <Image src={basket} />
                  <p className={cls.basket_text}>Корзина</p>
                </button>
              </div>
              <div className={cls.change_language}>
                <Image src={ru} />
                <div className={cls.arrow}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.59 8.58984L12 13.1698L7.41 8.58984L6 9.99984L12 15.9998L18 9.99984L16.59 8.58984Z"
                      fill="#323232"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className={cls.user}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 25"
                  fill="#000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6.5C13.1 6.5 14 7.4 14 8.5C14 9.6 13.1 10.5 12 10.5C10.9 10.5 10 9.6 10 8.5C10 7.4 10.9 6.5 12 6.5ZM12 16.5C14.7 16.5 17.8 17.79 18 18.5H6C6.23 17.78 9.31 16.5 12 16.5ZM12 4.5C9.79 4.5 8 6.29 8 8.5C8 10.71 9.79 12.5 12 12.5C14.21 12.5 16 10.71 16 8.5C16 6.29 14.21 4.5 12 4.5ZM12 14.5C9.33 14.5 4 15.84 4 18.5V20.5H20V18.5C20 15.84 14.67 14.5 12 14.5Z"
                    fill="#000"
                  ></path>
                </svg>
              </div>
              <div className={cls.burger_menu}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
                    fill="#323232"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
