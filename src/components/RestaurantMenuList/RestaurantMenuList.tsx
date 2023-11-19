import React from 'react';
import { RestaurantMenuItem } from '../RestaurantMenuItem/RestaurantMenuItem.tsx';
import { MenuItem, RestaurantMenuListProps } from '../../Models/interfaces.ts';

export const RestaurantMenuList: React.FC<RestaurantMenuListProps> = ({ menuItems }) => {
  return (
    <ol>
      {
        menuItems?.map((menu: MenuItem) => {
          return <RestaurantMenuItem menu={menu} />
        })
      }
    </ol>
  );
}

