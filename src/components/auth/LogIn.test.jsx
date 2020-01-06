import React from "react";
import { shallow } from "enzyme";

import LogIn from "./LogIn";

describe("<LogIn />", () => {
  let wrapper;

  const props = {
    location: { search: jest.mock() },
    client: { mutate: jest.fn(), query: jest.fn() },
    history: { push: jest.fn() }
  };

  beforeEach(() => {
    wrapper = shallow(<LogIn {...props} />);
  });

  it("renders the LogIn component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
