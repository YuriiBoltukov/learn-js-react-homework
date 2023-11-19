import React from 'react';
import { RestaurantMenuItemProps } from '../../Models/interfaces.ts';

export const RestaurantMenuItem: React.FC<RestaurantMenuItemProps> = ({menu}) => {
  return (
    <li>
      <div>
        <p>Meal: {menu.name}</p>
        <p>Price: {menu.price}</p>
      </div>
    </li>
  );
}

