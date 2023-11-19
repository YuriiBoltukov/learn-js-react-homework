import React from 'react';
import { RestaurantReviewsItemProps } from '../../Models/interfaces.ts';

export const RestaurantReviewsItem: React.FC<RestaurantReviewsItemProps> = ({ review }) =>{
  return (
    <li>
      <div>
        <p>Review: {review.text}</p>
        <p>Name: {review.user}</p>
        <p>Grade: {review.rating}</p>
      </div>
    </li>
  );
}
