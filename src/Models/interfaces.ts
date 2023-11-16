interface MenuItem {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
}

interface Review {
  id: string;
  user: string;
  text: string;
  rating: number;
}

export interface Restaurant {
  id: string;
  name: string;
  menu: MenuItem[];
  reviews: Review[];
}