import { FormState } from "../components/ReviewForm/ReviewForm.tsx";
import { SET_NAME, SET_RATING, SET_SUBMIT, SET_TEXT } from "../constants.ts";

export type ActionType =
  | { type: typeof SET_NAME; payload: string }
  | { type: typeof SET_TEXT; payload: string }
  | { type: typeof SET_RATING; payload: number }
  | { type: typeof SET_SUBMIT };

export function formReducer(state: FormState, action: ActionType): FormState {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_TEXT:
      return { ...state, text: action.payload };
    case SET_RATING:
      return { ...state, rating: action.payload };
    case SET_SUBMIT:
      return { name: "", text: "", rating: 5 };
    default:
      return state;
  }
}
