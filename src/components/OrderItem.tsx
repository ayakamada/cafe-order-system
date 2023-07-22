import { IDrink } from "../types/drinks";

interface OrderItemProps {
  item: IDrink;
  count: number; // クリック回数を受け取る
  onIncreaseClick: () => void; // プラスボタン用
  onDecreaseClick: () => void; // マイナスボタン用
}

const OrderItem = ({ item, count, onIncreaseClick, onDecreaseClick }: OrderItemProps) => {
  return (
    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <div className="relative">
        <div
          id={`${item.id}-count`}
          className="absolute -top-3 left-0 px-3 py-2 text-xs font-bold leading-none text-red-100 transform bg-blue-600 rounded-full"
        >
          {count}
        </div>
        <img src={item.img} alt="product" className="w-full rounded-lg sm:w-40" />
      </div>
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
          <p className="mt-1 text-left text-md text-gray-700">¥{item.price}</p>
        </div>
        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div id={item.id} className="flex items-center border-gray-100">
            <button
              id={`${item.id}-up`}
              className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
              onClick={onDecreaseClick}
            >
              <span>-</span>
            </button>

            <button
              id={`${item.id}-down`}
              className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
              onClick={onIncreaseClick}
            >
              <span>+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderItem;
