import React from "react";
import { Route } from "react-router-dom";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { EmployeeList } from "./employee/EmployeeList";
import { LocationProvider } from "./location/LocationProvider";
import { LocationList } from "./location/LocationList";
import { CustomerProvider } from "./customer/CustomerProvider";
import { CustomerList } from "./customer/CustomerList";
import { AnimalProvider } from "./animal/AnimalProvider";
import { AnimalList } from "./animal/AnimalList";

export const ApplicationViews = () => {
  return (
    <>
      <LocationProvider>
        <Route exact path="/">
          <LocationList />
        </Route>
      </LocationProvider>

      <AnimalProvider>
        <Route path="/animals">
          <AnimalList />
        </Route>
      </AnimalProvider>

      <CustomerProvider>
        <Route path="/customers">
          <CustomerList />
        </Route>
      </CustomerProvider>

      <EmployeeProvider>
        <Route path="/employees">
          <EmployeeList />
        </Route>
      </EmployeeProvider>
    </>
  );
};

/* Render the location list when http://localhost:3000/ */
/* Exact is needed on first route to differentiate it from others, 
            or else Home will render for every route */

/* Render the animal list when http://localhost:3000/animals */
/* Render the customer list when http://localhost:3000/customers */
/* Render the employee list when http://localhost:3000/Employees */
