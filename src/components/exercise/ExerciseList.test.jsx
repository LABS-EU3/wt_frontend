import React from "react";
import { shallow } from "enzyme";

import ExerciseList from "./ExerciseList";

describe("<ExerciseList />", () => {
  let wrapper;

  const props = {
    location: { search: jest.mock() },
    client: { mutate: jest.fn(), query: jest.fn() },
    history: { push: jest.fn() }
  };

  beforeEach(() => {
    wrapper = shallow(<ExerciseList {...props} />);
  });

  it("renders the ExerciseList component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
