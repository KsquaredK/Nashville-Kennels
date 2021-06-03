import React, { useContext, useEffect } from "react";
// This context provides an array of Employee objects, and 2 functions: getEmployee, addEmployee
import { EmployeeContext } from "./EmployeeProvider";
import "./Employee.css";

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

  return (
    <section className="employees">
      {console.log("EmployeeList: Render", employees)}
      {employees.map((employee) => {
        return (
          <div
            className="employee"
            id={`employee--${employee.id}`}
            key={employee.id}>
            <div className="employee__name">
              <em>Name:</em> {employee.name}
            </div>
            <div className="employee__location">
              <em>Location:</em> {employee.location.name}
            </div>
          </div>
        );
      })}
    </section>
  );
};
