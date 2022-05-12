import EmployeeCard from "./EmployeeCard";

const EmployeeList = () => {

  const employees = [
    { id:1, name:'Jenny', salary:50000 },
    { id:2, name:'John', salary:70000 },
    { id:3, name:'Rebecca', salary:69000 },
  ];

  return(
    employees.map((e) => {
      return (
        <EmployeeCard key={e.id} name={e.name} salary={e.salary} />
      )
    })
  )
}

export default EmployeeList;