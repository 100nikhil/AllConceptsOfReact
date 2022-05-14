/*
  Using React.memo is same as using shouldComponentUpdate() method.
  It is for efficient rendering. It let component render only if props change. 
  Otherwise use the memoized render result. This speeds up the UI by preventing
  unnecessary re renders.

  Todos component 

  When a component is wrapped in React.memo(), React renders the component and memoizes 
  the result. Before the next render, if the new props are the same, React reuses the 
  memoized result skipping the next rendering

*/

import React from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default React.memo(Todos);