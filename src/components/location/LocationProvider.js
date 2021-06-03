import React, { useState, createContext } from "react";

// The context is imported and used by individual components that need data.
// Nothing is stored in create COntext when it is defined.
export const LocationContext = createContext();

// This component establishes what data can be used.
// Locations is an empty array, setLocations is a function that modifies it.
// useState will hold and set the array of Locations.
export const LocationProvider = (props) => {
  // defines a variable that holds the state, and a function that updates it
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    return fetch("http://localhost:8088/locations")
      .then((res) => res.json())
      .then(setLocations);
  };

  const addLocation = (locationObj) => {
    return fetch("http://localhost:8088/locations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(locationObj),
    }).then(getLocations);
  };

  /*
        You return a context provider which has the
        `Locations` state, `getLocations` function,
        and the `addLocation` function as keys. This
        allows any child elements to access them. These are the only
        values I need to worry about - for the rest, just follow
        the pattern.
    */
  return (
    <LocationContext.Provider
      value={{
        locations,
        getLocations,
        addLocation,
      }}>
      {props.children}
    </LocationContext.Provider>
  );
};
