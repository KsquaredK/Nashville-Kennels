// paste from Cap 9
import React, { useContext, useEffect } from "react";
import { AnimalContext } from "./AnimalProvider";
// import { AnimalDetail } from "./AnimalDetail";
import "./Animal.css";
import { Link, useHistory } from "react-router-dom";

export const AnimalList = () => {
  const { animals, getAnimals } = useContext(AnimalContext);
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
          <div className="animal" id={`animal--${animal.id}`}>
            <div className="animal__name">
              <Link to={`/animals/detail/${animal.id}`}>{animal.name}</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

/* /*import React, { useContext, useEffect } from "react";
import { AnimalContext } from "./AnimalProvider";
import { Link, useHistory } from "react-router-dom";
import "./Animal.css";

//orig code: export const AnimalList = ({ history }) => {
export const AnimalList = () => {
  const { getAnimals, animals } = useContext(AnimalContext);
  const history = useHistory()

  // Initialization effect hook -> Go get animal data
  useEffect(() => {
    getAnimals();
  }, []);

  return (
    <>
      <h1>Animals</h1>

      <button onClick={() => history.push("/animals/create")}>
        Add Animal
      </button>

      <div className="animals">
        {animals.map((animal) => {
          return (
          <Link className="animal" to={`/animals/detail/${animal.id}`} key={animal.id}>
            {animal.name}
          </Link>)
        }),
      </div>
        
    </>
  
}; */
