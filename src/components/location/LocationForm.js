import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "../location/LocationProvider";
import "./Location.css";
import { useHistory } from "react-router-dom";

export const LocationForm = () => {
  const { addLocation } = useContext(LocationContext);
  //   const { locations, getLocations } = useContext(LocationContext);
  //   const { customers, getCustomers } = useContext(CustomerContext);

  /*
  With React, we do not target the DOM with `document.querySelector()`. 
  Instead, our return (render) reacts to state or props.

  Define the initial state of the form inputs with useState()
  */

  const [location, setLocation] = useState({
    name: "",
    address: "",
  });
  // useHistory() is a hook function provided by react-router-dom.
  // It allows you to ***immediately use a push() method which you can use
  // to change the URL***. Be sure to import it at the top of the document.

  const history = useHistory();

  /*
  Reach out to the world and get customers state
  and locations state on initialization.
  */
  //   useEffect(() => {
  //     getLocations();
  //   }, []);

  //When a field changes, update state. The return will re-render
  // and display based on the values in state
  //Controlled component
  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    const newLocation = { ...location };
    /* Location is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newLocation[event.target.id] = event.target.value;
    // update state
    setLocation(newLocation);
  };

  const handleClickSaveLocation = (event) => {
    event.preventDefault(); //Prevents the browser from submitting the form

    const addressEntry = parseInt(location.address);
    const nameEntry = parseInt(location.name);
    if (addressEntry === 0 || nameEntry === 0) {
      window.alert("Please enter an address and a name");
    } else {
      //Invoke addAnimal passing the new animal object as an argument
      //Once complete, change the url and display the animal list

      const newLocation = {
        name: location.name,
        email: location.address,
      };
      addLocation(newLocation).then(() => history.push("/locations"));
    }
  };

  return (
    <form className="locationForm">
      <h2 className="locationForm__title">New Location</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Location name:</label>
          <input
            type="text"
            id="name"
            required
            autoFocus
            className="form-control"
            placeholder="Location name"
            value={location.name}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Location address:</label>
          <input
            type="text"
            id="address"
            required
            autoFocus
            className="form-control"
            placeholder="Location address"
            value={location.address}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={handleClickSaveLocation}>
        Save Location
      </button>
    </form>
  );
};
