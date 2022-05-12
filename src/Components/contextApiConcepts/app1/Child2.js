import { useContext } from "react";
import AuthContext from "./mycontext";

const Child2 = () => {

  //useContext Hook return value from nearest context provider
  const ctx = useContext(AuthContext); 

  return(
    <div>
      <h1>App 1</h1>
      {ctx.isLoggedIn && <p>Print only if authenticated.</p>}
    </div>
  )
}

export default Child2;