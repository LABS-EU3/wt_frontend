import React from "react";
import { shallow } from "enzyme";

import WorkoutDetail from "./WorkoutDetail";

describe("<WorkoutDetail />", () => {
  let wrapper;

  const props = {
    location: { search: jest.mock() },
    client: { mutate: jest.fn(), query: jest.fn() },
    history: { push: jest.fn() }
  };

  beforeEach(() => {
    wrapper = shallow(<WorkoutDetail {...props} />);
  });

  it("renders the WorkoutDetail component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
