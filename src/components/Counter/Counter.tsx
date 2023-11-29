import { ReactElement, ReactEventHandler } from "react";
import style from "./counter.module.scss";

export interface CounterProps {
  count: number;
  increment: ReactEventHandler;
  decrement: ReactEventHandler;
}

export function Counter({
  count,
  increment,
  decrement,
}: CounterProps): ReactElement {
  return (
    <div className={style.counter}>
      <button className={style.counter_button} onClick={decrement}>
        -
      </button>
      <p className={style.counter_text}>{count}</p>
      <button className={style.counter_button} onClick={increment}>
        +
      </button>
    </div>
  );
}
