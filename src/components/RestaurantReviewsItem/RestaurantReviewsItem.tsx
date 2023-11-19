
// @ts-ignore
export function RestaurantReviewsItem({reviews}) {

  return (
    <li>
      <div>
        <p>Review: {reviews.text}</p>
        <p>Name: {reviews.user}</p>
        <p>Grade: {reviews.rating}</p>
      </div>
    </li>
  );
}
