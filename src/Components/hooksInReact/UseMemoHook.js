/*
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

  Returns a memoized value.

  Pass a “create” function and an array of dependencies. useMemo will only recompute the 
  memoized value when one of the dependencies has changed. This optimization helps to avoid 
  expensive calculations on every render.

  The useMemo Hook can be used to keep expensive, resource intensive functions from 
  needlessly running.

  If no array (dependency arr) is provided, a new value will be computed on every render.

  You may rely on useMemo as a performance optimization, not as a semantic guarantee.

*/

import { useState, useMemo } from "react";

const UseMemoHook = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  //without useMemo fn run even when todos change
  //const calculation = expensiveCalculation(count);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: '9px',
        padding: "1rem",
        backgroundColor: "grey",
        color: "#fff",
      }}
    >
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default UseMemoHook;
