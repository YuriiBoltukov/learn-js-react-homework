import {RestaurantName} from '../RestaurantName/RestaurantName.tsx';

// @ts-ignore
export function RestaurantNameList({restaurantNames}) {
  return (
    <div>
      {
        restaurantNames.map((title: string) => {
          return <RestaurantName title={title} />
        })
      }
    </div>
  );
}
