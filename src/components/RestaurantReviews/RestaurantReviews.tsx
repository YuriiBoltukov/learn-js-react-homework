import React from 'react';
import { RestaurantReview } from '../RestaurantReview/RestaurantReview.tsx';
import { RestaurantReviewsListProps, Review } from '../../Models/interfaces';

export const RestaurantReviews: React.FC<RestaurantReviewsListProps> = ({ reviews }) => {
  return (
    <ul>
      {
        reviews?.map((item: Review) => {
          return (
            <li>
              <RestaurantReview review={item} />
            </li>
          )
        })
      }
    </ul>
  );
}
