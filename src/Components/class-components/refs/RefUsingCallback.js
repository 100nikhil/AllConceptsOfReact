/*
  It is an older way of creating ref. Not used much nowadays.

  [Note here] ->  'this.inputRef' directly points to input Element.

  We don't need to use "this.inputRef.current" 
*/

import React, { Component } from "react";

class RefUsingCallback extends Component{

  constructor(props){
    super(props);
    this.inputRef = null;
    this.setInputRef = (element) => {
      this.inputRef = element;
    }
  }

  clickHandler(){
    console.log(this.inputRef); 
    this.inputRef.focus();   //this.inputRef    NOT    this.inputRef.current
    if(this.inputRef.value){
      alert(this.inputRef.value);
    }
  }

  render(){
    return(
      <div style={{ backgroundColor: 'aliceblue', border:'1px blue solid', padding:'2rem' }}>
        <input type='text' ref={this.setInputRef} />
        <button onClick={this.clickHandler.bind(this)}>Click</button>
      </div>
    )
  }

}

export default RefUsingCallback;