import React from 'react';
import { RestaurantName } from '../RestaurantName/RestaurantName';
import { RestaurantNameListProps } from '../../Models/interfaces.ts';

export const RestaurantNameList: React.FC<RestaurantNameListProps> = ({ restaurantNames }) => {
  return (
    <div>
      {
        restaurantNames.map((title: string) => {
          return <RestaurantName title={title} />
        })
      }
    </div>
  );
}
