import React from "react";
import { shallow } from "enzyme";

import Navigation from "./Navigation";

describe("<Navigation />", () => {
  let wrapper;

  const props = {
    location: { search: jest.mock() }
  };

  beforeEach(() => {
    wrapper = shallow(<Navigation {...props} />);
  });

  it("renders the Navigation component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
