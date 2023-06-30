import Card from "../Card";
import cls from "../../styles/product.module.scss";

export default function Product({ newData }) {
  console.log(newData, "data");
  return (
    <>
      <div className="container">
        <div className={cls.product_wrapper}>
          <div className={cls.product_title}>	Ош</div>

          {/* {props.newData && props.newData.map} */}
          <div className={cls.card_wrapper}>
            {newData?.length &&
              newData.map((item) => (
                <Card
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
