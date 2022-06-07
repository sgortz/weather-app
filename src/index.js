import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

var mountNode = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App name="Jane" />
  </React.StrictMode>, mountNode);