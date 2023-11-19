
// @ts-expect-error


export function RestaurantMenuItem({menu}) {
  console.log(menu)
  return (
    <li>
      <p>{menu.name}</p>
      <p>{menu.price}</p>
    </li>
  );
}

