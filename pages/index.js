import Head from "next/head";
import { Inter } from "next/font/google";
import Card from "@/components/Card";
import { data } from "@/shared/data";
import Product from "@/components/Product";
import ProductSecond from "@/components/ProductSecond";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <Product data={data} />
      <ProductSecond data={data} />
    </>
  );
}
