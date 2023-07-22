import { atom } from "recoil";

import Drinks from "../../data/drinks";

export const clickCountState = atom<{ [key: string]: number }[]>({
  key: "clickCountState",
  default: Drinks.map((drink) => ({ [`${drink.id.toLowerCase()}-count`]: 0 })),
});

export default clickCountState;
