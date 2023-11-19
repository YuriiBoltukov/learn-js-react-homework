
// @ts-expect-error


export function RestaurantMenuItem({menu}) {
  console.log(menu)
  return (
    <li>
      <div>
        <p>Meal: {menu.name}</p>
        <p>Price: {menu.price}</p>
      </div>
    </li>
  );
}

