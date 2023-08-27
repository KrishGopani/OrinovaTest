import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  //bewlo is giving error so use the next instead
  // <StrictMode>
  //   <App />
  // </StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// import React from "react";
// import ReactDOM from "react-dom";
// ReactDOM.render(<App />, document.getElementById("root"));
