import React from "react";
import "./index.css";

const FilterForm = props => {
  return (
    <div className="filter-form">
      <input className="filter-input" onChange={props.handleFilter} />

      <button className="sort-button" onClick={props.handleSort}>
        Submit
      </button>
    </div>
  );
};

export default FilterForm;
