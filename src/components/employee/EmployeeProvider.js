import React, { useState, createContext } from "react";

// The context is imported and used by individual components that need data.
// Nothing is stored in create COntext when it is defined.
export const EmployeeContext = createContext();

// This component establishes what data can be used.
// Employees is an empty array, setEmployees is a function that modifies it.
// useState will hold and set the array of Employees.
export const EmployeeProvider = (props) => {
  // defines a variable that holds the state, and a function that updates it
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    return fetch("http://localhost:8088/Employees?_expand=location")
      .then(res => res.json())
      .then(setEmployees);
  };

  const addEmployee = (employeeObj) => {
    return fetch("http://localhost:8088/Employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeeObj),
    }).then(getEmployees);
  };

  /*
        You return a context provider which has the
        `Employees` state, `getEmployees` function,
        and the `addEmployee` function as keys. This
        allows any child elements to access them. These are the only
        values I need to worry about - for the rest, just follow
        the pattern.
    */
  return (
    <EmployeeContext.Provider
      value={{
        employees,
        getEmployees,
        addEmployee,
      }}>
      {props.children}
    </EmployeeContext.Provider>
  );
};
