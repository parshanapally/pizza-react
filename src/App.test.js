import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import App from "./App";

describe("Given App", () => {
  let component, handleFilterSpy, handleSortSpy;

  beforeEach(() => {
    component = renderComponent();
  });
  function requiredProps(overrides = {}) {
    return {
      handleFilter: handleFilterSpy,
      handleSort: handleSortSpy,
      ...overrides
    };
  }

  function renderComponent(props = requiredProps) {
    return shallow(<App {...props} />);
  }

  it("should contain <App />", () => {
    expect(component).to.exist();
  });
  it("should have default state", () => {
    expect(component.state().filteredPizzas).to.equal([]);
    expect(component.state().load).to.be.false();
    expect(component.state().pizzas).to.equal([]);
  });

  it("should contain <FilterForm />", () => {
    const FilterForm = component.find("FilterForm");
    expect(FilterForm).to.have.length(1);
  });

  it("should contain <PizzaList />", () => {
    const PizzaList = component.find("PizzaList");
    expect(PizzaList).to.have.length(1);
  });
});
