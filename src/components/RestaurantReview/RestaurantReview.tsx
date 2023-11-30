import React from "react";
import { Review } from "../../Models/interfaces.ts";
import style from "./review.module.scss";

export interface RestaurantReviewsItemProps {
  review: Review;
}

export const RestaurantReview: React.FC<RestaurantReviewsItemProps> = ({
  review,
}) => {
  return (
    <>
      <div className={style.review}>
        <p className={style.review_text}>Review: {review.text}</p>
        <p className={style.review_author}>Name: {review.user}</p>
        <p className={style.review_grade}>Grade: {review.rating}</p>
      </div>
    </>
  );
};
