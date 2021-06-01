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
    console.log("EmployeeList: useEffect - getEmployees");
    getEmployees();
    // The empty brackets cause this logic to run only once.
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="employees">
      {employees.map((employee) => {
        return (
          <div className="employee" id={`employee--${employee.id}`}>
            <div className="employee__name">Name: {employee.name}</div>
            <div className="employee__location">
              Location: {employee.location}
            </div>
          </div>
        );
      })}
    </section>
  );
};
