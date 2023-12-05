import React from "react";
import style from "./segment.module.scss";

export interface SegmentProps {
  name: string;
  id?: string;
  onClick?: () => void;
  isActive?: boolean;
}

export const Segment: React.FC<SegmentProps> = ({
  name,
  onClick,
  isActive,
}) => {
  return (
    <button
      className={`${style.tab} ${isActive ? style.tab_active : ""}`}
      onClick={onClick}
    >
      <p className={style.tab_text}>{name}</p>
    </button>
  );
};
