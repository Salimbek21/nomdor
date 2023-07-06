import Card from "../Card";
import cls from "../../styles/product.module.scss";

export default function ProductFourth({salatsData}) {
	

	return (
		<>
			<div id="salati" className="container">
				<div className={cls.product_wrapper}>
					<div className={cls.product_title}>Салаты</div>
					<div className={cls.card_wrapper}>
						{salatsData?.length &&
							salatsData?.map((item) => (
								<Card
									key={item.id}
									name={item.attributes.salatName}
									description={item.attributes.description}
									price={item.attributes.price}
									img={item?.attributes?.salatImage?.data?.attributes?.url}
								/>
							))}
					</div>
				</div>
			</div>
		</>
	);
}
