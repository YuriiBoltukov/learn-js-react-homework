import {IRestaurant} from '../../Models/interfaces.ts'
import {Restaurant} from '../Restaurant/Restaurant.tsx';


export function RestaurantsList(props: any) {
  return (
    <ul>
      {
        props.restarants?.map((restaurant: IRestaurant) => {
          return <Restaurant restaurant={restaurant} />
        })
      }
    </ul>
  );
}

