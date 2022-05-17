import { Component } from "react";
import ForwardingRefs from "./ForwardingRefs";
import MyRef from "./MyRef";
import RefUsingCallback from "./RefUsingCallback";

class RefTutorial extends Component{

  render(){
    return(
      <div className="container">
        <MyRef />
        <hr />
        <RefUsingCallback />
        <hr />
        <ForwardingRefs />
      </div>
    )
  }
}

export default RefTutorial;