import React from "react";
import { render } from "@testing-library/react";
import Login from "./LogIn";

describe("<Login/>", () => {
  it("should match snapshot", () => {
    const login = render.create(<Login />).toJSON();
    expect(login).toMatchSnapshot();
  });
});
