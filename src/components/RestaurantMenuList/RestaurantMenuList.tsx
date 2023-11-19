


import {RestaurantMenuItem} from '../RestaurantMenuItem/RestaurantMenuItem.tsx';
import {MenuItem} from '../../Models/interfaces.ts';
// @ts-ignore
function RestaurantMenuList(props) {
console.log(props)
  return (
    <ul>
      {
        props.menu?.map((menu:MenuItem) => {
          return <RestaurantMenuItem menu={menu} />
        })
      }
    </ul>
  );
}

export default RestaurantMenuList;