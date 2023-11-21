//TODO split interfaces into separate files for each related group of components
import {ReactEventHandler} from 'react';

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
}

export interface Review {
  id: string;
  user: string;
  text: string;
  rating: number;
}

export interface IRestaurant {
  id: string;
  name: string;
  menu: MenuItem[];
  reviews: Review[];
}

export interface RestaurantProps {
  restaurant: IRestaurant
}

export interface RestaurantMenuListProps {
  menu: MenuItem[];
}

export interface Dish {
  menu: MenuItem
}

export interface RestaurantNameProps {
  title: string;
  onClick: () => void;
}

export interface RestaurantNameListProps {
  restaurantNames: string[];
  onRestaurantSelect: (name: string) => void;
}

export interface RestaurantReviewsListProps {
  reviews: Review[];
}

export interface RestaurantReviewsItemProps {
  review: Review
}

export interface RestaurantsListProps {
  restaurants?: IRestaurant[];
}

export interface CounterProps {
  count: number;
  increment: ReactEventHandler;
  decrement: ReactEventHandler;
}