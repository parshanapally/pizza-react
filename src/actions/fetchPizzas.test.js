import configureMockStore from "redux-mock-store";
import { expect } from "code";
import thunk from "redux-thunk";
import sinon from "sinon";
import * as types from "./actions-list";
import * as actions from "./fetchPizzas";

import * as fetchPizzas from "../services/fetchPizza";

describe("actions", () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  let fetchPizzaStub;

  beforeEach(() => {
    fetchPizzaStub = sinon.stub(fetchPizzas, "fetchPizzaList");
  });

  afterEach(() => {
    sinon.restore();
  });

  it("should fire the fetchEmployees method", () => {
    const store = mockStore({});
    const pizzas = {};

    fetchPizzaStub.resolves(pizzas);

    return store.dispatch(actions.fetchEmployees()).then(() => {
      const action = store.getActions()[0];
      expect(action).to.equal({ type: types.FETCH_EMPLOYEES, pizzas });
    });
  });
});
