import { Component } from "react";
import ReduxUsage from "./ReduxUsage";

class Base extends Component{
  render(){
    return(
      <div className="container">
        <h4 className="bg-light">Redux Use in class components</h4>
        <ReduxUsage p={"Hey!!!"}/>
      </div>
    )
  }
}

export default Base;