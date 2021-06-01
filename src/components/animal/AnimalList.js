import React, { useContext, useEffect } from "react";
// This context provides an array of animal objects, and 2 functions: getAnimal, addAnimal
import { AnimalContext } from "./AnimalProvider";
import "./Animal.css";

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
    // The empty brackets cause this logic to run only once.
  }, []);

  return (
    <section className="animals">
      {animals.map((animal) => {
        return (
          <div className="animal" id={`animal--${animal.id}`}>
            <div className="animal__name">Name: {animal.name}</div>
            <div className="animal__breed">Breed: {animal.breed}</div>
          </div>
        );
      })}
    </section>
  );
};
