import React, { useContext, useEffect } from "react";
// This context provides an array of animal objects, and 2 functions: getAnimal, addAnimal
import { AnimalContext } from "./AnimalProvider";
import "./Animal.css";
// Add this import at the top
import { useHistory } from "react-router-dom";

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  //  useContext allows this module to use data & functions the parent component exposes
  //Any descendant - child, granchild, etc. - can invoke useContext to gain direct access to keys exposed
  const { animals, getAnimals } = useContext(AnimalContext);

  //useEffect - reach out to the world for something not handled during render
  // State change causes re-render - be careful not to create infinite loop.
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals");
    getAnimals();
    // **The empty brackets cause this logic to run only once.**
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Invoke the useHistory() hook function
  const history = useHistory();

  return (
    <>
      <h2>Animals</h2>
      <button onClick={() => history.push("/animals/create")}>
        Add Animal
      </button>
      <p></p>
      <div className="animals">
        {animals.map((animal) => {
          return (
            <div className="animal" id={`animal--${animal.id}`} key={animal.id}>
              <div className="animal__name">
                <em>Name:</em> {animal.name}
              </div>
              <div className="animal__breed">
                <em>Breed:</em> {animal.breed}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
