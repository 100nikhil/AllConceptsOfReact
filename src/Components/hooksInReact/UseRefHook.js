/*
  The useRef Hook allows you to persist values between renders.
  It can be used to store a mutable value that does not cause a re-render when updated.
  It can be used to access a DOM element directly.

  useRef() only returns one item. It returns an Object called current.

*/

import { useRef, useState } from "react";

const UseRefHook = () => {

  const nameRef = useRef();
  const cityRef = useRef();

  const [name, setName] = useState('');
  const [city, setCity] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    setName(nameRef.current.value);
    setCity(cityRef.current.value);
  }

  return(
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" ref={nameRef} required/>
        <input type="text" ref={cityRef} required/>
        <button type="submit">Submit</button>
      </form>

      <h2>Name: {name}</h2>
      <h2>City: {city}</h2>
    </div>

  )
}

export default UseRefHook;