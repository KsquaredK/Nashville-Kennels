import React, { useState, createContext } from "react";

// The context is imported and used by individual components that need data.
// Nothing is stored in create COntext when it is defined.
export const AnimalContext = createContext();

// This component establishes what data can be used.
// animals is an empty array, setAnimals is a function that modifies it.
// useState will hold and set the array of animals.
export const AnimalProvider = (props) => {
  // defines a variable that holds the state, and a function that updates it
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    // animals: fetch that dataset. expand=customer: include related customer. sort=location.id: sort data by the location id.
    return fetch(
      "http://localhost:8088/animals?_expand=customer&_expand=location&_sort=location.id"
    )
      .then((res) => res.json())
      .then(setAnimals);
  };

  const getAnimalById = (animalId) => {
    return fetch(`http://localhost:8088/animals/${animalId}`).then((res) =>
      res.json()
    );
  };

  const addAnimal = (animalObj) => {
    return fetch("http://localhost:8088/animals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(animalObj),
    }).then((response) => response.json());
  };

  const releaseAnimal = (animalId) => {
    return fetch(`http://localhost:8088/animals/${animalId}`, {
      method: "DELETE",
    }).then(getAnimals);
  };

  const updateAnimal = (animal) => {
    return fetch(`http://localhost:8088/animals/${animal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(animal),
    }).then(getAnimals);
  };
  /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them. These are the only
        values I need to worry about - for the rest, just follow
        the pattern.
    */
  return (
    <AnimalContext.Provider
      value={{
        animals,
        getAnimals,
        addAnimal,
        releaseAnimal,
        updateAnimal,
        getAnimalById,
      }}>
      {props.children}
    </AnimalContext.Provider>
  );
};
