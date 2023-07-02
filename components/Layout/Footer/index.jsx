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
							<Link className={cls.footer_link} href="/">
								Главная
							</Link>
						</li>
						<li className={cls.footer_item}>
							<Link className={cls.footer_link} href="/branches">
								Филиалы
							</Link>
						</li>
						<li className={cls.footer_item}>
							<Link className={cls.footer_link} href="/vacancy">
								Вакансии
							</Link>
						</li>
						<li className={cls.footer_item}>
							<Link className={cls.footer_link} href="#">
								О нас
							</Link>
						</li>
						<li className={cls.footer_item}>
							<Link className={cls.footer_link} href="/contacts">
								Контакты
							</Link>
						</li>
					</ul>
				</div>
				<div className={cls.footer_socialBox}>
					<p className={cls.footer_text}>
						&copy; Nomdor 2021
					</p>
					<ul className={cls.footer_socials}>
						<li className={cls.social_item}>
							<Link
								href="#"
								className={cls.social_link}
								href="#"
								target="_blank"
							>
								<InstagramIcon />
							</Link>
						</li>
						<li className={cls.social_item}>
							<Link
								href="#"
								className={cls.social_link}
								href="#"
								target="_blank"
							>
								<FacebookIcon />
							</Link>
						</li>
						<li className={cls.social_item}>
							<Link
								href="#"
								className={cls.social_link}
								href="#"
								target="_blank"
							>
								<TelegramIcon />
							</Link>
						</li>
					</ul>
				</div>
				<div className={cls.footer_offert}>
					<Link href="#" className={cls.offert_link} target="_blank">
						Публичная оферта
					</Link>
				</div>
			</div>
		</div>
	);
}
