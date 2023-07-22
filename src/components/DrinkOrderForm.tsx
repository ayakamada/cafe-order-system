import React, { useState } from "react";
import OrderItem from "./OrderItem";
import { IDrink } from "../types/drinks";
import useDrinks from "../hooks/useDrinks";

const DrinkOrderForm = () => {
  const { drinks } = useDrinks();


  return (
    <div className="DrinkOrderForm">
      <div className="bg-gray-100 pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Drink Order Form</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {drinks.map((item: IDrink, index) => {
              return <OrderItem key={item.id} item={item}/>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkOrderForm;
