//import { createStore } from "redux";

import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './auth-slice';

/*

let token = localStorage.getItem('token');
const initialState = { isLoggedIn: !!token };

const ReducerFunc = (state = initialState, action) => {
  if (action.type === "logMeIn") {
    return { isLoggedIn: true };
  } else if (action.type === "logMeOut") {
    return { isLoggedIn: false };
  }
  return { isLoggedIn: state.isLoggedIn };
};

const mystore = createStore(ReducerFunc);

*/

const mystore = configureStore({
  reducer: {
    auth: AuthReducer
  }
})

export default mystore;
