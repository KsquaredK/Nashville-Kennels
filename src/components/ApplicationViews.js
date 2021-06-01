import React from "react";
import { Route } from "react-router-dom";

export const ApplicationViews = () => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <LocationProvider>
        {/* Exact is needed on first route to differentiate it from others, 
            or else Home will render for every route */}
        <Route exact path="/">
          <LocationList />
        </Route>
      </LocationProvider>

      {/* Render the Employee list when http://localhost:3000/Employees */}
      <EmployeeProvider>
        <Route path="/Employees">
          <EmployeeList />
        </Route>
      </EmployeeProvider>

      {/* Render the customer list when http://localhost:3000/Employees */}
      <CustomerProvider>
        <Route path="/customers">
          <CustomerList />
        </Route>
      </CustomerProvider>

      {/* Render the employee list when http://localhost:3000/Employees */}
      <EmployeeProvider>
        <Route path="/employees">
          <EmployeeList />
        </Route>
      </EmployeeProvider>
    </>
  );
};
