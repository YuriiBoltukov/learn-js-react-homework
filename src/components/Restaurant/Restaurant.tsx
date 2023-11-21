import React from 'react';
import { RestaurantMenu } from '../RestaurantMenu/RestaurantMenu.tsx';
import { RestaurantReviews } from '../RestaurantReviews/RestaurantReviews.tsx';
import { RestaurantProps } from '../../Models/interfaces.ts';

export const Restaurant: React.FC<RestaurantProps> = ({restaurant}) => {
  console.log(restaurant.menu)
  return (
    <>
      <h2>{restaurant.name}</h2>
      <div>
        <h3>Menu:</h3>
        <RestaurantMenu menu={restaurant.menu} />
      </div>
      <div>
        <h3>Reviews:</h3>
        <RestaurantReviews reviews={restaurant.reviews} />
      </div>
    </>
  );
}

