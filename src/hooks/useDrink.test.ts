import { RecoilRoot } from "recoil";
import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import useDrink from "./useDrinks";
import Drinks from "../data/drinks";

// 値がプラスになることを確認するテスト
test("should count up", () => {
  const { result } = renderHook(() => useDrink(), {
    wrapper: RecoilRoot,
  });

  const { handleItemClick } = result.current;
  act(() => {
    handleItemClick(1, true);
    handleItemClick(1, true);
    handleItemClick(1, true);
  });
  expect(result.current.drinkCounts[1]).toBe(3);
});

// 値がマイナスされることを確認するテスト
test("should count down", () => {
  const { result } = renderHook(() => useDrink(), {
    wrapper: RecoilRoot,
  });

  const { handleItemClick } = result.current;
  act(() => {
    handleItemClick(1, true);
    handleItemClick(1, true);
    handleItemClick(1, false);
  });
  expect(result.current.drinkCounts[1]).toBe(1);
});

// 値がマイナスにならないことを確認するテスト
test("should not be minus number", () => {
  const { result } = renderHook(() => useDrink(), {
    wrapper: RecoilRoot,
  });

  const { handleItemClick } = result.current;
  act(() => {
    handleItemClick(1, true);
    handleItemClick(1, false);
    handleItemClick(1, false);
  });
  expect(result.current.drinkCounts[1]).toBe(0);
});


// トータルのクリック数が正しいことを確認するテスト
test("totalClicksMatchTest", () => {
  const { result } = renderHook(() => useDrink(), {
    wrapper: RecoilRoot,
  });

  const { handleItemClick } = result.current;
  act(() => {
    handleItemClick(1, true);
    handleItemClick(2, true);
    handleItemClick(3, true);
  });
  expect(result.current.totalClickCount).toBe(3);
});


// トータルの料金が正しいことを確認するテスト
test("totalPricesMatchTest", () => {
  const { result } = renderHook(() => useDrink(), {
    wrapper: RecoilRoot,
  });

  const { handleItemClick } = result.current;
  // Drinksのid 1,2,3の合計金額を計算
  const totalPrices = Drinks.filter((drink) => [1, 2, 3].includes(drink.id)).reduce(
    (acc, drink) => acc + drink.price,
    0
  );

  act(() => {
    handleItemClick(1, true);
    handleItemClick(2, true);
    handleItemClick(3, true);
  });
  expect(result.current.itemTotalPrices).toBe(totalPrices);
});
