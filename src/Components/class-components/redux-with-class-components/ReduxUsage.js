import { Component } from "react";
import {connect} from 'react-redux'; 
import { authActions } from "../../../store/auth-slice";

class ReduxUsage extends Component{

  constructor(props){
    super();
  }

  render(){
    console.log(this.props);

    return(
      <div>
        <h6>{this.props.p}</h6>
        {this.props.loggedIn && <div>{this.props.msg}</div>}
        <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    loggedIn: state.auth.isLoggedIn,
    msg: state.auth.msg
  }
}

function mapDispatchToProps(dispatch){
  return {
    login: () => dispatch(authActions.logMeIn()),
    logout: () => dispatch(authActions.logMeOut()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxUsage);