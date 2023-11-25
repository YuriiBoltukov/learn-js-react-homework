import React from 'react';
import { RestaurantDish } from '../RestaurantDish/RestaurantDish.tsx';
import { MenuItem } from '../../Models/interfaces.ts';

export interface RestaurantMenuListProps {
  menu: MenuItem[];
}

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

