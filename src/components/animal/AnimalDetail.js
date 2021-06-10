// paste from Chap 9
import React, { useContext, useEffect, useState } from "react";
import { AnimalContext } from "./AnimalProvider";
import "./Animal.css";
import { useParams, useHistory } from "react-router-dom";

export const AnimalDetail = () => {
  const { animals, releaseAnimal } = useContext(AnimalContext);
  const [animal, setAnimal] = useState({ location: {}, customer: {} });

  /*
        Given the example URL above, this will store the value
        of 5 in the animalId variable
    */
  const { animalId } = useParams();

  const history = useHistory();

  const handleRelease = () => {
    releaseAnimal(animal.id).then(() => {
      history.push("/animals");
    });
  };

  useEffect(() => {
    const thisAnimal = animals.find((a) => a.id === parseInt(animalId)) || {
      location: {},
      customer: {},
    };

    setAnimal(thisAnimal);
  }, [animalId]);

  return (
    <section className="animal">
      <button onClick={handleRelease}>Release Animal</button>
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">{animal.breed}</div>
      <div className="animal__location">Location: {animal.location.name}</div>
      <div className="animal__owner">Customer: {animal.customer.name}</div>
    </section>
  );
};

// import React, { useContext, useEffect, useState, useHistory } from "react";
// import { AnimalContext } from "./AnimalProvider";
// import "./Animal.css";
// import { useParams } from "react-router-dom";

// // expose this data to descendants
// export const AnimalDetail = () => {
//   // assign AnimalContext data to var  animals
//   const { animals, releaseAnimal } = useContext(AnimalContext);
//   // store state in array 'animal', using function 'setAnimal' to modify it to include location and customer
//   const [animal, setAnimal] = useState({ location: {}, customer: {} });

//   //  store the animalID for use assigning individual URL
//   const { animalId } = useParams();

//   useEffect(() => {
//     const thisAnimal = animals.find((a) => a.id === animalId) || {
//       location: {},
//       customer: {},
//     };
//     setAnimal(thisAnimal);
//   }, [animalId]);

//   // useHistory allows redirecting URL upon button click
//   const history = useHistory;

//   const handleRelease = () => {
//     releaseAnimal(animal.id).then(() => {
//       history.push("/animals");
//     });
//   };

//   // JSX for rendering individual animal details

//   return (
//     <section className="animal">
//       <h3 className="animal__name">{animal.name}</h3>
//       <button onClick={handleRelease}>Release Animal</button>
//       <div className="animal__breed">{animal.breed}</div>
//       <div className="animal__location">Location: {animal.location.name}</div>
//       <div className="animal__owner">Customer: {animal.customer.name}</div>
//     </section>
//   );
// };
