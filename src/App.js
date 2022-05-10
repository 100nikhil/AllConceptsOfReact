import { Fragment } from "react";
import "./App.css";
import Another from "./Components/Another";
import FirstClass from "./Components/FirstClass";
import UsingAxios from "./Components/UsingAxios";

function App() {

  const something = "This is the passed prop!";

  return (
    <Fragment>
      <div className="container">
        <h1>Welcome to react version 18+ </h1>
        <Another myprop={"PROPPAAAA!"}/>
        <FirstClass prop1={something}/>
        <UsingAxios />
      </div>
    </Fragment>
  );
}

export default App;
