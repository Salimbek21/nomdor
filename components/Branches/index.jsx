import Image from "next/image";
import cls from "./branches.module.scss";
import { ArrowRightIcon } from "../svg";
import Link from "next/link";

const Branches = () => {
  const data = [
    {
      description: "Toshkent shahar, Chilonzor tumani, 10 kvartal, 15-uy.",
      title: "",
      workTime: "24/7",
    },
    {
      description: "Toshkent shahar, Yunusobod tumani, Kichik xalqa yo’li 42.",
      title: "",
      workTime: "24/7",
    },
    {
      description: "Toshkent shahar, Mirobod tumani, Shahrisabz 21A.",
      title: "",
      workTime: "24/7",
    },
    {
      description:
        "Toshkent shahar,Chilonzor tumani,massiv Chilonzor,5- kvartal 1/1",
      title: "",
      workTime: "24/7",
    },
    {
      description:
        "Toshkent shahar, Yunusobod tumani, massiv Yunusobod, 19-kvartal квартал 1А",
      title: "",
      workTime: "24/7",
    },
  ];
  return (
    <div className="container">
      <div className={cls.branches_wrapper}>
        <div className={cls.head}>
          <h1 className={cls.title}>Филиалы</h1>
        </div>
        {data?.length &&
          data.map((item) => (
            <div className={cls.cards}>
              <div className={cls.card_wrapper}>
                <div className={cls.card}>
                  {/* <Link
                    // href={{
                    //   pathname: "/branches/[id]",
                    //   query: { branches: item.id },
                    // }}
                    // as={`/branches/${item?.id}`}
                  > */}
                  <div className={cls.cardBox}>
                    <div className={cls.card_box}>
                      <div className={cls.imageBox}></div>
                      <div className={cls.branch_address}>
                        <div className={cls.title}> {item?.title}</div>
                        <span className={cls.desc}>{item?.description}</span>
                      </div>
                    </div>
                    <div className={cls.card_workingHours}>
                      <div className={cls.workingBox}>
                        <span className={cls.hour}>Ish vaqti</span>
                        <p className={cls.time}>{item?.workTime}</p>
                      </div>
                    </div>
                    <div className={cls.card_icon}>
                      <ArrowRightIcon />
                    </div>
                  </div>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Branches;
