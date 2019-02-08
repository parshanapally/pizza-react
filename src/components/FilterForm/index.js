import React from "react";
import "./index.css";

const FilterForm = props => {
  console.log(props);

  return (
    <div className="filter-form">
      <input
        className="filter-input"
        onChange={props.handleFilter}
        pizzas={props.pizzas}
      />

      <button
        className="sort-button"
        onClick={props.handleSort}
        pizzas={props.pizzas}
      >
        Submit
      </button>
    </div>
  );
};

export default FilterForm;
