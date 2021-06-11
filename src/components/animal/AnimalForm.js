import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "../location/LocationProvider";
import { AnimalContext } from "../animal/AnimalProvider";
import { CustomerContext } from "../customer/CustomerProvider";
import "./Animal.css";
import { useHistory, useParams } from "react-router-dom";

export const AnimalForm = () => {
  const { addAnimal, getAnimalById, updateAnimal } = useContext(AnimalContext);
  const { locations, getLocations } = useContext(LocationContext);
  const { customers, getCustomers } = useContext(CustomerContext);

  /*
  With React, we do not target the DOM with `document.querySelector()`. 
  Instead, our return (render) reacts to state or props.

  Define the initial state of the form inputs with useState()
  */
  //for edit, hold on to state of animal in this view
  const [animal, setAnimal] = useState({});
  //wait for data before button is active
  const [isLoading, setIsLoading] = useState(true);
  const { animalId } = useParams();
  // useHistory() is a hook function provided by react-router-dom.
  // It allows you to ***immediately use a push() method which you can use
  // to change the URL***. Be sure to import it at the top of the document.

  const history = useHistory();

  //When a field changes, update state. The return will re-render
  // and display based on the values in state
  //Controlled component
  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    const newAnimal = { ...animal };
    /* Animal is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newAnimal[event.target.id] = event.target.value;
    // update state
    setAnimal(newAnimal);
  };

  const handleSaveAnimal = () => {
    if (
      parseInt(animal.locationId) === 0 ||
      parseInt(animal.customerId) === 0
    ) {
      window.alert("Please select a location");
    } else {
      //disable the button - no extra clicks
      setIsLoading(true);
      if (animalId) {
        //PUT - update
        updateAnimal({
          id: animalId,
          name: animal.name,
          breed: animal.breed,
          locationId: parseInt(animal.locationId),
          customerId: parseInt(animal.customerId),
        }).then(() => history.push("/animals"));
      } else {
        //POST - add
        addAnimal({
          name: animal.name,
          breed: animal.breed,
          locationId: parseInt(animal.locationId),
          customerId: parseInt(animal.customerId),
        }).then(() => history.push("/animals"));
      }
    }
  };

  /*
  Reach out to the world and get customers state
  and locations state on initialization.
  */
  // Get customers and locations. If animalId is in the URL, getAnimalById
  // Get customers and locations. If animalId is in the URL, getAnimalById
  useEffect(() => {
    getCustomers()
      .then(getLocations)
      .then(() => {
        if (animalId) {
          getAnimalById(animalId).then((animal) => {
            setAnimal(animal);
            setIsLoading(false);
          });
        } else {
          setIsLoading(false);
        }
      });
  }, []);

  //since state controls this component, we no longer need
  //useRef(null) or ref

  return (
    <form className="animalForm">
      <h2 className="animalForm__title">Tell Us About Your Animal</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="animalName">Animal name:</label>
          <input
            type="text"
            id="AnimalName"
            name="name"
            required
            autoFocus
            className="form-control"
            placeholder="Animal name"
            value={animal.name}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Animal breed:</label>
          <input
            type="text"
            id="breed"
            required
            autoFocus
            className="form-control"
            placeholder="Animal breed"
            value={animal.breed}
            onChange={handleControlledInputChange}
            defaultValue={animal.name}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Assign to location: </label>
          <select
            name="locationId"
            id="animalLocationId"
            className="form-control"
            value={animal.locationId}
            onChange={handleControlledInputChange}>
            <option value="0">Select a location</option>
            {locations.map((l) => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="customer">Customer: </label>
          <select
            name="customer"
            id="customerId"
            className="form-control"
            value={animal.customerId}
            onChange={handleControlledInputChange}>
            <option value="0">Select a customer</option>
            {customers.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={(event) => {
          event.preventDefault(); // Prevent browser from submitting the form and refreshing the page
          handleSaveAnimal();
        }}>
        {animalId ? <>Update Animal's Info</> : <>Add New Animal</>}
      </button>
    </form>
  );
};
