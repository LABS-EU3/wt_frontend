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
import { split } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { getUserDetails } from "./utils";

const userData = getUserDetails();
const {
  REACT_APP_GOOGLE_ANALYTICS_KEY,
  REACT_APP_GraphQL_API,
  REACT_APP_GraphQL_API_SUBSCRIPTIONS
} = process.env;

// Initialize google analytics
ReactGA.initialize(REACT_APP_GOOGLE_ANALYTICS_KEY);
ReactGA.pageview(window.location.pathname + window.location.search);

const cache = new InMemoryCache({
  dataIdFromObject: object => {
    return Math.random();
  }
});
const httpLink = new createUploadLink({
  uri: REACT_APP_GraphQL_API,
  fetchOptions: {
    // mode: "no-cors",
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
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

const wsLink = new WebSocketLink({
  uri: `ws://${REACT_APP_GraphQL_API_SUBSCRIPTIONS}`,
  options: {
    reconnect: true
  }
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

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
