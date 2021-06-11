import React, { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import "./Employee.css";
import { useParams, useHistory } from "react-router-dom";

export const EmployeeDetail = () => {
  const { employees, releaseEmployee } = useContext(EmployeeContext);
  const [employee, setEmployee] = useState({ location: {}, customer: {} });

  /*
        Given the example URL above, this will store the value
        of 5 in the employeeId variable
    */
  const { employeeId } = useParams();

  const history = useHistory();

  const handleRelease = () => {
    releaseEmployee(employee.id).then(() => {
      history.push("/employees");
    });
  };

  useEffect(() => {
    const thisEmployee = employee.find(
      (e) => e.id === parseInt(employeeId)
    ) || {
      location: {},
      customer: {},
    };

    setEmployee(thisEmployee);
  }, [employeeId]);

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
