import { FormEvent, useReducer } from "react";
import { Counter } from "../Counter/Counter.tsx";
import { SET_NAME, SET_RATING, SET_SUBMIT, SET_TEXT } from "../../constants.ts";
import { formReducer } from "../../utils/formReducer.ts";
import style from "./reviewForm.module.scss";

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
    <form className={style.form}>
      <div className={style.form_input}>
        <label className={style.form_input_label} htmlFor="name">
          Your name
        </label>
        <input
          id="name"
          type="text"
          value={form.name}
          placeholder={"Ваше имя"}
          className={style.form_input_item}
          onChange={(event) => {
            dispatch({ type: SET_NAME, payload: event.target.value });
          }}
        />
      </div>
      <div className={style.form_input}>
        <label className={style.form_input_label} htmlFor="text">
          Your feedback
        </label>
        <input
          id="text"
          type="text"
          value={form.text}
          placeholder={"Напишите отзыв"}
          className={style.form_input_item}
          onChange={(event) => {
            dispatch({ type: SET_TEXT, payload: event.target.value });
          }}
        />
      </div>
      <div className={style.form_counter}>
        <p>Feedback rating</p>
        <Counter
          count={form.rating}
          increment={increment}
          decrement={decrement}
        />
      </div>
      <button className={style.form_btn} type="submit" onClick={handleSubmit}>
        submit
      </button>
    </form>
  );
}
