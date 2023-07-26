import useDrinks from "../hooks/useDrinks";

const ClickedItemList = () => {
  const { drinks, drinkCounts } = useDrinks();

  /*
  クリックされた商品の名前と個数を配列に格納
  */
  const clickedItems = drinks
    .filter((drink) => drinkCounts[drink.id] > 0)
    .map((drink) => {
      return { name: drink.name, count: drinkCounts[drink.id] };
    });

  return (
    <>
      {clickedItems.length > 0 && (
        <div className="hs-accordion-group">
          <div
            className="hs-accordion bg-white first:rounded-t-lg last:rounded-b-lg text-right"
            id="hs-bordered-heading-two"
          >
            <button
              className="hs-accordion-toggle text-blue-600 inline-flex items-center justify-end w-full text-right transition"
              aria-controls="hs-basic-bordered-collapse-two"
            >
              注文詳細
              <svg
                className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 "
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M8 15.36L8 2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <svg
                className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <div
              id="hs-basic-bordered-collapse-two"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-bordered-heading-two"
            >
              <div className="my-2">
                <div className="text-gray-700 p-2 text-sm bg-zinc-50 ">
                  {clickedItems.map((item, index) => {
                    return (
                      <div key={index}>
                        {item.name} × {item.count}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ClickedItemList;
