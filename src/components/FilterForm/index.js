import React from "react";

const FilterForm = props => {
  return (
    <div className="filter-form">
      <input className="filter-input" onChange={props.handleFilter} />
      <button className="sort-button" onClick={props.handleSort}>
        Sort
      </button>
    </div>
  );
};

export default FilterForm;
