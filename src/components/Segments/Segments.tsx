import { RestaurantName } from '../RestaurantName/RestaurantName';

interface SegmentsProps<I> {
  items:Array<I & Segment>;
  onSelect: (item: I) => void;
}

interface Segment {
name: string ; id: string
}

export function Segments <I>({ items, onSelect }: SegmentsProps<I>) {
  return (
    <div>
      {
        items.map((item: I & Segment) => {
          return <RestaurantName title={item.name} onClick={() => onSelect(item)} />
        })
      }
    </div>
  );
}
