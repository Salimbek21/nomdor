import Image from "next/image";
import cls from "./branches.module.scss";
import branch1 from "@/public/assets/images/branch1.png";
import { ArrowRightIcon } from "../svg";

const Branches = () => {
  return (
    <div className="container">
      <div className={cls.branches_wrapper}>
        <div className={cls.head}>
          <h1 className={cls.title}>Филиалы</h1>
          <div className={cls.btn_group}>
            <button className={cls.btn_list}>Список</button>
            <button className={cls.btn_map}>Карта</button>
          </div>
        </div>
        <div className={cls.cards}>
          <div className={cls.card_wrapper}>
            <div className={cls.card}>
              <div className={cls.card_box}>
                <div className={cls.imageBox}>
                  <Image src={branch1} alt="Branch" />
                </div>
                <div className={cls.branch_address}>
                  <div className={cls.title}>001-Юнусабад</div>
                  <span className={cls.desc}>
                    г. Ташкент, Юнусабадский район, Квартал 5, 11а дом
                  </span>
                </div>
              </div>
              <div className={cls.card_workingHours}>
                <div className={cls.workingBox}>
                  <span className={cls.hour}>Время работы</span>
                  <p className={cls.time}>09:00 - 03:00</p>
                </div>
              </div>
              <div className={cls.card_icon}>
                <ArrowRightIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branches;
