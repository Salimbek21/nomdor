import Image from "next/image";
import cls from "./product-modal.module.scss";

const ProductModal = () => {
  return (
    <div className={cls.modal_wrapper}>
      <div className={cls.modal}>
        <div className={cls.left}>
          <span className={cls.img_box}>
            <Image alt="Card image" />
          </span>
        </div>
        <div className={cls.right}>
          <div className={cls.info}>
            <h1 className={cls.title}>Американо классический</h1>
            <p className={cls.desc}>
              Классический зерновой кофе на основе Эспрессо с добавлением воды
            </p>
            <p className={cls.price}>33 000 сум</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
