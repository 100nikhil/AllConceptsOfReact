import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authActions } from "../store/auth-slice";

const NavComponent = () => {

  const loggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    localStorage.removeItem('token');
    dispatch(authActions.logMeOut());
  }
  const loginHandler = () => {
    localStorage.setItem('token', "react-app");
    dispatch(authActions.logMeIn());
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
            {
              loggedIn && <Link to="/contextApi" className="nav-link" style={{color:"white"}}>
              Context
            </Link>
            }
            {
              loggedIn && <Link to="/hooks" className="nav-link" style={{color:"white"}}>
              Hooks
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
