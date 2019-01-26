import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";

import FilterForm from ".";

describe("Given App", () => {
  let component;

  beforeEach(() => {
    component = shallow(<FilterForm />);
  });

  it("should contain <App />", () => {
    expect(component).to.exist();
  });
  it("should contain div with classname of filter-form ", () => {
    expect(component.find("div.filter-form")).to.have.length(1);
  });
  it("should contain input with classname of filter-input ", () => {
    expect(component.find("input.filter-input")).to.have.length(1);
  });
  it("should contain button with classname of sort-button ", () => {
    expect(component.find("button.sort-button")).to.have.length(1);
  });
});
