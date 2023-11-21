import React from 'react';
import { RestaurantReviewsItem } from '../RestaurantReviewsItem/RestaurantReviewsItem';
import { RestaurantReviewsListProps, Review } from '../../Models/interfaces';

export const RestaurantReviewsList: React.FC<RestaurantReviewsListProps> = ({ reviews }) => {
  return (
    <ul>
      {
        reviews?.map((item: Review) => {
          return (
            <li>
              <RestaurantReviewsItem review={item} />
            </li>
          )
        })
      }
    </ul>
  );
}
