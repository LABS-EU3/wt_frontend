import React from "react";
import { shallow } from "enzyme";

import SideTitle from "./SideTitle";

describe("<SideTitle />", () => {
  let wrapper;

  const props = {
    heading: "",
    subheading: ""
  };

  beforeEach(() => {
    wrapper = shallow(<SideTitle {...props} />);
  });

  it("renders the Preview component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
