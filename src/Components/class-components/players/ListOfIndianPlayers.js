import { Component } from "react";

class ListOfIndianPlayers extends Component{

  render(){
    return(
      <div>
        {this.props.allPlayers.map(p => {
          return (
            <ul>
              <li>{p}</li>
            </ul>
          );
        })
        }
      </div>
    )
  }
}

export default ListOfIndianPlayers;