import { expect } from "code";
import * as types from "../actions/actions-list";
import filterReducer from "./filterReducer";

describe("Given reducer", () => {
  let defaultState;

  beforeEach(() => {
    defaultState = {
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
  });

  it("should return the default state", () => {
    const expectedState = defaultState;
    expect(filterReducer(undefined, {})).to.equal(expectedState);
  });

  it("should fire handleFilter", () => {
    const expectedState = {
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
    expect(
      filterReducer(defaultState, { type: types.HANDLE_FILTER_PIZZAS })
    ).to.equal(expectedState);
  });

  it("should fire handleShow", () => {
    const expectedState = {
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
    expect(
      filterReducer(defaultState, { type: types.HANDLE_SORT_PIZZAS })
    ).to.equal(expectedState);
  });
});
