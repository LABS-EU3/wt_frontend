import React from "react";
import { shallow } from "enzyme";

import ExerciseDetail from "./ExerciseDetail";

describe("<ExerciseDetail />", () => {
  let wrapper;

  const props = {
    location: { search: jest.mock() },
    client: { mutate: jest.fn(), query: jest.fn() },
    history: { push: jest.fn() }
  };

  beforeEach(() => {
    wrapper = shallow(<ExerciseDetail {...props} />);
  });

  it("renders the ExerciseDetail component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
