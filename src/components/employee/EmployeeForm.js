import React, { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "../employee/EmployeeProvider";
import { LocationContext } from "../location/LocationProvider";
// import { AnimalContext } from "../animal/AnimalProvider";
// import { CustomerContext } from "../customer/CustomerProvider";
import "./Employee.css";
import { useHistory } from "react-router-dom";

export const EmployeeForm = () => {
  const { addEmployee } = useContext(EmployeeContext);
  const { locations, getLocations } = useContext(LocationContext);
  //   const { customers, getCustomers } = useContext(CustomerContext);

  /*
  With React, we do not target the DOM with `document.querySelector()`. 
  Instead, our return (render) reacts to state or props.

  Define the initial state of the form inputs with useState()
  */

  const [employee, setEmployee] = useState({
    name: "",
    breed: "",
    locationId: 0,
    customerId: 0,
  });
  // useHistory() is a hook function provided by react-router-dom.
  // It allows you to ***immediately use a push() method which you can use
  // to change the URL***. Be sure to import it at the top of the document.

  const history = useHistory();

  /*
  Reach out to the world and get customers state
  and locations state on initialization.
  */
  useEffect(() => {
    getLocations();
  }, []);

  //When a field changes, update state. The return will re-render
  // and display based on the values in state
  //Controlled component
  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    const newEmployee = { ...employee };
    /* Employee is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newEmployee[event.target.id] = event.target.value;
    // update state
    setEmployee(newEmployee);
  };

  const handleClickSaveEmployee = (event) => {
    event.preventDefault(); //Prevents the browser from submitting the form

    const locationId = parseInt(employee.locationId);
    if (locationId === 0) {
      window.alert("Please select a location and a customer");
    } else {
      //Invoke addAnimal passing the new animal object as an argument
      //Once complete, change the url and display the animal list

      const newEmployee = {
        name: employee.name,
        email: employee.email,
        locationId: locationId,
      };
      addEmployee(newEmployee).then(() => history.push("/employees"));
    }
  };

  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">New Employee</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Employee name:</label>
          <input
            type="text"
            id="name"
            required
            autoFocus
            className="form-control"
            placeholder="Employee name"
            value={employee.name}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Employee email:</label>
          <input
            type="text"
            id="email"
            required
            autoFocus
            className="form-control"
            placeholder="Employee email"
            value={employee.email}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Assign to location: </label>
          <select
            name="locationId"
            id="locationId"
            className="form-control"
            value={employee.locationId}
            onChange={handleControlledInputChange}>
            <option value="0">Select a location</option>
            {locations.map((l) => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={handleClickSaveEmployee}>
        Save Employee
      </button>
    </form>
  );
};

/**** Pseudo-code: edit employee ***
- Create route in ApplicationViews for editing EmployeeForm
- Create updateEmployee fetch PUT request in provider, and expose in Employee Context
- Create removeEmployee fetch DELETE request in provider, and expose in EmployeeContext
- Create getEmployeeById fetch request, expose in context

- Add logic to form: 
  if an employee's id has been matched via useParams, render edit form, 
  and add update (save) button to Employee form (see animals), 
  and add a release button to form

- State updates in real time with user input. 

*/
