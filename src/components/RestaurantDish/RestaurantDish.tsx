import React from 'react';
import { Dish } from '../../Models/interfaces.ts';

export const RestaurantDish: React.FC<Dish> = ({menu}) => {
  return (
    <>
      <div>
        <p>Meal: {menu.name}</p>
        <p>Price: {menu.price}</p>
      </div>
    </>
  );
}

