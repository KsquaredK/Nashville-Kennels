import React, { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import "./Employee.css";
import { useParams, useHistory } from "react-router-dom";

// expose this data to descendants
export const EmployeeDetail = () => {
  // assign EmployeeContext data to var  employees
  const { employees, releaseEmployee } = useContext(EmployeeContext);
  // store state in array 'employee', using function 'setEmployee' to modify it to include location
  const [employee, setEmployee] = useState({ location: {} });
  //  store the employeeId for use assigning individual URL
  const { employeeId } = useParams();

  // ??? useEffect takes two arguments: a function and an array, keeps state updated
  useEffect(() => {
    const thisEmployee = employees.find(
      (e) => e.id === parseInt(employeeId)
    ) || {
      location: {},
    };
    // ?? either define thisEmployee by a.id || add location and customer data?? I don't get it.
    setEmployee(thisEmployee);
  }, [employeeId]);
  // useHistory hook to push page view of employees list after handleRelease
  const history = useHistory();

  const handleRelease = () => {
    releaseEmployee(employee.id).then(() => {
      history.push("/employees");
    });
  };

  return (
    <section className="employee">
      <button
        onClick={() => {
          history.push(`/employees/edit/${employee.id}`);
        }}>
        Edit your pet's info
      </button>
      <p></p>
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
