import Link from "next/link";
import cls from "./card.module.scss";
import Image from "next/image";

export default function Card({ innerData }) {
	console.log(innerData.data, "card");
	return (
		<div className={cls.card_wrapper}>
			{innerData.data.map((item) => (
				<Link href={"#"} className={cls.card} key={item.id}>
					<span className={cls.card_img}>
						<Image src={item.img} />
					</span>
					<div className={cls.product_body}>
						<div className={cls.product_texts}>
							<div className={cls.title}>
								<span>{item.title}</span>
							</div>
							<div className={cls.desc}>
								<p>{item?.description}</p>
							</div>
							<h2 className={cls.price}>{item.price}</h2>
						</div>
						<button className={cls.product_btn}>
							<h4>В корзину</h4>
						</button>
					</div>
				</Link>
			))}
		</div>
	);
}
