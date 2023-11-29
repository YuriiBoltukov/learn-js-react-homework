import { FormEvent, useReducer } from "react";
import { Counter } from "../Counter/Counter.tsx";
import { SET_NAME, SET_RATING, SET_SUBMIT, SET_TEXT } from "../../constants.ts";
import { formReducer } from "../../utils/formReducer.ts";

export interface FormState {
  name: string;
  text: string;
  rating: number;
}

const DEFAULT_FORM = {
  name: "",
  text: "",
  rating: 5,
};

export function ReviewForm() {
  const [form, dispatch] = useReducer(formReducer, DEFAULT_FORM);
  const increment = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (form.rating === 5) return;
    dispatch({ type: SET_RATING, payload: form.rating + 0.5 });
  };

  const decrement = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (form.rating === 0) return;
    dispatch({ type: SET_RATING, payload: form.rating - 0.5 });
  };

  function handleSubmit(event: FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    console.log(form);
    dispatch({ type: SET_SUBMIT });
  }

  return (
    <form>
      <div>
        <label htmlFor="name">name</label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(event) => {
            dispatch({ type: SET_NAME, payload: event.target.value });
          }}
        />
      </div>
      <div>
        <label htmlFor="text">text</label>
        <input
          id="text"
          type="text"
          value={form.text}
          onChange={(event) => {
            dispatch({ type: SET_TEXT, payload: event.target.value });
          }}
        />
      </div>
      <div>
        <Counter
          count={form.rating}
          increment={increment}
          decrement={decrement}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        submit
      </button>
    </form>
  );
}
