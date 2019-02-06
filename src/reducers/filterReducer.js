import * as types from "../actions/actions-list";

const defaultState = {
  pizzas: [
    "Sausage",
    "Cheese",
    "Pepperoni",
    "Hawaiian",
    "vegetable",
    "3 cheeSe",
    "macaroni",
    "Chicken",
    "Sausage and Pepperoni"
  ]
};

const handleFilter = (state = defaultState, action) => {
  const updatedModal = state.filter(pizza => {
    return (
      pizza.toLowerCase().search(state.currentTarget.value.toLowerCase()) !== -1
    );
  });
  return { ...state, [action.pizzas]: updatedModal };
};

const handleShow = (state = defaultState, action) => {
  const updatedModal = [...state].sort((a, b) =>
    a.toLowerCase() > b.toLowerCase() ? 1 : -1
  );
  return { ...state, [action.pizzas]: updatedModal };
};
export default function(state = defaultState, action) {
  const actionsHandler = {
    [types.HANDLE_FILTER_PIZZAS]: handleFilter,
    [types.HANDLE_SORT_PIZZAS]: handleShow
  };

  const reducer = actionsHandler[action.type];

  return reducer ? reducer(state, action) : state;
}
