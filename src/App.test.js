import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import App from "./App";

describe("Given App", () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it("should contain <App />", () => {
    expect(component).to.exist();
  });
});
