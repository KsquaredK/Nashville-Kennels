import React from "react";
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "./ApplicationViews";
import "./Kennel.css";

/*import { EmployeeProvider } from "./employee/EmployeeProvider";
import { EmployeeList } from "./employee/EmployeeList";
import { LocationProvider } from "./location/LocationProvider";
import { LocationList } from "./location/LocationList";
import { CustomerProvider } from "./customer/CustomerProvider";
import { CustomerList } from "./customer/CustomerList";
import { AnimalProvider } from "./animal/AnimalProvider";
import { AnimalList } from "./animal/AnimalList";*/

export const Kennel = () => (
  <>
    {/* This is a Presentation Component. Directly expresses HTML. */}
    <NavBar />
    {/* This is a Controller Component. Its only responsibility is to 
  control the behavior of the system and maps URLs to components. */}
    <ApplicationViews />
  </>
);

/*export const Kennel = () => (
  <>
    <h2> Nashville Kennels </h2>{" "}
    <small> Loving care when you 're not there.</small>{" "}
    <address>
      <div> Visit Us at the Nashville North Location </div>{" "}
      <div> 500 Puppy Way </div>{" "}
    </address>{" "}
    /* Each article below is a "route" */
/* <h2> Animals </h2>{" "}
    <article className="animals">
      <AnimalProvider>
        <AnimalList />
      </AnimalProvider>
    </article>{" "}
    <h2> Employees </h2>{" "}
    <article className="employees">
      <EmployeeProvider>
        <EmployeeList />
      </EmployeeProvider>
    </article>{" "}
    <h2> Locations </h2>{" "}
    <article className="locations">
      <LocationProvider>
        <LocationList />
      </LocationProvider>
    </article>{" "}
    <h2> Customers </h2>{" "}
    <article className="customers">
      <CustomerProvider>
        <CustomerList />
      </CustomerProvider>
    </article>{" "}
  </>
); */
