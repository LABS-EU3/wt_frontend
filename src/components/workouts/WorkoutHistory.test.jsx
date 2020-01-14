import React from "react";
import { shallow } from "enzyme";

import WorkoutHistory from "./WorkoutHistory";

describe("<WorkoutHistory />", () => {
  let wrapper;

  const props = {
    location: { search: jest.mock() },
    client: { mutate: jest.fn(), query: jest.fn() },
    history: { push: jest.fn() }
  };

  beforeEach(() => {
    wrapper = shallow(<WorkoutHistory {...props} />);
  });

  it("renders the WorkoutHistory component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
