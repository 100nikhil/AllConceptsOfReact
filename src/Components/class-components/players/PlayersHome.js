import { Component } from "react";
import indianPlayers from "./indianPlayers";
import ListOfIndianPlayers from "./ListOfIndianPlayers";
import ListOfPlayers from "./ListOfPlayers";
import ScoreBelow70 from "./ScoreBelow70";

class PlayersHome extends Component{
  constructor(){
    super();
    this.players = [
      {name:"Sachin", score:200},
      {name:"Ab de villiers", score:95},
      {name:"Joe root", score:120},
      {name:"Ricky Ponting", score:101},
      {name:"Shoaib Akhtar", score:10},
      {name:"Yuvraj", score:65},
      {name:"McGrath", score:20},
      {name:"Flintoff", score:56},
      {name:"Virat Kohli", score:140},
      {name:"Rohit Sharma", score:90},
      {name:"Nicolas Pooran", score:85},
    ];
    this.below70Players = this.players.filter(x => x.score<70);
    this.iPlayers = indianPlayers;
    this.state = {
      flag: true
    }
  }

  toggleHandler(){
    this.setState((prevState) => {return { flag: !prevState.flag }});
  }

  OddPlayers([first,,third,,fifth]){
    return(
      <div>
        <ul>
          <li>{first}</li>
          <li>{third}</li>
          <li>{fifth}</li>
        </ul>
      </div>
    );
  }

  EvenPlayers([,second,,fourth,,sixth]){
    return(
      <div>
        <ul>
          <li>{second}</li>
          <li>{fourth}</li>
          <li>{sixth }</li>
        </ul>
      </div>
    );
  }

  render(){
    return(
      <div className="container">
        <button className="btn btn-sm btn-primary" onClick={this.toggleHandler.bind(this)}>Toggle view</button>
        {
          (this.state.flag) &&
            (
              <div>
                <h1>List of players</h1>
                <ListOfPlayers allPlayers={this.players} />
                <hr/>
                <h1>List of players with scores below 70</h1>
                <ScoreBelow70 allPlayers={this.below70Players} />
              </div>
            )
        }
        {
          (!this.state.flag) &&
            (
              <div>
                <h1>List of players</h1>
                <h1>Odd players</h1>
                {this.OddPlayers(this.iPlayers)}
                <hr/>
                <h1>Even players</h1>
                {this.EvenPlayers(this.iPlayers)}
                <h1>List of indian players merged</h1>
                <ListOfIndianPlayers allPlayers={this.iPlayers} />
              </div>
            )
        }
      </div>
    )
  }

}

export default PlayersHome;