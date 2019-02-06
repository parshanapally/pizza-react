import * as types from "../actions/actions-list";

const defaultState = {};

const fetchEmployees = (state, action) => {
  return { ...state, ...action.pizzas };
};

export default function(state = defaultState, action) {
  const actionsHandler = {
    [types.FETCH_PIZZAS]: fetchEmployees
  };

  const reducer = actionsHandler[action.type];

  return reducer ? reducer(state, action) : state;
}
