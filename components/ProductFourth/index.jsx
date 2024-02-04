import Card from "../Card";
import cls from "../../styles/product.module.scss";

export default function ProductFourth() {
  const salatsData = [
    {
      name: "Тузлама ассорти",
      description: "",
      price: "7 000",
      img: "/salats/achiq.webp",
    },
    {
      name: "Бахор салати",
      description: "Bесенний",
      price: "6 000",
      img: "/salats/bahor.webp",
    },
    {
      name: "Сузма",
      description: "",
      price: "6 000",
      img: "/salats/suzma.webp",
    },
    {
      name: "Ачучук",
      description: "",
      price: "9 000",
      img: "/salats/achiqchuk.webp",
    },
    {
      name: "Свежие ассорти",
      description: "",
      price: "15 000",
      img: "/salats/svejiy.webp",
    },
    {
      name: "Маринованные ассорти",
      description: "",
      price: "7 000",
      img: "/salats/marinovaniy.webp",
    },
    {
      name: "Томатный сок",
      description: "",
      price: "4 000",
      img: "/salats/tomat.webp",
    },
  ];
  return (
    <>
      <div id="salati" className="container">
        <div className={cls.product_wrapper}>
          <div className={cls.product_title}>Салаты</div>
          <div className={cls.card_wrapper}>
            {salatsData?.length &&
              salatsData?.map((item) => (
                <Card
                  key={item.id}
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
