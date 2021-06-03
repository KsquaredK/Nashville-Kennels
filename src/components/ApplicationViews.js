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
import { AnimalForm } from "./animal/AnimalForm";

export const ApplicationViews = () => {
  return (
    <>
      <LocationProvider>
        <AnimalProvider>
          <EmployeeProvider>
            <CustomerProvider>
              <Route path="/locations">
                <LocationList />
              </Route>
              <Route path="/animals">
                <AnimalList />
              </Route>
              <Route exact path="/animals/create">
                <AnimalForm />
              </Route>
              <Route exact path="/customers">
                <CustomerList />
              </Route>
              <Route exact path="/employees">
                <EmployeeList />
              </Route>
            </CustomerProvider>
          </EmployeeProvider>
        </AnimalProvider>
      </LocationProvider>
    </>
  );
};

/* Render the location list when http://localhost:3000/ */
/* Exact is needed on first route to differentiate it from others, 
            or else Home will render for every route */

/* Render the animal list when http://localhost:3000/animals */
/* Render the customer list when http://localhost:3000/customers */
/* Render the employee list when http://localhost:3000/Employees */
