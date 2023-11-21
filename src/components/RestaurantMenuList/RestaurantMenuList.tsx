import React from 'react';
import { RestaurantDish } from '../RestaurantDish/RestaurantDish.tsx';
import { MenuItem, RestaurantMenuListProps } from '../../Models/interfaces.ts';

export const RestaurantMenuList: React.FC<RestaurantMenuListProps> = ({ menuItems }) => {
  return (
    <ol>
      {
        menuItems?.map((menu: MenuItem) => {
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

