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

export default function Home({ data1, data2,data3 }) {
  console.log(data2, "DATA");
  // const [dataProduct, setDataProduct] = useState(null);

  return (
    <>
      <Hero />
      <Bestsellers bestData={data2.data} />
      <Product newData={data1.data} />
      <ProductSecond somsaData={data3.data}/>
    </>
  );
}

export async function getStaticProps() {
  const plov = `${url}/plovs?populate=plovImage`;
  const bestSeller = `${url}/best-sellers?populate=bestSellerImage`;
  const somsaData = `${url}/somsas?populate=somsaImage`;

  const [plovRes, bestDataRes, somsaRes] = await Promise.all([
    fetch(plov),
    fetch(bestSeller),
    fetch(somsaData),
  ]);
  const data1 = await plovRes.json();
  const data2 = await bestDataRes.json();
  const data3 = await somsaRes.json();

  return {
    props: {
      data1,
      data2,
      data3,
    },
    revalidate: 60,
  };
}
