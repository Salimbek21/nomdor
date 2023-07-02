import Head from "next/head";
import Product from "@/components/Product";
import ProductSecond from "@/components/ProductSecond";
import Hero from "@/components/Hero";
import Bestsellers from "@/components/Bestsellers";

import { url } from "@/api";
import ProductFourth from "@/components/ProductFourth";

export default function Home({ data1, data2,data3,data4 }) {
  console.log(data2, "DATA");

  return (
    <>
      <Hero />
      <Bestsellers bestData={data2.data} />
      <Product newData={data1.data} />
      <ProductSecond somsaData={data3.data}/>
      <ProductFourth salatsData={data4.data}/>
    </>
  );
}

export async function getStaticProps() {
  const plov = `${url}/plovs?populate=plovImage`;
  const bestSeller = `${url}/best-sellers?populate=bestSellerImage`;
  const somsaData = `${url}/somsas?populate=somsaImage`;
  const salatData = `${url}/salats?populate=salatImage`;

  const [plovRes, bestDataRes, somsaRes,salatRes] = await Promise.all([
    fetch(plov),
    fetch(bestSeller),
    fetch(somsaData),
    fetch(salatData),
  ]);
  const data1 = await plovRes.json();
  const data2 = await bestDataRes.json();
  const data3 = await somsaRes.json();
  const data4 = await salatRes.json();

  return {
    props: {
      data1,
      data2,
      data3,
      data4
    },
    revalidate: 60,
  };
}
