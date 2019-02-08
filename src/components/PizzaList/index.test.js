import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import { PizzaList } from "./index";
import Chance from "chance";

describe("Given PizzaList", () => {
  function renderComponent(props = {}) {
    return shallow(<PizzaList {...props} />);
  }

  it("should contain ul with classname of pizza-list", () => {
    const component = renderComponent();

    expect(component.find("ul.pizza-list")).to.have.length(1);
  });

  // describe("When the list is empty", () => {
  //   it("should render no pizzaItems", () => {
  //     const pizzas = [];
  //     const component = renderComponent(pizzas.length);

  //     expect(component.find("li").length).to.equal(0);
  //   });
  // });

  // describe("When the list has pizzas", () => {
  //   it("should render pizzas", () => {
  //     const chance = new Chance();
  //     const pizzas = [
  //       chance.string(),
  //       chance.string(),
  //       chance.string(),
  //       chance.string(),
  //       chance.string(),
  //       chance.string(),
  //       chance.string(),
  //       chance.string(),
  //       chance.string()
  //     ];
  //     const component = renderComponent(pizzas.length);
  //     expect(component.find("li").length).to.equal(9);
  //   });
  // });

  describe("When pizzas are not a list", () => {
    it("should display an error", () => {
      const pizzas = ["Sorry..."];
      const component = renderComponent(pizzas.length);
      expect(component.find("p").text()).to.be.equal(
        "There is not enough pizzas for you today! Try again next time!"
      );
    });
  });
});
