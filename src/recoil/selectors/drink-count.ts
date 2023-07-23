import { selector } from "recoil";
import { drinkCountState } from "../atoms/drink-count";
import drinksState from "../atoms/drink";

export const totalClickCountState = selector<number>({
  key: "totalClickCountState",
  get: ({ get }) => {
    const clickCounts = get(drinkCountState);
    return Object.values(clickCounts).reduce((total, count) => {
      return total + count;
    }, 0);
  },
});

export const itemTotalPriceState = selector<number>({
  key: "itemTotalPriceState",
  get: ({ get }) => {
    const clickCounts = get(drinkCountState);
    const drinks = get(drinksState);

    return Object.entries(clickCounts).reduce((total, [drinkId, count]) => {
      const price = drinks.find((drink) => drink.id === Number(drinkId))?.price || 0;
      return total + count * price;
    }, 0);
  },
});
