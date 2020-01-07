import React from "react";
import { shallow } from "enzyme";

import Input from "./Input";

describe("<Input />", () => {
  let wrapper;

  const props = {
    location: { search: jest.mock() },
    client: { mutate: jest.fn(), query: jest.fn() },
    history: { push: jest.fn() },
    id: jest.mock(),
    name: jest.mock(),
    placeholder: jest.mock(),
    variant: jest.mock(),
    type: jest.mock(),
    onChange: jest.fn(),
    value: jest.mock(),
    error: jest.mock()
  };

  beforeEach(() => {
    wrapper = shallow(<Input {...props} />);
  });

  it("renders the Input component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
