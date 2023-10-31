import React from "react";
import ReactDOM from "react-dom/client";

//React Element
//JSX - Babel is transpiles to a React.createElement => ReactElement-js object => HTMLElement(render)
const Heading = () => (
  <h1 id="head">React </h1>
);

//React functional Component

const HeadingComponent = () => (
  <div id="container">
   <Heading/>
    <h1 className="heading">Functional component</h1>
  </div>

);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);