import React from "react";
import { shallow } from "enzyme";

import Logo from "./Logo";

describe("<Logo />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Logo />);
  });

  it("renders the Logo component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
