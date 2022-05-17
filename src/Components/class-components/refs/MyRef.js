/*
  Refs are created to get direct access to DOM elements.

  Ways to create refs.

  1. React.CreateRef()          2. useRef() hook      3. Old approach of callback method


*/

import React, { Component } from "react";

class MyRef extends Component{

  constructor(props){
    super(props);
    this.inputRef = React.createRef();
  }

  clickHandler(){
    console.log(this.inputRef.current);
    this.inputRef.current.focus();
  }

  render(){
    return(
      <div style={{ backgroundColor: 'aliceblue', border:'1px blue solid', padding:'2rem' }}>
        <input type='text' ref={this.inputRef} />
        <button onClick={this.clickHandler.bind(this)}>Click</button>
      </div>
    )
  }

}

export default MyRef;