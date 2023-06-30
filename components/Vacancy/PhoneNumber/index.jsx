import cls from "./phone-number.module.scss";
import Image from "next/image";
import notification from "@/public/assets/icon/notification.svg";

const PhoneNumber = () => {
	return (
		<div className="container">
			<div className={cls.phoneNumber_wrapper}>
				<div className={cls.inner}>
					<div className={cls.box}>
						<div className={cls.content}>
							<div className={cls.img_box}>
								<span>
									<Image src={notification} />
								</span>
							</div>
							<div className={cls.review}>
								<div>
									Хотите повторить историю успеха ?
									<br />
									<span>Ищите работу ?</span>
									<br />
									<span> Один из профилей вам интересен?</span>
								</div>
							</div>
							<form className={cls.form}>
								<div className={cls.input_group}>
									<input
										type="text"
										className={cls.inputName}
										placeholder="Your Name"
									/>
									<input
										className={cls.inputPhone}
										type="text"
										placeholder="Your Phone"
									/>
									<button className={cls.btn}>Отправить</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PhoneNumber;
