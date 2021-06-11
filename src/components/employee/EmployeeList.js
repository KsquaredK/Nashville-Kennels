import React, { useContext, useEffect } from "react";
// This context provides an array of Employee objects, and 2 functions: getEmployee, addEmployee
import { EmployeeContext } from "./EmployeeProvider";
import "./Employee.css";
import { Link, useHistory } from "react-router-dom";

export const EmployeeList = () => {
  // This state changes when `getEmployees()` is invoked below
  //  useContext allows this module to use data & functions the parent component exposes
  //Any descendant - child, granchild, etc. - can invoke useContext to gain direct access to keys exposed
  const { employees, getEmployees } = useContext(EmployeeContext);

  //useEffect - reach out to the world for something not handled during render
  // State change causes re-render - be careful not to create infinite loop.
  useEffect(() => {
    console.log("EmployeeList: Render", employees);
    getEmployees();
    // The empty brackets cause this logic to run only once.
  }, []);

  // Invoke the useHistory() hook function
  const history = useHistory();

  return (
    <section className="employee">
      <button onClick={handleRelease}>Release Employee</button>
      <h3 className="employee__name">{employee.name}</h3>
      <div className="employee__breed">{employee.breed}</div>
      <div className="employee__location">
        Location: {employee.location.name}
      </div>
      <div className="employee__owner">Customer: {employee.customer.name}</div>
    </section>
  );
};

{
  /* <>
<h2>Employees</h2>
<button onClick={() => history.push("/employees/create")}>
  Add Employee
</button>
<p></p>
<section className="employees">
  {employees.map((employee) => {
    return (
      <div
        className="employee"
        id={`employee--${employee.id}`}
        key={employee.id}>
        <div className="employee__name">
          <Link to={`/employees/detail/${employee.id}`}>
            {employee.name}
          </Link>
        </div>
      </div>
    );
  })}
</section>
</>
);
}; */
}
