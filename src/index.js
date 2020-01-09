import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { setContext } from "apollo-link-context";
import ReactGA from "react-ga";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { getUserDetails } from "./utils";

const userData = getUserDetails();
const { REACT_APP_GOOGLE_ANALYTICS_KEY, REACT_APP_GraphQL_API } = process.env;

// Initialize google analytics
ReactGA.initialize(REACT_APP_GOOGLE_ANALYTICS_KEY);
ReactGA.pageview(window.location.pathname + window.location.search);

const cache = new InMemoryCache();
const link = new createUploadLink({
  uri: REACT_APP_GraphQL_API
});

const authLink = setContext((_, { headers }) => {
  if (userData) {
    return {
      headers: {
        ...headers,
        authorization: userData.token
      }
    };
  }
  return {
    headers: {
      ...headers
    }
  };
});
console.log(authLink);
const client = new ApolloClient({
  cache,
  link: authLink.concat(link)
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
