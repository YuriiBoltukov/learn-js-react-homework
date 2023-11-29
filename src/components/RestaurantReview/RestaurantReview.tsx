import React from 'react';
import { Review } from '../../Models/interfaces.ts';

export interface RestaurantReviewsItemProps {
  review: Review
}
export const RestaurantReview: React.FC<RestaurantReviewsItemProps> = ({ review }) =>{
  return (
    <>
      <div>
        <p>Review: {review.text}</p>
        <p>Name: {review.user}</p>
        <p>Grade: {review.rating}</p>
      </div>
    </>
  );
}
