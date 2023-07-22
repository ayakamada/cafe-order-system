import { useRecoilValue, useRecoilState } from "recoil";
import { useCallback } from "react";

import drinksState from "../recoil/atoms/drink";
import drinkCountState from "../recoil/atoms/drink-count";
import { totalClickCountState, itemTotalPriceState } from "../recoil/selectors/drink-count";

import { IDrink } from "../types/drinks";

const useDrinks = () => {
  const drinks = useRecoilValue(drinksState);
  const clickCountValue = useRecoilValue(drinkCountState);
  const [clickCounts, setClickCounts] = useRecoilState(drinkCountState);

  const totalClickCount = useRecoilValue(totalClickCountState);
  const itemTotalPrices = useRecoilValue(itemTotalPriceState);

  // useCallbackを使って、関数をメモ化

  const handleItemClick = useCallback(
    (id: string, isIncrease: boolean) => {
      const newClickCounts = [...clickCounts];
      const index = drinks.findIndex((drink: IDrink) => drink.id === id);

      if (index !== -1) {
        // マイナス値にならないように設定
        const countKey = `${id}-count`;
        if (isIncrease) {
          newClickCounts[index] = {
            ...newClickCounts[index],
            [countKey]: newClickCounts[index][countKey] + 1,
          };
        } else {
          newClickCounts[index] = {
            ...newClickCounts[index],
            [countKey]: Math.max(0, newClickCounts[index][countKey] - 1),
          };
        }

        setClickCounts(newClickCounts);
      }
    },
    [drinks, clickCounts, setClickCounts]
  );

  return {
    drinks,
    clickCountValue,
    handleItemClick,
    totalClickCount,
    itemTotalPrices,
  };
};

export default useDrinks;
