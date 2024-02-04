import Head from "next/head";
import Product from "@/components/Product";
import ProductSecond from "@/components/ProductSecond";
import Hero from "@/components/Hero";
import Bestsellers from "@/components/Bestsellers";

import { url } from "@/api";
import ProductFourth from "@/components/ProductFourth";
import ProductFive from "@/components/ProductFive";

export default function Home({ data1, data2, data3, data4, data5,data6 }) {
  // const [dataProduct, setDataProduct] = useState(null);

  return (
    <>
      <Head>
        <title>Nomdor Ош markazi | nomdor.uz</title>
        <meta name="description" content={"Nomdor Ош markazi"} />
        <meta name="keywords" content={"Nomdor Ош markazi"} />

        <meta property="og:title" content={"  Nomdor Ош markazi | nomdor.uz"} />
        <meta
          property="og:description"
          content={"  Nomdor Ош markazi | nomdor.uz"}
        />

        <meta name="author" content="brandstore" />

        <meta property="og:image" content="/Logo2.png" />

        <link rel="icon" type="image/png" sizes="192x192" href="/Logo2.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/Logo2.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/Logo2.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/Logo2.png" />
        <link rel="manifest" href="/Favicon/manifest.json" />
        <meta property="og:url" content={"https://brandstore.uz"} />
        <meta property="og:type" content={"website"} />
        <meta
          name="google-site-verification"
          content="-aJCq23fZvSXOYJ8AQUwTmgRFgx-rC97EvtFvSt8j8E"
        />
        <meta name="yandex-verification" content="0588fead5dcdbb0e" />
        <meta property="og:site_name" content="brandstore.uz" />
        <meta property="og:locale" content={"ru_RU"} />
      </Head>
      <Hero />
      <Bestsellers />
      <Product />
      <ProductSecond  />
      <ProductFourth  />
      <ProductFive />
    </>
  );
}

// export async function getStaticProps() {
//   const plov = `${url}/plovs?populate=plovImage`;
//   const bestSeller = `${url}/best-sellers?populate=bestSellerImage`;
//   const somsaData = `${url}/somsas?populate=somsaImage`;
//   const salatData = `${url}/salats?populate=salatImage`;
//   const heroData = `${url}/hero-banners?populate=image`;
//   const shashlikData = `${url}/shashliks?populate=shashlikImage`;

//   const [plovRes, bestDataRes, somsaRes, salatRes, heroRes, shashRes] = await Promise.all(
//     [
//       fetch(plov),
//       fetch(bestSeller),
//       fetch(somsaData),
//       fetch(salatData),
//       fetch(heroData),
//       fetch(shashlikData),
//     ]
//   );
//   const data1 = await plovRes.json();
//   const data2 = await bestDataRes.json();
//   const data3 = await somsaRes.json();
//   const data4 = await salatRes.json();
//   const data5 = await heroRes.json();
//   const data6 = await shashRes.json();

//   return {
//     props: {
//       data1,
//       data2,
//       data3,
//       data4,
//       data5,
//       data6
//     },
//     revalidate: 60,
//   };
// }
