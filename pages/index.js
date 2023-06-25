import Head from "next/head";
import { Inter } from "next/font/google";
import Card from "@/components/Card";
import { data } from "@/shared/data";
import Product from "@/components/Product";
import ProductSecond from "@/components/ProductSecond";
import Hero from "@/components/Hero";
import Bestsellers from "@/components/Bestsellers";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Hero />
			<Bestsellers data={data} />
			<Product data={data} />
			<ProductSecond data={data} />
		</>
	);
}
