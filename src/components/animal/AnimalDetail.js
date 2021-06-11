import React, { useContext, useEffect, useState } from "react";
import { AnimalContext } from "./AnimalProvider";
import "./Animal.css";
import { useParams, useHistory } from "react-router-dom";

// expose this data to descendants
export const AnimalDetail = () => {
  // assign AnimalContext data to var  animals
  const { animals, getAnimalById, releaseAnimal } = useContext(AnimalContext);
  // store state in array 'animal', using function 'setAnimal' to modify it to include location and customer
  const [animal, setAnimal] = useState({ location: {}, customer: {} });

  //  store the animalID for use assigning individual URL
  const { animalId } = useParams();

  // ??? useEffect takes two arguments: a function and an array, keeps state updated
  useEffect(() => {
    const thisAnimal = animals.find((a) => a.id === parseInt(animalId)) || {
      location: {},
      customer: {},
    };
    // ?? either define thisAnimal by a.id || add location and customer data?? I don't get it.
    setAnimal(thisAnimal);
  }, [animalId]);

  // useHistory allows redirecting URL upon button click
  const history = useHistory();

  const handleRelease = () => {
    releaseAnimal(animal.id).then(() => {
      history.push("/animals");
    });
  };

  // JSX for rendering individual animal details

  return (
    <section className="animal">
      <button
        onClick={() => {
          history.push(`/animals/edit/${animal.id}`);
        }}>
        Edit your pet's info
      </button>
      <p></p>
      <button onClick={handleRelease}>Release Animal</button>
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">{animal.breed}</div>
      <div className="animal__location">Location: {animal.location.name}</div>
      <div className="animal__owner">Customer: {animal.customer.name}</div>
    </section>
  );
};
