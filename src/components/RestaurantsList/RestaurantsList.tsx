import React from 'react';
import { IRestaurant, RestaurantsListProps } from '../../Models/interfaces';
import { Restaurant } from '../Restaurant/Restaurant';



export const RestaurantsList: React.FC<RestaurantsListProps> = ({ restaurants }) => {
  return (
    <ul>
      {
        restaurants?.map((restaurant: IRestaurant) => {
          return (
            <li>
              <Restaurant restaurant={restaurant} />
            </li>
          )
        })
      }
    </ul>
  );
}

