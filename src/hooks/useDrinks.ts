import { useRecoilValue, useRecoilState } from "recoil";
import { useCallback } from "react";

import drinksState from "../recoil/atoms/order";


const useTodos = () => {
  const [drinks, setDrinks] = useRecoilState(drinksState);


  return {
    drinks,
    setDrinks,
  };
};

export default useTodos;
