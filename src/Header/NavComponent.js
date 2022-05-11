import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavComponent = () => {

  const loggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    localStorage.removeItem('token');
    dispatch({type:"logMeOut"});
  }
  const loginHandler = () => {
    localStorage.setItem('token', "react-app");
    dispatch({type:"logMeIn"});
  }

  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="d-flex">
            <Link className="navbar-brand" to="/">
              Fine Store
            </Link>
            {
              loggedIn && <Link to="/products" className="nav-link" style={{color:"white"}}>
              Products
            </Link>
            }
            {
              loggedIn && <Link to="/classComponents" className="nav-link" style={{color:"white"}}>
              ClassCompos
            </Link>
            }

          </div>
          {
            loggedIn && (
            <button className="ml-auto btn btn-outline-success" onClick={logoutHandler}>Logout</button>
          )
          }
          {
            !loggedIn && (
            <button className="ml-auto btn btn-outline-success" onClick={loginHandler}>Login</button>
          )
          }
        </div>
      </nav>
    </Fragment>
  );
};

export default NavComponent;
