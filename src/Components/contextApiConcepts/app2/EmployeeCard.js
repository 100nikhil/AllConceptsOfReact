import { useContext } from "react";
import ThemeContext from "./app2Context";

const EmployeeCard = (props) => {
  const ctx = useContext(ThemeContext);

  return (
    <div className="mt-3 bg-dark" style={{ color: "#fff" }}>
      <div>
        <h2>Name : {props.name}</h2>
        <h2>Salary : {props.salary}</h2>
        <button className={ctx.cName}>View Profile</button>
      </div>
    </div>
  );
};

export default EmployeeCard;
