import Card from "../Card";
import cls from "../../styles/product.module.scss";
import CardLoader from "../CardLoader";

export default function ProductFourth({ shashdata }) {
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
                  name={item.attributes.shashlikTitle}
                  description={item.attributes.description}
                  price={item.attributes.price}
                  img={item?.attributes?.shashlikImage?.data?.attributes?.url}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
