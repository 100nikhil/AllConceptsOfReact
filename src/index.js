import React from 'react';
import ReactDOM from 'react-dom/client';
//import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

/*
  BEFORE REACT 18 WE WOULD WRITE THE CODE LIKE

  ReactDOM.render(
    <App />, 
    document.getElementById('root')
  )
*/

//due to <React.StrictMode></React.StrictMode> output will be printed twice in console

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//reportWebVitals(console.log);
