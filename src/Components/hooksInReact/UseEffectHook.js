/*

  [NOTE: Hooks should be on top of the component & only function components support hooks.]

  useEffect() hook is there to handle side effects, ex: fetching data from api, changing DOM
  directly etc.

  useEffect() is an option for componentDidMount(), componentDidUpdate() & 
  componentWillUnmount() lifecycle methods. Because functional components don't have
  these methods but functional component support hooks.

  useEffect(() => {}) or  useEffect(() => {}, []) === componentDidMount()
  useEffect(() => {}, [dep1, dep2...]) === componentDidUpdate()
  useEffect(() => { ... () => { cleanup function}}, [dep1, dep2...]) === componentWillUnmount()
  
*/

import { useEffect, useState } from "react";

const UseEffectHook = () => {

  const [count, setCount] = useState(0);

  //componentDidMount()
  /*
  useEffect(() => {
    document.getElementById('title').innerText = `Displayed in first render run one time only. [ count: ${count} ]`;
  });
  */

  //componentDidUpdate()
  useEffect(() => {
    document.getElementById('title2').innerText = `Change if dependency i.e., count changes. [ count: ${count} ]`;
  },[count]);

  //componentWillUnmount()

  useEffect(() => { 

    //....some code....
    console.log('code runs when the first time component mounts!');
    //cleanup-function [runs only during when component unmounts]
    return () => { console.log('Every time component unmounts I will be displayed!'); };
  },[]);


  function increment(){
    setCount(count+1);
  }
  
  function decrement(){
    setCount(count-1);
  }

  return(
    <div id='whole' style={{backgroundColor: '#f5ad11',color:'#000'}}>
      {/* <h2 id="title">It will be changed</h2> */}
      <h2 id="title2">It will be changed</h2>
      <h3>{count}</h3>
      <button className="btn btn-sm btn-success" onClick={increment}>+</button>
      <button className="btn btn-sm btn-danger" onClick={decrement}>-</button>
    </div>
  );
}

export default UseEffectHook;