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
import logo from "./auth/logo.png";

export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/">
        <h1>Nashville Kennels</h1>
        <small>Loving care when you're not there.</small>
        <div className="logo">
          <img src={logo} />
        </div>
      </Route>
      <LocationProvider>
        <AnimalProvider>
          <EmployeeProvider>
            <CustomerProvider>
              <Route path="/locations">
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
              <Route path="/animals/detail/:animalId(\d+)">
                <AnimalDetail />
              </Route>
              <Route path="/animals/edit/:animalId(\d+)">
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
