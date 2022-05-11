import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import mystore from "./store/mystore";

/*
  BEFORE REACT 18 WE WOULD WRITE THE CODE LIKE

  ReactDOM.render(
    <App />, 
    document.getElementById('root')
  )
*/

//due to <React.StrictMode></React.StrictMode> output will be printed twice in console

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={mystore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

//----------------------- Use of React.createElement() -------------------------

/* 
    first arg = type_of_element ex: h1, p, div etc
    second arg = attributes, props, className etc passed
    third arg = NestedContent may be string as text or Some other ReactComponent or element
*/
// const myElement = React.createElement(
//   "h1",
//   {},
//   "This is headline from element created via ReactDOM.createElement()"
// );

// const mySecondElement = React.createElement(
//   "p",
//   {},
//   "This is paragraph from element created via ReactDOM.createElement()"
// );

//you can pass a list of nested components
// const myThirdElement = React.createElement(
//   "ul",
//   {},
//   [
//     React.createElement('li',{},"Lemon"),
//     React.createElement('li',{},"Orange"),
//     React.createElement('li',{},"Mango"),
//   ]
// );

// const parentElement = React.createElement(
//   "div",
//   {},
//   myElement, mySecondElement, myThirdElement
// );

// root.render(
//   parentElement
// );