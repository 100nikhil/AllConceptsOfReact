import { Component } from "react";

class ScoreBelow70 extends Component{

  render(){
    return(
      <div>
        {this.props.allPlayers.map(p => {
          return (
            <ul>
              <li>Player : {p.name}</li>
              <li>Score  : {p.score}</li>
            </ul>
          );
        })
        }
      </div>
    )
  }
}

export default ScoreBelow70;