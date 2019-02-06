import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import App from "./App";
import sinon from "sinon";

describe("Given App", () => {
  let component, handleFilterSpy, handleSortSpy, mockHandleFilter;

  beforeEach(() => {
    mockHandleFilter = {};
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
  it("should contain <div />", () => {
    expect(component.find("div")).to.have.length(1);
  });
  it("should contain <h2 />", () => {
    expect(component.find("h2")).to.have.length(1);
  });
  it("should contain <span /> with classname pizza-container", () => {
    expect(component.find("span.pizza-container")).to.have.length(1);
  });

  it("should contain <img /> with classname pizza-image", () => {
    expect(component.find("img.pizza-image")).to.have.length(1);
  });
  it("should contain <PizzaList />", () => {
    const PizzaList = component.find("PizzaList");
    expect(PizzaList).to.have.length(1);
  });

  describe("Given FilterForm", () => {
    const FilterForm = component.find("FilterForm");
    it("should contain <FilterForm />", () => {
      expect(FilterForm).to.have.length(1);
    });

    it("should contain appropriate props ", () => {
      FilterForm.props().handleFilter(1);
      sinon.assert.calledOnce(mockHandleFilter.handleFilterSpy);
    });
  });
});
