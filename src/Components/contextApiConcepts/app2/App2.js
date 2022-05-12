import { Fragment, useState } from "react";
import ThemeContext from "./app2Context";
import EmployeeList from "./EmployeeList";

const App2 = () => {

  const [theme, setTheme] = useState({
    cName: 'btn btn-sm btn-primary'
  });

  return (
    <Fragment>
      <h2>App2</h2>
      <ThemeContext.Provider value={theme}>
        <EmployeeList />
      </ThemeContext.Provider>
    </Fragment>
  );
};

export default App2;
