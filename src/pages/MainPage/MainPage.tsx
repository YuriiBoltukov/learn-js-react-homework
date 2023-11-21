import { RestaurantNames } from '../../components/RestaurantNames/RestaurantNames.tsx';
import { restaurants } from '../../Mock/mock.ts';
import { Restaurants } from '../../components/Restaurants/Restaurants.tsx';
import {useState} from 'react';

export function MainPage() {
  const restaurantNames: string[] = Array.from(new Set(restaurants.map((item)=>  item.name)))
  const [activeRestaurant, setActiveRestaurant] = useState<string>('');
  const filteredRestaurants = restaurants.filter(( item ) => {
   return  item.name === activeRestaurant
  })
  return (
    <>
      <RestaurantNames
        restaurantNames={restaurantNames}
        onRestaurantSelect={setActiveRestaurant}
      />
      <Restaurants restaurants={filteredRestaurants} />
    </>
  );
}

