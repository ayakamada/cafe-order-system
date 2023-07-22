import { atom } from "recoil";

import Drinks from "../../data/drinks";

const drinksState = atom({
  key: "drinksState",
  default: Drinks,
});

export default drinksState;
