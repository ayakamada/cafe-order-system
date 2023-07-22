import { useRecoilValue, useRecoilState } from "recoil";
import { useCallback } from "react";

import drinksState from "../recoil/atoms/order";
import clickCountState from "../recoil/atoms/order-count";

import { IDrink } from "../types/drinks";

const useTodos = () => {
  const [drinks, setDrinks] = useRecoilState(drinksState);
  const clickCountValue = useRecoilValue(clickCountState);
  const [clickCounts, setClickCounts] = useRecoilState(clickCountState);

  const handleItemClick = (id: string, isIncrease: boolean) => {
    const newClickCounts = [...clickCounts];
    const index = drinks.findIndex((drink: IDrink) => drink.id === id);

    if (index !== -1) {
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
  };

  return {
    drinks,
    clickCountValue,
    handleItemClick,
  };
};

export default useTodos;
