import { Component } from "react";

class CountPeople extends Component{
  constructor(){
    super();
    this.state ={
      entryCount: 0,
      exitCount: 0
    }
  }

  updateEntry(){
    this.setState((prevState) => {
      return { entryCount: prevState.entryCount+1 }
    })
  }

  updateExit(){
    this.setState((prevState) => {
      return { exitCount: prevState.exitCount+1 }
    })
  }

  render(){
    return(
      <div className="p-3 m-3">
        <button className="btn btn-sm btn-success" onClick={this.updateEntry.bind(this)}>Entry</button>
        <span className="m-3">{this.state.entryCount} people entered!</span>
        <button className="btn btn-sm btn-danger" onClick={this.updateExit.bind(this)}>Exit</button>
        <span className="m-3">{this.state.exitCount} people left!</span>
      </div>
    )
  }

}

export default CountPeople;