import cls from "./footer.module.scss";
import Image from "next/image";
import footerLogo from "@/public/Logo2.png";
import appstore from "@/public/assets/icon/appstore.svg";
import googleplay from "@/public/assets/icon/googleplay.svg";
import { FacebookIcon, InstagramIcon, TelegramIcon } from "@/components/svg";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={cls.footer_wrapper}>
      <div className="container">
        <div className={cls.footer_box}>
          <div className={cls.footer_logo}>
            <Image src={footerLogo} alt="Footer logo" />
          </div>
          <ul className={cls.footer_nav}>
            <li className={cls.footer_item}>
              <Link className={cls.footer_link} href="#">
                Главная
              </Link>
            </li>
            <li className={cls.footer_item}>
              <Link className={cls.footer_link} href="#">
              Филиалы
              </Link>
            </li>
            <li className={cls.footer_item}>
              <Link className={cls.footer_link} href="#">
              Вакансии
              </Link>
            </li>

            {/* <li className={cls.footer_item}>
							<Link className={cls.footer_link} href="#">
								Biz haqimizda
							</Link>
						</li> */}
            <li className={cls.footer_item}>
              <Link className={cls.footer_link} href="#">
              Контакты
              </Link>
            </li>
          </ul>
          {/* <ul className={cls.footer_list}>
						<div className={cls.list_items}>
							<li className={cls.list_item}>
								<Link href="#" target="_blank">
									<Image src={appstore} alt="app store"/>
								</Link>
							</li>
							<li className={cls.list_item}>
								<Link href="#" target="_blank">
									<Image src={googleplay} alt="google play"/>
								</Link>
							</li>
						</div>
					</ul> */}
        </div>
        <div className={cls.footer_socialBox}>
          <p className={cls.footer_text}>&copy; Nomdor 2021</p>
          <ul className={cls.footer_socials}>
            <li className={cls.social_item}>
              <Link
                href="https://www.instagram.com/nomdor_somsa_osh_markazi/"
                className={cls.social_link}
                target="_blank"
              >
                <InstagramIcon />
              </Link>
            </li>
            <li className={cls.social_item}>
              <Link
                href="https://www.facebook.com/profile.php?id=100090314090697"
                className={cls.social_link}
                target="_blank"
              >
                <FacebookIcon />
              </Link>
            </li>
            <li className={cls.social_item}>
              <Link
                className={cls.social_link}
                href="https://t.me/nomdor_Сомса_Ош_markazi_bot"
                target="_blank"
              >
                <TelegramIcon />
              </Link>
            </li>
          </ul>
        </div>
        <div className={cls.footer_offert}>
          <Link
            target="_blank"
            href="http://inch-soft.uz/"
            className={cls.offert_link}
          >
            supported by "inch-soft"
          </Link>
        </div>
      </div>
    </div>
  );
}
