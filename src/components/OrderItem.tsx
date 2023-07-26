import React, { useEffect, useState, memo } from "react";
import { IDrink } from "../types/drinks";

interface OrderItemProps {
  item: IDrink;
  count: number; // クリック回数を受け取る
  onIncreaseClick: () => void; // プラスボタン用
  onDecreaseClick: () => void; // マイナスボタン用
}

const OrderItem = memo(({ item, count, onIncreaseClick, onDecreaseClick }: OrderItemProps) => {
  const [animate, setAnimate] = useState(false);
  const [prevCount, setPrevCount] = useState(0);

  /*
  クリックアニメーション用のclass toggle関数
  */
  useEffect(() => {
    if (count !== prevCount) {
      // クリック回数が変わったときだけアニメーションを実行
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 500);
      setPrevCount(count); // 現在のクリック回数をprevCountに更新
    }
  }, [count, prevCount]);

  return (
    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <div className="relative ">
        <div
          id={`${item.code}-count`}
          className={`absolute -top-3 right-0 px-3 py-2 sm:text-xs text-sm font-bold leading-none transform bg-white border border-zinc-300 rounded-full text-blue-600 ${
            animate ? "animate-wobble-hor-bottom" : ""
          }`}
        >
          {count}
        </div>
        <img src={item.img} alt={`${item.name}`} className="w-full rounded-lg sm:w-40 object-cover sm:h-28 h-48" />
      </div>
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
          <p className="mt-1 sm:text-left text-md text-gray-700">¥{item.price}</p>
        </div>
        <div className="mt-4 flex justify-end sm:justify-start sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div id={item.code} className="flex border-gray-100 h-full">
            <button
              id={`${item.code}-up`}
              className={`w-20 h-1/2 block cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50 text-2xl`}
              onClick={onDecreaseClick}
            >
              <span>-</span>
            </button>
            <button
              id={`${item.code}-down`}
              className={`w-20 h-1/2 block cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50 text-2xl`}
              onClick={onIncreaseClick}
            >
              <span>+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default OrderItem;
