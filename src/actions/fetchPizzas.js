import * as types from "./actions-list";
import { fetchPizzaList } from "../services/fetchPizza";

export const fetchPizzas = () => {
  return async dispatch => {
    const { pizzas } = await fetchPizzaList();
    console.log(pizzas);

    dispatch({ type: types.FETCH_PIZZAS, pizzas });
  };
};
