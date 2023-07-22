import OrderItem from "./OrderItem";
import { IDrink } from "../types/drinks";
import useDrinks from "../hooks/useDrinks";

import { TaxPrice, TotalPriceWithTax } from "../utils/calcTaxPrice";
import { click } from "@testing-library/user-event/dist/click";

const DrinkOrderForm = () => {
  const { drinks, handleItemClick, clickCountValue, itemTotalPrices, totalClickCount } = useDrinks();
  // console.log(clickCountValue);

  return (
    <div className="DrinkOrderForm">
      <div className="bg-gray-100 py-20 min-h-screen">
        <h1 className="mb-10 text-center text-2xl font-bold">Drink Order Form</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {drinks.map((item: IDrink, index) => {
              return (
                <OrderItem
                  key={index}
                  item={item}
                  count={clickCountValue[index][`${item.id}-count`]}
                  onIncreaseClick={() => handleItemClick(item.id, true)}
                  onDecreaseClick={() => handleItemClick(item.id, false)}
                />
              );
            })}
          </div>
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">合計注文数</p>
              <span id="count" className="text-gray-700">
                {totalClickCount}点
              </span>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">軽減税率 8%</p>
              <p className="text-gray-700">¥{TaxPrice(itemTotalPrices)}</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <span id="price" className="mb-1 text-lg font-bold text-right">
                  ¥{itemTotalPrices}
                </span>
                <p className="text-sm text-gray-700">税込 ¥{TotalPriceWithTax(itemTotalPrices)}</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              購入する
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkOrderForm;
