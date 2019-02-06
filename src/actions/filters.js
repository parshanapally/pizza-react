import * as types from "./actions-list";

export const handleFilter = pizzas => dispatch =>
  dispatch({ type: types.HANDLE_FILTER_PIZZAS, pizzas });

export const handleSort = pizzas => dispatch =>
  dispatch({ type: types.HANDLE_SORT_PIZZAS, pizzas });
