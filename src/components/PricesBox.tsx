import { TaxPrice, TotalPriceWithTax } from "../utils/calcTaxPrice";

interface PricesBoxProps {
  itemTotalPrices: number;
  totalClickCount: number;
}

const PricesBox = ({ itemTotalPrices, totalClickCount }: PricesBoxProps) => {
  return (
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
          <span id="price" className="block mb-1 text-lg font-bold text-right">
            ¥{itemTotalPrices}
          </span>
          <p className="text-sm text-gray-700">税込 ¥{TotalPriceWithTax(itemTotalPrices)}</p>
        </div>
      </div>
      <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
        購入する
      </button>
    </div>
  );
};

export default PricesBox;