import Card from "../Card";
import cls from "../../styles/product.module.scss";
import { url } from "@/api";
import axios from "axios";
import { useEffect, useState } from "react";
import CardLoader from "../CardLoader";

export default function ProductFourth({salatsData}) {
	

	return (
		<>
			<div className="container">
				<div className={cls.product_wrapper}>
					<div className={cls.product_title}>Салаты</div>
					<div className={cls.card_wrapper}>
						{salatsData?.length &&
							salatsData?.map((item) => (
								<Card
									key={item.id}
									name={item.attributes.title}
									description={item.attributes.description}
									price={item.attributes.price}
									img={item?.attributes?.salatImage?.data?.attributes?.url}
								/>
							))}

						{/* {!dataProduct &&
							[...Array(4).keys()].map((i) => {
								return <CardLoader key={i} />;
							})} */}
					</div>
				</div>
			</div>
		</>
	);
}