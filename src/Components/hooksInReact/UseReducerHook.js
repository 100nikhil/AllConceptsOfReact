/*
  const [state, dispatch] = useReducer(reducer, initialArg, init);

  An alternative to useState. Accepts a reducer of type (state, action) => newState, and 
  returns the current state paired with a dispatch method.

  useReducer is usually preferable to useState when you have complex state logic that 
  involves multiple sub-values or when the next state depends on the previous one. 
  useReducer also lets you optimize performance for components that trigger deep updates 
  because you can pass dispatch down instead of callbacks.

  Lazy initialization --> 

  You can also create the initial state lazily. To do this, you can pass an init function 
  as the third argument. The initial state will be set to init(initialArg).

  It lets you extract the logic for calculating the initial state outside the reducer. 
  This is also handy for resetting the state later in response to an action:
*/

import { useReducer } from "react";

const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

const UseReducerHook = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return(
    <div className="mt-3" style={{backgroundColor: '#f5ad11',color:'#000'}}>
      <h3>{state.count}</h3>
      <button className="btn btn-sm btn-success" onClick={() => {dispatch({type:'increment'})}}>+</button>
      <button className="btn btn-sm btn-danger" onClick={() => {dispatch({type:'decrement'})}}>-</button>
    </div>
  );
}

export default UseReducerHook;