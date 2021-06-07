// paste from Cap 9
import React, { useState, useContext, useEffect } from "react";
import { AnimalContext } from "./AnimalProvider";
// import { Animal } from "./Animal";
import { Link, useHistory } from "react-router-dom";
import "./Animal.css";

//orig code: export const AnimalList = ({ history }) => {
export const AnimalList = () => {
  const { getAnimals, animals } = useContext(AnimalContext);
  const history = useHistory();

  // Initialization effect hook -> Go get animal data
  useEffect(() => {
    getAnimals();
  }, []);

  return (
    <>
      <h1>Animals</h1>

      <button onClick={() => history.push("/animals/create")}>
        Make Reservation
      </button>

      <div className="animals">
        {animals.map((animal) => (
          <Link
            className="animal"
            to={`/animals/detail/${animal.id}`}
            key={animal.id}>
            {animal.name}
          </Link>
        ))}
      </div>
    </>
  );
};
