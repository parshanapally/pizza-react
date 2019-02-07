import * as types from "../actions/actions-list";
import { expect } from "code";
import pizzaReducer from "./pizzaReducer";

describe("Given pizzaReducer", () => {
  it("should return the default state", () => {
    expect(pizzaReducer(undefined, {})).to.equal([]);
  });
  it("should return the pizzas", () => {
    const mockAction = {
      type: types.FETCH_PIZZAS,
      pizzas: []
    };

    expect(pizzaReducer([], mockAction)).to.equal([]);
  });
});
