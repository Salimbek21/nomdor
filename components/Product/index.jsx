import Card from "../Card";
import cls from "../../styles/product.module.scss";
import { useState } from "react";
import CardLoader from "../CardLoader";
import ProductModal from "../ProductModal";

export default function Product() {
  const [rs, setRs] = useState({
    id: "",
    description: "",
    price: "",
    plovImage: "",
  });

  const newData = [
    {
      name: "Чойхона палов 0.8",
      description: "",
      price: "36 000",
      img: "/xitimg/choyxonaosh.webp",
      title: "",
    },
    {
      name: "Чойхона палов",
      description: "",
      price: "38 000",
      img: "/xitimg/choyxonaosh.webp",
      title: "",
    },
    {
      name: "Туй оши",
      description: "",
      price: "36 000",
      img: "/xitimg/toyosh.webp",
      title: "",
    },
    {
      name: "Туй оши 0,8",
      description: "",
      price: "34 000",
      img: "/xitimg/toyosh.webp",
      title: "",
    },
    {
      name: "Самарканд оши",
      description: "",
      price: "38 000",
      img: "/xitimg/toyosh.webp",
      title: "",
    },
    {
      name: "Самарканд оши 0,8",
      description: "",
      price: "36 000",
      img: "/xitimg/toyosh.webp",
      title: "",
    },
  ];
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
                  key={item?.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  img={item?.img}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
