import React from "react";
import HeadTitle from "./HeadTitle";
import { Icons } from "../../assets/icons";
import { SALES_LISTS } from "../arrayLists/menuLists";

const Sales = () => {
  return (
    <div className="block-wrap w-full">
      <div className="block-head flex items-center justify-between">
        <HeadTitle title="Today's sales" />
        <div className="block-head-export">
          <button className="export-btn flex items-center gap-[6px] border border-solid border-gray-500 rounded-lg py-[2px]px-2 font-semibold">
            <img
              src={Icons.ExportDark}
              alt="export "
              className="invert-[1] brightness-[100%]"
            />
            <span className="test">Export</span>
          </button>
        </div>
      </div>

      <div className="sales-cards sm:grid sm:grid-cols-4 gap-4 mt-6 flex flex-wrap">
        {SALES_LISTS.map((item, index) => (
          <div
            key={index}
            className="card-item rounded-md py-4 px-[18px] border border-gray-500  w-[calc(50%-8px)] sm:w-auto"
          >
            <div className="card-item-icon rounded-full w-11 h-11 flex items-center justify-center border border-gray-950 dark:border-gray-500">
              <img
                src={item.src}
                alt={item.title}
                className="w-6  brightness-0  dark:brightness-[100%]"
              />
            </div>
            <div className="card-item-value font-bold text-xl mt-3 mb-1">
              {item.value}
            </div>
            <p className="card-item-title font-semibold mb-3">{item.title}</p>
            <span className="card-item-text text-[14px] font-normal">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sales;
