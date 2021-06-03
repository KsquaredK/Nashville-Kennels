import React, { useState, createContext } from "react";

// The context is imported and used by individual components that need data.
// Nothing is stored in create COntext when it is defined.
export const CustomerContext = createContext();

// This component establishes what data can be used.
// Customers is an empty array, setCustomers is a function that modifies it.
// useState will hold and set the array of Customers.
export const CustomerProvider = (props) => {
  // defines a variable that holds the state, and a function that updates it
  const [customers, setCustomers] = useState([]);

  const getCustomers = () => {
    return fetch("http://localhost:8088/customers?_expand=location")
      .then((res) => res.json())
      .then(setCustomers);
  };

  const addCustomer = (customerObj) => {
    return fetch("http://localhost:8088/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customerObj),
    }).then(getCustomers);
  };

  /*
        You return a context provider which has the
        `Customers` state, `getCustomers` function,
        and the `addCustomer` function as keys. This
        allows any child elements to access them. These are the only
        values I need to worry about - for the rest, just follow
        the pattern.
    */
  return (
    <CustomerContext.Provider
      value={{
        customers,
        getCustomers,
        addCustomer,
      }}>
      {props.children}
    </CustomerContext.Provider>
  );
};
