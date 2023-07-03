import Card from "../Card";
import cls from "../../styles/product.module.scss";

export default function ProductSecond({ somsaData }) {
  return (
    <>
      <div id="Сомса" className="container">
        <div className={cls.product_wrapper}>
          <div className={cls.product_title}>Сомса</div>
          <div className={cls.card_wrapper}>
          {somsaData?.length &&
            somsaData.map((item) => (
           
                <Card
                  name={item.attributes.title}
                  description={item.attributes.description}
                  price={item.attributes.price}
                  img={item?.attributes?.somsaImage?.data?.attributes?.url}
                />
            ))}
              </div>
        </div>
      </div>
    </>
  );
}
