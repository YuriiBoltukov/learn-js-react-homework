import React from 'react';
import { RestaurantMenuList } from '../RestaurantMenuList/RestaurantMenuList.tsx';
import { RestaurantReviewsList } from '../RestaurantReviewsList/RestaurantReviewsList.tsx';
import { RestaurantProps } from '../../Models/interfaces.ts';

export const Restaurant: React.FC<RestaurantProps> = ({restaurant}) => {
  return (
    <li>
      <h2>{restaurant.name}</h2>
      <div>
        <h3>Menu:</h3>
        <RestaurantMenuList menuItems={restaurant.menu} />
      </div>
      <div>
        <h3>Reviews:</h3>
        <RestaurantReviewsList reviews={restaurant.reviews} />
      </div>
    </li>
  );
}

