import { Fragment } from "react"
import NavComponent from "./NavComponent"

const Layout = (props) => {
  return(
    <Fragment>
      <NavComponent />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;