import React from "react";
import { shallow } from "enzyme";

import Preview from "./Preview";

describe("<Preview />", () => {
  let wrapper;

  const props = {
    pageName: "Login"
  };

  beforeEach(() => {
    wrapper = shallow(<Preview {...props} />);
  });

  it("renders the Preview component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
