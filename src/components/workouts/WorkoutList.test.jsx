import React from "react";
import { shallow } from "enzyme";

import WorkoutList from "./WorkoutList";

describe("<WorkoutList />", () => {
  let wrapper;

  const props = {
    location: { search: jest.mock() },
    client: { mutate: jest.fn(), query: jest.fn() },
    history: { push: jest.fn() }
  };

  beforeEach(() => {
    wrapper = shallow(<WorkoutList {...props} />);
  });

  it("renders the WorkoutList component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
