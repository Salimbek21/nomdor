import Card from "../Card";
import cls from "../../styles/product.module.scss";
import CardLoader from "../CardLoader";

export default function ProductFourth() {
  const shashdata = [
    {
      name: "Кийма 100 гр (Молотый)",
      description: "",
      price: "11 000",
      img: "/shashlik/qiyma.webp",
    },
    {
      name: "Жигар 100 гр",
      description: "",
      price: "12 000",
      img: "/shashlik/jigar.webp",
    },
    {
      name: "Жаз 100 гр (Кусковой)",
      description: "Говядина",
      price: "17 000",
      img: "/shashlik/jaz.webp",
    },
    {
      name: "Крылышки (Курица)",
      description: "Канот",
      price: "14 000",
      img: "/shashlik/krilishka.webp",
    },
    {
      name: "Товук 100 гр (Курица)",
      description: "Филе",
      price: "12 000",
      img: "/shashlik/tovuq.webp",
    },
   
  ];
  return (
    <>
      <div id="salati" className="container">
        <div className={cls.product_wrapper}>
          <div className={cls.product_title}>Шашлыки</div>
          <div className={cls.card_wrapper}>
            {shashdata?.length &&
              shashdata?.map((item) => (
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
