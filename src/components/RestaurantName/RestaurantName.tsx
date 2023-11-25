import React from 'react';

export interface RestaurantNameProps {
  title: string;
  onClick: () => void;
}

export const RestaurantName: React.FC<RestaurantNameProps> = ({ title, onClick }) => {
  return (
    <button onClick={onClick}>{title}</button>
  )
}



