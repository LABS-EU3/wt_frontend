import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, theme } from "@chakra-ui/core";

const customRender = component =>
  render(
    <Router>
      <ThemeProvider
        theme={{
          ...theme,
          fonts: { ...theme.fonts, body: "Roboto", heading: "Ubuntu" }
        }}
      >
        {component}
      </ThemeProvider>
    </Router>
  );

test("renders without crashing", () => {
  const { getByTestId } = customRender(<App />);
  const app = getByTestId("App");
  expect(app).toBeInTheDocument();
});
