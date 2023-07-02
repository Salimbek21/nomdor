import Image from "next/image";
import cls from "./branches.module.scss";
import branch1 from "@/public/assets/images/branch1.png";
import { ArrowRightIcon } from "../svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "@/api";
import Link from "next/link";

const Branches = ({ data }) => {
  return (
    <div className="container">
      <div className={cls.branches_wrapper}>
        <div className={cls.head}>
          <h1 className={cls.title}>Filiallar</h1>
          {/* <div className={cls.btn_group}>
            <button className={cls.btn_list}>Список</button>
          </div> */}
        </div>
        {data?.length &&
          data.map((item) => (
            <div className={cls.cards}>
              <div className={cls.card_wrapper}>
                <div className={cls.card}>
                  <Link
                    href={{
                      pathname: "/branches/[id]",
                      query: { branches: item.id },
                    }}
                    as={`/branches/${item?.id}`}
                  >
                    <div className={cls.cardBox}>
                    <div className={cls.card_box}>
                      <div className={cls.imageBox}>
                        {/* <Image src="" alt="Branch" /> */}
                      </div>
                      <div className={cls.branch_address}>
                        <div className={cls.title}>
                          {" "}
                          {item?.attributes?.title}
                        </div>
                        <span className={cls.desc}>
                          {item?.attributes?.description}
                        </span>
                      </div>
                    </div>
                    <div className={cls.card_workingHours}>
                      <div className={cls.workingBox}>
                        <span className={cls.hour}>Ish vaqti</span>
                        <p className={cls.time}>{item?.attributes?.workTime}</p>
                      </div>
                    </div>
                    <div className={cls.card_icon}>
                      <ArrowRightIcon />
                    </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Branches;
