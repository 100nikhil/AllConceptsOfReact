import { Fragment } from "react";
import Another from "./Another";
import CreateElementUsecase from "./CreateElementUsecase";
import FirstClass from "./FirstClass";
import GitRepos from "./GitRepos";

function Home() {

  const something = "This is the passed prop!";

  return (
    <Fragment>
      <div className="container">
        <h1>Welcome to react version 18+ </h1>
        <Another myprop={"PROPPAAAA!"}/>
        <FirstClass prop1={something}/>
        <CreateElementUsecase />
        <hr/>
        <GitRepos />
      </div>
    </Fragment>
  );
}

export default Home;
