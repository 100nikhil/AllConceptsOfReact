import { createStore } from "redux";

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

export default mystore;
