import React from "react";
import { shallow } from "enzyme";

import SignUp from "./SignUp";

describe("<SignUp />", () => {
  let wrapper;

  const props = {
    location: { search: jest.mock() },
    client: { mutate: jest.fn(), query: jest.fn() },
    history: { push: jest.fn() }
  };

  beforeEach(() => {
    wrapper = shallow(<SignUp {...props} />);
  });

  it("renders the SignUp component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
