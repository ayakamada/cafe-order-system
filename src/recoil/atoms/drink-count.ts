import { atom } from "recoil";

import Drinks from "../../data/drinks";

export const drinkCountState = atom<{[key: string]: number }[]>({
  key: "drinkCountState",
  default: Drinks.map((drink) => ({ [`${drink.id.toLowerCase()}-count`]: 0 })),
});

export default drinkCountState;
