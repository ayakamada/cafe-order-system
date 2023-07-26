import { TaxPrice, TotalPriceWithTax } from "../utils/calcTaxPrice";
import useDrinks from "../hooks/useDrinks";
import ClickedItemList from "./ClickedItemList";

const PricesBox = () => {
  const { itemTotalPrices, totalClickCount } = useDrinks();

  return (
    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
      <div className="mb-2 flex justify-between">
        <p className="text-gray-700">商品数</p>
        <span id="count" className="text-gray-700">
          {totalClickCount}点
        </span>
      </div>

      <div className="flex justify-between mb-2">
        <p className="text-gray-700">小計</p>
        <p className="text-gray-700"> ¥{itemTotalPrices.toLocaleString()}</p>
      </div>
      <ClickedItemList />
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="text-lg font-bold">合計</p>
        <div className="">
          <span id="price" className="block mb-1 text-lg font-bold text-right">
            ¥{TotalPriceWithTax(itemTotalPrices).toLocaleString()}
          </span>
          <p className="text-sm text-gray-700 text-right">税8% ¥{TaxPrice(itemTotalPrices)}</p>
        </div>
      </div>
      <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
        支払いへ進む
      </button>
    </div>
  );
};

export default PricesBox;
