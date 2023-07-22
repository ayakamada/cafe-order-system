import { selector } from "recoil";
import { drinkCountState } from "../atoms/drink-count";
import drinksState from "../atoms/drink";


export const totalClickCountState = selector<number>({
  key: "totalClickCountState",
  get: ({ get }) => {
    const clickCounts = get(drinkCountState);
    return clickCounts.reduce((total, item) => {
      return total + Object.values(item)[0];
    }, 0);
  },
});

export const itemTotalPriceState = selector<number>({
  key: "itemTotalPriceState",
  get: ({ get }) => {
    const clickCounts = get(drinkCountState);
    const drinks = get(drinksState);

    return clickCounts.reduce((total, item, index) => {
      const count = Object.values(item)[0];
      const price = drinks[index].price;
      return total + count * price;
    }, 0);
  },
});
