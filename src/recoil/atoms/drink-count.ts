import { atom } from "recoil";

import Drinks from "../../data/drinks";

export const drinkCountState = atom<{ [key: number]: number }>({
  key: "drinkCountState",
  default: Object.fromEntries(Drinks.map((drink) => [drink.id, 0])),
});

export default drinkCountState;
