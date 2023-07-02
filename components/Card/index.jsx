import Link from "next/link";
import cls from "./card.module.scss";
import Image from "next/image";

export default function Card(props) {
	return (
		<div className={cls.card_wrapper}>
			<Link href={"#"} className={cls.card}>
				<span className={cls.card_img}>
					<Image width={200} height={200} src={props.img} alt="Card img" />
				</span>
				<div className={cls.product_body}>
					<div className={cls.product_texts}>
						<div className={cls.title}>
							<span>{props.name}</span>
						</div>
						<div className={cls.desc}>
							<p title={props.description}>{props.description}</p>
						</div>
						<h2 className={cls.price}>{props.price} so'm</h2>
					</div>
				</div>
			</Link>
		</div>
	);
}
