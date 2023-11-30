import { Segment, SegmentProps } from "../Segment/Segment.tsx";
import style from "./segments.module.scss";

export interface SegmentsProps<I> {
  items: Array<I & SegmentProps>;
  selectedItemId: string;
  onSelect: (item: I) => void;
}

export function Segments<I>({
  items,
  onSelect,
  selectedItemId,
}: SegmentsProps<I>) {
  return (
    <div className={style.tabs}>
      {items.map((item: I & SegmentProps) => {
        return (
          <Segment
            key={item.id}
            name={item.name}
            onClick={() => onSelect(item)}
            isActive={item.id !== undefined && item.id === selectedItemId}
          />
        );
      })}
    </div>
  );
}
