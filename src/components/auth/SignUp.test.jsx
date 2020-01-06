import React from "react";
import * as rtl from "@testing-library/react";
import SignUp from "./SignUp";

beforeEach(() => {
  rtl.cleanup();
});

describe("<SignUp />", () => {
  it(" shows SignUp form", () => {
    rtl.render(<SignUp />);
  });
});
