import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

$(document).on("turbolinks:load", function () {
  const MOUNT_NODE = document.getElementById("products");
  ReactDOM.render(<App />, MOUNT_NODE);
});
