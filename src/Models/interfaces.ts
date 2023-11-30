//TODO split interfaces into separate files for each related group of components

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

export interface RestaurantModel {
  id: string;
  name: string;
  menu: MenuItem[];
  reviews: Review[];
  activeSegmentId?: string;
}
