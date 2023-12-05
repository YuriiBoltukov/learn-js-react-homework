import React from "react";
import { RestaurantMenu } from "../RestaurantMenu/RestaurantMenu.tsx";
import { RestaurantReviews } from "../RestaurantReviews/RestaurantReviews.tsx";
import { RestaurantModel } from "../../Models/interfaces.ts";
import { ReviewForm } from "../ReviewForm/ReviewForm.tsx";
import style from "./restaurant.module.scss";

export interface RestaurantProps {
  restaurant: RestaurantModel;
}

export const Restaurant: React.FC<RestaurantProps> = ({ restaurant }) => {
  return (
    <div className={style.restaurant}>
      <h2>{restaurant.name}</h2>
      <div className={style.restaurant_menu}>
        <h3>Menu:</h3>
        <RestaurantMenu menu={restaurant.menu} />
      </div>
      <div className={style.restaurant_reviews}>
        <h3>Reviews:</h3>
        <RestaurantReviews reviews={restaurant.reviews} />
      </div>
      <ReviewForm />
    </div>
  );
};
