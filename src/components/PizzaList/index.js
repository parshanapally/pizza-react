import React from "react";
import PropTypes from "prop-types";
import "./index.css";

function renderList(pizzas = []) {
  if (Array.isArray(pizzas)) {
    return pizzas.map(pizza => {
      return (
        <li className="pizza-list-item" key={pizza}>
          {pizza}
        </li>
      );
    });
  } else {
    return (
      <p>There is not enough pizzas for you today! Try again next time!</p>
    );
  }
}

const PizzaList = props => {
  return <ul className="pizza-list">{renderList(props.pizzas)}</ul>;
};

PizzaList.propTypes = {
  pizzas: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.object.isRequired
  ])
};

export default PizzaList;
