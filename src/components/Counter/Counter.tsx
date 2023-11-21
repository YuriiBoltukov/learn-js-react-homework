import  { ReactElement } from 'react';
import { CounterProps } from '../../Models/interfaces.ts';

export function Counter({ count, increment, decrement }: CounterProps): ReactElement {
  return (
    <div>
      <button onClick={decrement}>-</button>
      <p>{count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}
