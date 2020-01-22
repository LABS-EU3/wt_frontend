import React from "react";
import { shallow } from "enzyme";

import Search from "./Search";

describe("<Search />", () => {
  let wrapper;

  const props = {
    pageName: "Workouts"
  };

  beforeEach(() => {
    wrapper = shallow(<Search {...props} />);
  });

  it("renders the Search component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
