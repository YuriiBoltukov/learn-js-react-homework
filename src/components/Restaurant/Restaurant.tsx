
import RestaurantMenuList from '../RestaurantMenuList/RestaurantMenuList.tsx';
import {RestaurantReviewsList} from '../RestaurantReviewsList/RestaurantReviewsList.tsx';

// @ts-ignore
export function Restaurant({restaurant}) {
console.log(restaurant.reviews)
  return (
    <li>
      <h2>{restaurant.name}</h2>
      <div>
        <h3>Menu:</h3>
        <RestaurantMenuList restaurant={restaurant.menu} />
      </div>
      <div>
        <h3>Reviews:</h3>
        <RestaurantReviewsList restaurant={restaurant.reviews} />
      </div>
    </li>
  );
}

