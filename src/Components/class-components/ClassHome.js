import { Component, Fragment } from "react";
import { Link } from "react-router-dom";


class ClassHome extends Component {
  render() {

    return (
      <Fragment>
        <h1>This is Class Home component.</h1>
        <hr />
        <nav>
          <ul>
            <li><Link to="/classComponents/homie">Homie</Link></li>
            <li><Link to="/classComponents/posts">Posts</Link></li>
            <li><Link to="/classComponents/countPeople">Count People</Link></li>
            <li><Link to="/classComponents/players">Players</Link></li>
            <li><Link to="/classComponents/events">events</Link></li>
            <li><Link to="/classComponents/lifecycle">Lifecycle Methods</Link></li>
            <li><Link to="/classComponents/refs">Refs Tutorial</Link></li>
            <li><Link to="/classComponents/redux">Redux usage in Class Components</Link></li>
          </ul>
        </nav>
        {this.props.children}
      </Fragment>
    );
  }
}

export default ClassHome;
