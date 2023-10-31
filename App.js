import React from "react";
import ReactDOM from "react-dom/client";

//React Element
//JSX - Babel is transpiles to a React.createElement => ReactElement-js object => HTMLElement(render)
const heading = (
  <h1 id="heading">React </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);