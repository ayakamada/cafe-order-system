import OrderItem from "./OrderItem";
import PricesBox from "./PricesBox";

import { IDrink } from "../types/drinks";
import useDrinks from "../hooks/useDrinks";

import { click } from "@testing-library/user-event/dist/click";

const DrinkOrderForm = () => {

  return (
    <div className="DrinkOrderForm">
      <div className="">
        <h1 className="mb-10 text-center text-2xl font-bold">Track Cafe Drink Order</h1>
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
          <PricesBox />
        </div>
      </div>
    </div>
  );
};

export default DrinkOrderForm;
