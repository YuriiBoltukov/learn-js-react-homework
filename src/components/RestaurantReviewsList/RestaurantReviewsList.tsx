
import {RestaurantReviewsItem} from '../RestaurantReviewsItem/RestaurantReviewsItem.tsx';
import {Review} from '../../Models/interfaces.ts';

// @ts-ignore
export function RestaurantReviewsList(props) {

  return (
    <ul>
      {
        props.restaurant?.map((item: Review) => {
          return <RestaurantReviewsItem reviews={item} />
        })
      }
    </ul>
  );
}
