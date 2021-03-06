import { Component, Fragment } from "react";
import ClassHome from "./ClassHome";
import { Routes, Route } from "react-router-dom";
//import Posts from "./Posts";
import Posts from "./Posts";
import Homie from "./Homie";
import CountPeople from "./CountPeople";
import PlayersHome from "./players/PlayersHome";
import CurrencyConverter from "./events-example/CurrencyConverter";
import LifecycleApp from "./lifecycleMethods/LifecycleApp";
import RefTutorial from "./refs/RefTutorial";
import Base from "./redux-with-class-components/Base";

class ClassCompos extends Component {
  render() {
    return (
      <Fragment>
        <ClassHome>
          <Routes>
            <Route path="homie" element={<Homie />} />
            <Route path="posts" element={<Posts />} />
            <Route path="countPeople" element={<CountPeople />} />
            <Route path="players" element={<PlayersHome />} />
            <Route path="events" element={<CurrencyConverter />} />
            <Route path="lifecycle" element={<LifecycleApp />} />
            <Route path="refs" element={<RefTutorial />} />
            <Route path="redux" element={<Base />} />
          </Routes>
        </ClassHome>
      </Fragment>
    );
  }
}

export default ClassCompos;
