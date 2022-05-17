/*
  const memoizedCallback = useCallback(
    () => {
      doSomething(a, b);
    },
    [a, b],
  );

  We know functions are objects in JavaScript. So with every re render of component
  functions are recreated. To prevent this wrap a function with useCallBack(), So that
  it is created only once.

  Pass an inline callback and an array of dependencies. useCallback will return a memoized 
  version of the callback that only changes if one of the dependencies has changed.

  *** IMPORTANT NOTE ***

  This is useful when passing callbacks to optimized child components that rely on 
  reference equality to prevent unnecessary renders (e.g. shouldComponentUpdate).  
  
  *** ---- ***

  NOTE: The useCallback and useMemo Hooks are similar. The main difference is that useMemo 
  returns a memoized value and useCallback returns a memoized function.

  
  Example below :-
  When count state changes as we click the + button Component will re render but <Todos />
  will not be re rendered beacuse it's state todos & hence props is not changed.

  If we don't use useCallback() hook to wrap addTodo() method then this method will be 
  recreated on each render and hence passed props does change [addTodo() passed as prop see 
  below] and <Todos /> will render unnecessarily.

  SO, useCallback() hook prevents the recreation of function. And React.memo() prevent
  re-render if props don't change.

*/

import { useCallback, useState } from "react";
import Todos from "./Todos";

const UseCallBack = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  },[]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}
export default UseCallBack;