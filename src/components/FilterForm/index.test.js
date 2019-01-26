import React from "react";
import { expect } from "code";
import { shallow } from "enzyme";
import sinon from "sinon";
import FilterForm from "./index";

describe("Given App", () => {
  let component, handleFilterSpy, handleSortSpy;

  beforeEach(() => {
    component = renderComponent();
  });

  afterEach(() => {
    sinon.restore();
  });

  function requiredProps(overrides = {}) {
    return {
      handleFilter: handleFilterSpy,
      handleSort: handleSortSpy,
      ...overrides
    };
  }

  function renderComponent(props = requiredProps()) {
    return shallow(<FilterForm {...props} />);
  }
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
