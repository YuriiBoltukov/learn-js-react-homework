import {ReactElement, ReactEventHandler} from 'react';

export interface CounterProps {
  count: number;
  increment: ReactEventHandler;
  decrement: ReactEventHandler;
}
export function Counter({ count, increment, decrement }: CounterProps): ReactElement {
  return (
    <div>
      <button onClick={decrement}>-</button>
      <p>{count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}
