import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "cordova_script";

const renderReactDom = (cordova = false) => {
  ReactDOM.render(<App cordova={cordova} />, document.getElementById("root"));
};

window.onload = function() {
  console.log("load window", window.cordova);
  if (window.cordova) {
    console.log("window1", window.cordova);
    document.addEventListener(
      "deviceready",
      () => {
        renderReactDom();
      },
      false
    );
  } else {
    console.log("window2", window.cordova);
    renderReactDom();
  }
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
