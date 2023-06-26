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
							<Image src={logo} alt="logo"/>
						</div>
						<ul className={cls.nav_items}>
							<li className={cls.nav_item}>
								<Link className={cls.nav_link} href="#">
									Главная
								</Link>
							</li>
							<li className={cls.nav_item}>
								<Link className={cls.nav_link} href="/branches">
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
									<Image src={basket} alt="basket"/>
									<p className={cls.basket_text}>Корзина</p>
								</button>
							</div>
							<div className={cls.change_language}>
								<Image src={ru} alt="russian"/>
								<div className={cls.arrow}>
									<ArrowIcon />
								</div>
								<div className={cls.languages_wrapper}>
									<div className={cls.langlist}>
										<Link className={cls.lang_list} href="#">
											<Image src={uz} alt="uzbekistan" />
											<h4 className={cls.lang_text}>O'zbekcha</h4>
										</Link>
										<Link className={cls.lang_list} href="#">
											<Image src={ru} alt="russian" />
											<h4 className={cls.lang_text}>Русский</h4>
										</Link>
										<Link className={cls.lang_list} href="#">
											<Image src={en} alt="english" />
											<h4 className={cls.lang_text}>English</h4>
										</Link>
									</div>
								</div>
							</div>
							<div className={cls.user}>
								<UserIcon />
							</div>
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
