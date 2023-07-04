import Card from "../Card";
import cls from "../../styles/product.module.scss";
import { url } from "@/api";
import axios from "axios";
import { useEffect, useState } from "react";
import CardLoader from "../CardLoader";
import ProductModal from "../ProductModal";

export default function Product({ newData }) {
  const [rs, setRs] = useState({
    id: "",
    description: "",
    price: "",
    plovImage: "",
  });

  const showDetail = (id) => {
    fetch(
      `https://nomdor-dashboard.onrender.com/api/plovs?populate=plovImage/${id}`
    )
      .then((resposne) => resposne.json())
      .then((res) => setRs(res));
  };
  console.log(rs);

  return (
    <>
      <div id="plov" className="container">
          {/* <ProductModal /> */}
        <div className={cls.product_wrapper}>
          <div className={cls.product_title}>Ош</div>
          <div className={cls.card_wrapper}>
            {newData?.length &&
              newData.map((item) => (
                <Card
                  onClick={(e) => showDetail(item?.id)}
                  name={item.attributes.title}
                  description={item.attributes.description}
                  price={item.attributes.price}
                  img={item?.attributes?.plovImage?.data?.attributes?.url}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
