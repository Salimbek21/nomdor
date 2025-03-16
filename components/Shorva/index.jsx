import Card from "../Card";
import cls from "../../styles/product.module.scss";
import { useState } from "react";
import CardLoader from "../CardLoader";
import ProductModal from "../ProductModal";

export default function ProductShorva() {
  const [rs, setRs] = useState({
    id: "",
    description: "",
    price: "",
    plovImage: "",
  });

  const newData = [
    {
      name: "Шорва",
      description: "",
      price: "33 000",
      img: "/xitimg/choyxonaosh.webp",
      title: "",
    },
  ];
  return (
    <>
      <div id="plov" className="container">
        {/* <ProductModal /> */}
        <div className={cls.product_wrapper}>
          <div className={cls.product_title}>Шорва</div>
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
