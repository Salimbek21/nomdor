import Card from "../Card";
import cls from "../../styles/product.module.scss";
import { url } from "@/api";
import axios from "axios";
import { useEffect, useState } from "react";
import CardLoader from "../CardLoader";

export default function ProductThird() {
	const [dataProduct, setDataProduct] = useState(null);
	useEffect(() => {
		axios
			.get(`${url}/shashliks`, {
				params: {
					populate: "shashlikImage",
				},
			})
			.then((res) => {
				setDataProduct(res.data.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<>
			<div className="container">
				<div className={cls.product_wrapper}>
					<div className={cls.product_title}>Шашлык</div>
					<div className={cls.card_wrapper}>
						{dataProduct?.length &&
							dataProduct?.map((item) => (
								<Card
									key={item.id}
									name={item.attributes.title}
									description={item.attributes.description}
									price={item.attributes.price}
									img={item?.attributes?.shashlikImage?.data?.attributes?.url}
								/>
							))}

						{!dataProduct &&
							[...Array(4).keys()].map((i) => {
								return <CardLoader key={i} />;
							})}
					</div>
				</div>
			</div>
		</>
	);
}
