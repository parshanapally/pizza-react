import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import { App } from "./App";
import sinon from "sinon";

describe("Given App", () => {
  let component, testProps, mockHandleFilter;

  function requiredProps(overrides = {}) {
    return {
      pizzas: { pizzas: [] },
      ...overrides
    };
  }

  beforeEach(() => {
    mockHandleFilter = {};
    component = renderComponent();
  });

  afterEach(() => {
    sinon.restore();
  });

  function renderComponent(props = requiredProps) {
    return shallow(<App {...props} />);
  }

  it("should contain <App />", () => {
    expect(component).to.exist();
  });
  it("should have default state", () => {
    expect(component.state().load).to.be.false();
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

  it("should contain <FilterForm />", () => {
    const FilterForm = component.find("FilterForm");
    expect(FilterForm).to.have.length(1);
  });
});
