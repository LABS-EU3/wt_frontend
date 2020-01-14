import React from "react";
import { shallow } from "enzyme";

import Input from "./Input";

describe("<Input />", () => {
  let wrapper;

  const props = {
    location: { search: jest.mock() },
    client: { mutate: jest.fn(), query: jest.fn() },
    history: { push: jest.fn() },
    id: "search",
    name: "search",
    placeholder: "Search",
    variant: "jest.mock()",
    type: "text",
    onChange: jest.fn(),
    value: "",
    error: ""
  };

  beforeEach(() => {
    wrapper = shallow(<Input {...props} />);
  });

  it("renders the Input component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
