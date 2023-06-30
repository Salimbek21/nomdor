import { useEffect, useState } from "react";

import Head from "next/head";
import { Inter } from "next/font/google";
import Card from "@/components/Card";
import { data } from "@/shared/data";
import Product from "@/components/Product";
import ProductSecond from "@/components/ProductSecond";
import Hero from "@/components/Hero";
import Bestsellers from "@/components/Bestsellers";

const inter = Inter({ subsets: ["latin"] });
import axios from "axios";
import { url } from "@/api";
import ProductThird from "@/components/ProductThird";
import ProductFourth from "@/components/ProductFourth";

export default function Home({ data }) {
	console.log(data, "posts");
	// const [dataProduct, setDataProduct] = useState(null);
	// useEffect(() => {
	// 	axios
	// 		.get(`${url}/plovs`, {
	// 			params: {
	// 				populate: "plovImage",
	// 			},
	// 		})
	// 		.then((r) => {
	// 			setDataProduct(r.data.data);
	// 		});
	// }, []);

	return (
		<>
			<Hero />
			<Bestsellers />
			<Product />
			<ProductSecond />
			<ProductThird />
			<ProductFourth />
		</>
	);
}

// export async function getStaticProps() {
// 	const res = await fetch(`${url}/plovs?populate=plovImage`);
// 	const data = await res.json();

// 	return {
// 		props: {
// 			data,
// 		},
// 	};
// }
