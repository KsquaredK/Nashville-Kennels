import React, { useContext, useEffect } from "react";
// This context provides an array of customer objects, and 2 functions: getCustomer, addcustomer
import { CustomerContext } from "./CustomerProvider";
import "./Customer.css";

export const CustomerList = () => {
  // This state changes when `getCustomers()` is invoked below
  //  useContext allows this module to use data & functions the parent component exposes
  //Any descendant - child, granchild, etc. - can invoke useContext to gain direct access to keys exposed
  const { customers, getCustomers } = useContext(CustomerContext);

  //useEffect - reach out to the world for something not handled during render
  // State change causes re-render - be careful not to create infinite loop.
  useEffect(() => {
    console.log("CustomerList: useEffect - getCustomers");
    getCustomers();
    // The empty brackets cause this logic to run only once.
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="customers">
      {console.log("CustomerList: Render", customers)}
      {customers.map(
        (customer) => (
          // {return
          <div
            className="customer"
            id={`customer--${customer.id}`}
            key={customer.id}>
            <div className="customer__name">
              <em>Name:</em> {customer.name}
            </div>
            <div className="customer__address">
              <em>Address:</em> {customer.address}
            </div>
          </div>
        )
        // }
      )}
    </section>
  );
};
