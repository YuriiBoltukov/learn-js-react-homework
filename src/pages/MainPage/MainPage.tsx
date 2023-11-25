import { Segments } from '../../components/Segments/Segments.tsx';
import { restaurants } from '../../Mock/mock.ts';
import { useState } from 'react';
import { Restaurant } from '../../components/Restaurant/Restaurant.tsx';
import {RestaurantModel} from '../../Models/interfaces.ts';

export function MainPage() {

  const [activeRestaurant, setActiveRestaurant] = useState<RestaurantModel>();



  return (
    <>
      <Segments<RestaurantModel>
        items={restaurants}
        onSelect={(restaurant) => setActiveRestaurant(restaurant)}
      />
      { activeRestaurant && <Restaurant restaurant={activeRestaurant}/> }
    </>
  );
}

