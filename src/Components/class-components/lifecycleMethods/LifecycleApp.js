import { Component } from "react";
import CompleteLifecycle from "./CompleteLifecycle";

class LifecycleApp extends Component{

  constructor(){
    super();
    this.state = {
      msg: "yeah I am passed prop"
    }
  }

  clickHandler(){
    this.setState({msg: 'Yeah I am new updated prop!'});
  }

  render(){
    return(
      <div className="container mt-3">
        <hr/>
        <h1>[ Lifecycle Methods ]</h1>
        <button className="btn btn-success mb-3" onClick={this.clickHandler.bind(this)}>
          Update state and Send new Prop To child
        </button>
        <CompleteLifecycle msg={this.state.msg}/>
      </div>
    )
  }
}

export default LifecycleApp;