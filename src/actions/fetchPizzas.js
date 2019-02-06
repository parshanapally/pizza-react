import * as types from "./actions-list";
import { fetchPizzaList } from "../services/fetchPizza";

export const fetchPizzas = () => {
  return async dispatch => {
    const pizzas = await fetchPizzaList();

    dispatch({ type: types.FETCH_EMPLOYEES, pizzas });
  };
};
