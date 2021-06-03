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
