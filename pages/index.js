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

export default function Home() {
  const [dataProduct, setDataProduct] = useState(null);
  useEffect(() => {
    axios
      .get(`${url}/first-foods`, {
        params: {
          populate: "img",
        },
      })
      .then((r) => {
        setDataProduct(r.data.data);
      });
  }, []);
  return (
    <>
      <Hero />
      <Bestsellers data={data} />
      <Product newData={dataProduct} />
      <ProductSecond data={data} />
    </>
  );
}
