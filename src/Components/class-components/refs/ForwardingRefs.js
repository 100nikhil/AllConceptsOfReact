/*

  Forwarding ref is a technique to automatically forwarding a ref through a component to 
  one of it's children.

  ---->        We use "React.forwardRef()" for this

  If pass ref to a child Component <SomeCustomComponent /> then ref in the parent component
  will refer to the <SomeCustomComponent /> right? YES OFCOURSE.

  Now suppose if we want the ref in parentComponent to refer to a native <input /> element
  present inside the <SomeCustomComponent /> Which is childComponent.

  Then Forwarding Ref can help

*/

import React, { Component } from "react";

//Here ref is forwarded to native <input > element of <ChildComponent >
const ChildComponent = React.forwardRef((props, ref) => {
    console.log(props.sideProp);
    return(
      <input type='text' ref={ref}/>
    )
});

//<ForwardingRefs /> is parent Component.
class ForwardingRefs extends Component{
  constructor(){
    super();
    this.inputRef = React.createRef();  //ref created in parent
  }

  clickHandler(){
    //this.inputRef.current refer to <input > of ChildComponent because of forwarding
    console.log(this.inputRef.current);
    this.inputRef.current.focus();
  }

  render(){
    return(
      <div>
        <ChildComponent sideProp={'I am passed prop'} ref={this.inputRef} />
        <button onClick={this.clickHandler.bind(this)}>Focus</button>
      </div>
    )
  }

}

export default ForwardingRefs;
