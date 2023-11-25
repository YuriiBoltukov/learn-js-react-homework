import React from 'react';
import { RestaurantReview } from '../RestaurantReview/RestaurantReview.tsx';
import { Review } from '../../Models/interfaces';

export interface RestaurantReviewsListProps {
  reviews: Review[];
}


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
