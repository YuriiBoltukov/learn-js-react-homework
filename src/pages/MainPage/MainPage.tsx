import { RestaurantNames } from '../../components/RestaurantNames/RestaurantNames.tsx';
import { restaurants } from '../../Mock/mock.ts';
import { RestaurantsList } from '../../components/RestaurantsList/RestaurantsList.tsx';

export function MainPage() {
  const restaurantNames: string[] = Array.from(new Set(restaurants.map((item)=>  item.name)))
  return (
    <>
      <RestaurantNames restaurantNames={restaurantNames} />
      <RestaurantsList restaurants={restaurants} />
    </>
  );
}

