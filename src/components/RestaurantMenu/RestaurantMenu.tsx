import React from 'react';
import { RestaurantDish } from '../RestaurantDish/RestaurantDish.tsx';
import { MenuItem, RestaurantMenuListProps } from '../../Models/interfaces.ts';

export const RestaurantMenu: React.FC<RestaurantMenuListProps> = ({ menu }) => {
  return (
    <ol>
      {
        menu?.map((menu: MenuItem) => {
          return (
            <li>
              <RestaurantDish menu={menu} />
            </li>
          )
        })
      }
    </ol>
  );
}

