import Card from "../Card";
import cls from "../../styles/product.module.scss";

export default function ProductSecond() {
  const somsaData = [
    {
      name: "Гушт сомса",
      description: "Говядина",
      price: "9w` 000",
      img: "/xitimg/goshtsomsa.webp",
    },
    {
      name: "Кузикорин ва пишлокли сомса",
      description: "Грибы",
      price: "7 000",
      img: "/xitimg/qoziqornsomsa.webp",
    },
    {
      name: "Картошка сомса",
      description: "",
      price: "5 000",
      img: "/xitimg/kartoshkasomsa.webp",
    },
    {
      name: "Сабзавот ва гуштли сомса",
      description: "Oвощной сомса",
      price: "10 000",
      img: "/xitimg/sabzovotsomsa.webp",
    },
    {
      name: "Ковок сомса",
      description: "",
      price: "4 000",
      img: "/xitimg/somsauch.webp",
    },
    {
      name: "Товук ва пишлокли сомса",
      description: "Курица с сыром",
      price: "7 000",
      img: "/xitimg/tovuqsomsa.webp",
    },
    // {
    //   name: "Кук сомса",
    //   description: "Курица с сыром",
    //   price: "5 000",
    //   img: "/xitimg/tovuqsomsa.webp",
    // },
  ];
  return (
    <>
      <div id="Сомса" className="container">
        <div className={cls.product_wrapper}>
          <div className={cls.product_title}>Сомса</div>
          <div className={cls.card_wrapper}>
            {somsaData?.length &&
              somsaData.map((item) => (
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
