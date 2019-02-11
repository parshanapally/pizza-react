import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import { App } from "./App";
import sinon from "sinon";

describe("Given App", () => {
  let component, mockHandleFilter;

  const mockPizzas = [
    "Sausage",
    "Cheese",
    "Pepperoni",
    "Hawaiian",
    "vegetable",
    "3 cheeSe",
    "macaroni",
    "Chicken",
    "Sausage and Pepperoni"
  ];
  function requiredProps(overrides = {}) {
    return {
      pizzas: mockPizzas,
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
    expect(component.state().filteredpizzas).to.equal([]);
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

  describe("Given <FilterForm/>", () => {
    let FilterForm;

    beforeEach(() => {
      FilterForm = component.find("FilterForm");
    });

    it("should exist", () => {
      expect(FilterForm).to.have.length(1);
    });

    describe("search pizzas", () => {
      it("should filter the pizzas", () => {
        component.setState({ filteredpizzas: mockPizzas });

        const event = {
          target: {
            value: mockPizzas
          }
        };

        FilterForm.props().handleFilter(event);
        console.log(component.props().pizzas);
        expect(component.props().pizzas).to.equal({
          [event.target.value]: mockPizzas
        });
      });
    });
  });
  describe("Given <PizzaList/>", () => {
    let PizzaList;

    beforeEach(() => {
      PizzaList = component.find("PizzaList");
    });

    it("should exist", () => {
      expect(PizzaList).to.have.length(1);
    });
    it("should contain the appropriate props", () => {
      expect(PizzaList.props().pizzas).to.equal([]);
    });
  });
});
