import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: process.env.REACT_APP_GraphQL_API //replace with backend uri
});

const client = new ApolloClient({
  cache,
  link
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <ThemeProvider
        theme={{
          ...theme,
          fonts: { ...theme.fonts, body: "Roboto", heading: "Ubuntu" }
        }}
      >
        <CSSReset />
        <App />
      </ThemeProvider>
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
