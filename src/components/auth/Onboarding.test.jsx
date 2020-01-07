import React from "react";
import { shallow } from "enzyme";

import Onboarding from "./Onboarding";

describe("<Onboarding />", () => {
  let wrapper;

  const props = {
    location: { search: jest.mock() },
    client: { mutate: jest.fn(), query: jest.fn() },
    history: { push: jest.fn() }
  };

  beforeEach(() => {
    wrapper = shallow(<Onboarding {...props} />);
  });

  it("renders the Onboarding component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
