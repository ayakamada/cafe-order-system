import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { useCallback } from "react";

import drinksState from "../recoil/atoms/drink";
import drinkCountState from "../recoil/atoms/drink-count";
import { totalClickCountState, itemTotalPriceState } from "../recoil/selectors/drink-count";

const useDrinks = () => {
  const drinks = useRecoilValue(drinksState);
  const [drinkCounts, setDrinkCounts] = useRecoilState(drinkCountState);

  const totalClickCount = useRecoilValue(totalClickCountState);
  const itemTotalPrices = useRecoilValue(itemTotalPriceState);

  // useCallbackを使うことで、関数の再生成を防ぐ
  const handleItemClick = (id: number, isIncrease: boolean) => {
    if (id !== -1) {
      // マイナス値にならないように設定
      setDrinkCounts((prevCounts) => ({
        ...prevCounts,
        [id]: isIncrease ? prevCounts[id] + 1 : Math.max(0, prevCounts[id] - 1),
      }));
    }
  };

  return {
    drinks,
    drinkCounts,
    handleItemClick,
    totalClickCount,
    itemTotalPrices,
  };
};

export default useDrinks;
