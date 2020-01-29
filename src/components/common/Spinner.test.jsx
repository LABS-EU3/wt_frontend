import React from "react";
import { shallow } from "enzyme";

import Spinner from "./Spinner";

describe("<Spinner />", () => {
  let wrapper;

  const props = {
    thickness: "thick",
    size: "1rem"
  };

  beforeEach(() => {
    wrapper = shallow(<Spinner {...props} />);
  });

  it("renders the Spinner component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
