import React from "react";
import { RestaurantReview } from "../RestaurantReview/RestaurantReview.tsx";
import { Review } from "../../Models/interfaces";
import style from "./reviews.module.scss";

export interface RestaurantReviewsListProps {
  reviews: Review[];
}

export const RestaurantReviews: React.FC<RestaurantReviewsListProps> = ({
  reviews,
}) => {
  return (
    <ul className={style.review}>
      {reviews?.map((item: Review) => {
        return (
          <li className={style.review_item} key={item.id}>
            <RestaurantReview review={item} />
          </li>
        );
      })}
    </ul>
  );
};
