import { useState } from "react";
import Image from "next/image";
import cls from "./header.module.scss";
import logo from "@/public/Logo2.png";
import basket from "@/public/assets/icon/basket.svg";
import uz from "@/public/assets/icon/uz.svg";
import ru from "@/public/assets/icon/ru.svg";
import en from "@/public/assets/icon/en.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import MobileHeader from "./MobileHeader";
import {
  ArrowIcon,
  BurgerMenuIcon,
  EnIcon,
  RuIcon,
  UserIcon,
  UzIcon,
} from "@/components/svg";

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cls.wrapper}>
      <div className="container">
        <div className={cls.header}>
          <div className={cls.left}>
            <div className={cls.logo}>
              <Link className={cls.nav_link} href="/">
                <Image src={logo} alt="logo" />
              </Link>
            </div>
            <ul className={cls.nav_items}>
              <li className={cls.nav_item}>
                <Link className={cls.nav_link} href="/">
                  Asosiy
                </Link>
              </li>
              <li className={cls.nav_item}>
                <Link className={cls.nav_link} href="/branches">
                  Filiallar
                </Link>
              </li>
              <li className={cls.nav_item}>
                <Link className={cls.nav_link} href="/vacancy">
                  Vakantlar
                </Link>
              </li>

              {/* <li className={cls.nav_item}>
                <Link className={cls.nav_link} href="#">
                  Biz haqimizda
                </Link>
              </li> */}
              <li className={cls.nav_item}>
                <Link className={cls.nav_link} href="/contacts">
                  Kontaktlar
                </Link>
              </li>
            </ul>
          </div>
          <div className={cls.right}>
            <div className={cls.buttons}>
              <div className={cls.basket}></div>

              <div
                onClick={() => {
                  setIsOpen(true);
                }}
                className={cls.burger_menu}
              >
                <BurgerMenuIcon />
              </div>
              {isOpen && <MobileHeader closeNav={setIsOpen} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
