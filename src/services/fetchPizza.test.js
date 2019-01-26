import sinon from "sinon";
import { fetchPizzaList } from "./fetchPizza";
import Chance from "chance";

describe("Given the fetchGif service", () => {
  let fetchStub;

  beforeEach(() => {
    fetchStub = sinon.stub(window, "fetch");
  });

  afterEach(() => {
    sinon.restore();
  });
  it("should call fetch with correct endpoint", () => {
    fetchStub.resolves({ json: sinon.spy() });
    const chance = new Chance();
    const pizza = chance.string;

    fetchPizzaList(pizza).then(() => {
      sinon.assert.calledOnce(fetchStub);
      sinon.assert.calledWithExactly(
        fetchStub,
        `https://aquent-pizza-api.herokuapp.com/pizzas`
      );
    });
  });
});
