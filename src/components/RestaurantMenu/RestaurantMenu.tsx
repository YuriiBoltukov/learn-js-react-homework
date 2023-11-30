import React from "react";
import { RestaurantDish } from "../RestaurantDish/RestaurantDish.tsx";
import { MenuItem } from "../../Models/interfaces.ts";
import style from "./menu.module.scss";

export interface RestaurantMenuListProps {
  menu: MenuItem[];
}

export const RestaurantMenu: React.FC<RestaurantMenuListProps> = ({ menu }) => {
  return (
    <ol className={style.menu}>
      {menu?.map((menu: MenuItem) => {
        return (
          <li key={menu.id} className={style.menu_item}>
            <RestaurantDish menu={menu} />
          </li>
        );
      })}
    </ol>
  );
};
