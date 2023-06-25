import Card from "../Card";
import cls from "../../styles/product.module.scss";

export default function Product(props) {
	console.log(props, "props");
	return (
		<>
			<div className="container">
				<div className={cls.product_wrapper}>
					<div className={cls.product_title}>Американо</div>
					<div className={cls.card_wrapper}>
						<Card innerData={props} />
						<Card innerData={props} />
						<Card innerData={props} />
						<Card innerData={props} />
					</div>
				</div>
			</div>
		</>
	);
}
