import Image from "next/image";
import Link from "next/link";
import cls from "./mobile-header.module.scss";
import logo from "@/public/assets/icon/logo.svg";
import {
	AboutIcon,
	BranchIcon,
	ContactIcon,
	HomeIcon,
	JobsIcon,
	LanguageIcon,
	LogOutIcon,
	MyOrdersIcon,
	NewsIcon,
	MobileCancelIcon,
} from "@/components/svg";

const MobileHeader = ({ closeNav }) => {
	return (
		<div className={cls.mobile}>
			<div className={cls.mobile_nav}>
				<div className={cls.top}>
					<div className={cls.mobile_logo}>
						<Image src={logo} alt="logo" />
					</div>
					<div onClick={() => closeNav(false)} className={cls.mobile_cancel}>
						<MobileCancelIcon />
					</div>
				</div>
				<div className={cls.bottom}>
					<div onClick={() => closeNav(false)} className={cls.mobile_list}>
						<Link className={cls.mobile_link} href="#">
							<div className={cls.mobile_item}>
								<HomeIcon />
							</div>
							<h4 className={cls.nav_title}>Главная</h4>
						</Link>
					</div>
					<div onClick={() => closeNav(false)} className={cls.mobile_list}>
						<Link className={cls.mobile_link} href="/branches">
							<div className={cls.mobile_item}>
								<BranchIcon />
							</div>
							<h4 className={cls.nav_title}>Филиалы</h4>
						</Link>
					</div>
					<div onClick={() => closeNav(false)} className={cls.mobile_list}>
						<Link className={cls.mobile_link} href="/vacancy">
							<div className={cls.mobile_item}>
								<JobsIcon />
							</div>
							<h4 className={cls.nav_title}>Вакансии</h4>
						</Link>
					</div>
					<div onClick={() => closeNav(false)} className={cls.mobile_list}>
						<Link className={cls.mobile_link} href="#">
							<div className={cls.mobile_item}>
								<AboutIcon />
							</div>
							<h4 className={cls.nav_title}>О нас</h4>
						</Link>
					</div>
					<div onClick={() => closeNav(false)} className={cls.mobile_list}>
						<Link className={cls.mobile_link} href="/contacts">
							<div className={cls.mobile_item}>
								<ContactIcon />
							</div>
							<h4 className={cls.nav_title}>Контакты</h4>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileHeader;
