import React from 'react';
import { RestaurantNameProps } from '../../Models/interfaces.ts';

export const RestaurantName: React.FC<RestaurantNameProps> = ({ title, onClick }) => {
  return (
    <button onClick={onClick}>{title}</button>
  )
}



