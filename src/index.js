import React from "react";
import ReactDOM from "react-dom";
import App from "./components/to-do-app";

const root = document.getElementById("root");
ReactDOM.render(<App />, root)

// const element = <h1>Hello</h1>
// console.log(element)

// const element = React.createElement("h1",
//       null, "Hello");

// ReactDOM.render(element,
//    document.getElementById("root"))