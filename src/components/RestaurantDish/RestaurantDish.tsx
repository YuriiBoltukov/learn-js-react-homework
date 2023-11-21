import React, {useState} from 'react';
import { Dish } from '../../Models/interfaces.ts';
import {Counter} from '../Counter/Counter.tsx';

export const RestaurantDish: React.FC<Dish> = ({menu}) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    if (count === 5) return
    setCount(count + 1);
  };

  const decrement = () => {
    if(count === 0) return
    setCount(count - 1);
  };
  return (
    <>
      <div>
        <p>Meal: {menu.name}</p>
        <p>Price: {menu.price}</p>
        <Counter count={count} increment={increment} decrement={decrement} />
        {count > 0 && <p>{menu.price * count}$</p>}
      </div>
    </>
  );
}

