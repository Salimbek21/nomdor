import Link from "next/link";
import cls from "./card.module.scss";
import Image from "next/image";

export default function Card(props) {
  return (
    <div className={cls.card_wrapper}>
      <div className={cls.card}>
        <Image
          className={cls.card_img}
          width={200}
          height={200}
          src={props.img}
          alt="Card img"
        />
        <div className={cls.product_body}>
          <div className={cls.product_texts}>
            <div className={cls.title}>
              <span>{props.name}</span>
            </div>
            <div className={cls.desc}>
              <p title={props.description}>{props.description}</p>
            </div>
            <h2 className={cls.price}>{props.price} сум</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
