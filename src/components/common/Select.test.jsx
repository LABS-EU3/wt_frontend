import React from "react";
import { shallow } from "enzyme";

import Select from "./Select";

describe("<Select />", () => {
  let wrapper;

  const props = {
    options: [],
    name: "",
    onChange: () => {},
    placeholder: ""
  };

  beforeEach(() => {
    wrapper = shallow(<Select {...props} />);
  });

  it("renders the Preview component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
