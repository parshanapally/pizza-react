import thunk from "redux-thunk";
import Chance from "chance";
import configureMockStore from "redux-mock-store";
import { expect } from "code";
import * as types from "./actions-list";
import * as actions from "./filters";

describe("actions", () => {
  const chance = new Chance();
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  it("should fire handleFilter action", () => {
    const store = mockStore({});
    const pizzas = chance.string();
    const expectedActions = [
      {
        type: types.HANDLE_FILTER_PIZZAS,
        pizzas
      }
    ];

    store.dispatch(actions.handleFilter(pizzas));
    expect(store.getActions()).to.equal(expectedActions);
  });

  it("should fire handleSort action", () => {
    const store = mockStore({});
    const pizzas = chance.string();
    const expectedActions = [
      {
        type: types.HANDLE_SORT_PIZZAS,
        pizzas
      }
    ];

    store.dispatch(actions.handleSort(pizzas));
    expect(store.getActions()).to.equal(expectedActions);
  });
});
