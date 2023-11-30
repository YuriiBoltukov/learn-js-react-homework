import React, { useState } from "react";
import { MenuItem } from "../../Models/interfaces.ts";
import { Counter } from "../Counter/Counter.tsx";
import style from "./dish.module.scss";

export interface Dish {
  menu: MenuItem;
}

export const RestaurantDish: React.FC<Dish> = ({ menu }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    if (count === 5) return;
    setCount(count + 1);
  };

  const decrement = () => {
    if (count === 0) return;
    setCount(count - 1);
  };
  return (
    <>
      <div className={style.dish}>
        <p className={style.dish_title}>{menu.name}</p>
        <p className={style.dish_price}>Price: {menu.price}</p>
        <Counter count={count} increment={increment} decrement={decrement} />
        <p className={style.dish_total}>{menu.price * count} $</p>
      </div>
    </>
  );
};
