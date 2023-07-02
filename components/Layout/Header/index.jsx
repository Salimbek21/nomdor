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
							<Image src={logo} alt="logo" />
						</div>
						<ul className={cls.nav_items}>
							<li className={cls.nav_item}>
								<Link className={cls.nav_link} href="/">
									Главная
								</Link>
							</li>
							<li className={cls.nav_item}>
								<Link className={cls.nav_link} href="/branches">
									Филиалы
								</Link>
							</li>
							<li className={cls.nav_item}>
								<Link className={cls.nav_link} href="/vacancy">
									Вакансии
								</Link>
							</li>

							<li className={cls.nav_item}>
								<Link className={cls.nav_link} href="#">
									О нас
								</Link>
							</li>
							<li className={cls.nav_item}>
								<Link className={cls.nav_link} href="/contacts">
									Контакты
								</Link>
							</li>
						</ul>
					</div>
					<div className={cls.right}>
						<div className={cls.buttons}>
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
