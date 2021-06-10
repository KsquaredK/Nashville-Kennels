import React from "react";
import { Route } from "react-router-dom";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeForm } from "./employee/EmployeeForm";
import { LocationProvider } from "./location/LocationProvider";
import { LocationList } from "./location/LocationList";
import { LocationForm } from "./location/LocationForm";
import { CustomerProvider } from "./customer/CustomerProvider";
import { CustomerList } from "./customer/CustomerList";
import { AnimalProvider } from "./animal/AnimalProvider";
import { AnimalList } from "./animal/AnimalList";
import { AnimalForm } from "./animal/AnimalForm";
import { AnimalDetail } from "./animal/AnimalDetail";

export const ApplicationViews = () => {
  return (
    <>
      <LocationProvider>
        <AnimalProvider>
          <EmployeeProvider>
            <CustomerProvider>
              <Route exact path="/">
                <LocationList />
              </Route>
              <Route path="/locations/create">
                <LocationForm />
              </Route>
              <Route path="/animals">
                <AnimalList />
              </Route>
              <Route path="/animals/create">
                <AnimalForm />
              </Route>
              <Route exact path="/animals/detail/:animalId(\d+)">
                <AnimalDetail />
              </Route>
              <Route path="/customers">
                <CustomerList />
              </Route>
              <Route path="/employees">
                <EmployeeList />
              </Route>
              <Route path="/employees/create">
                <EmployeeForm />
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
