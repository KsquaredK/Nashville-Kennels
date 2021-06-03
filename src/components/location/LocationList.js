import React, { useContext, useEffect } from "react";
// This context provides an array of location objects, and 2 functions: getLocation, addLocation
import { LocationContext } from "./LocationProvider";
import "./Location.css";

export const LocationList = () => {
  // This state changes when `getlocations()` is invoked below
  //  useContext allows this module to use data & functions the parent component exposes
  //Any descendant - child, granchild, etc. - can invoke useContext to gain direct access to keys exposed
  const { locations, getLocations } = useContext(LocationContext);

  //useEffect - reach out to the world for something not handled during render
  // State change causes re-render - be careful not to create infinite loop.
  useEffect(() => {
    console.log("LocationList: useEffect - getLocations");
    getLocations();
    // The empty brackets cause this logic to run only once.
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <section className="locations">
        {locations.map((location) => {
          return (
            <div
              className="location"
              id={`location--${location.id}`}
              key={location.id}>
              <div className="location__name">Name: {location.name}</div>
              <div className="location__address">
                Address: {location.address}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};
