import React from "react";
import "./FruitCatalogue.css";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import LoadingSpinner from "./LoadingSpinner";

export default function FruitCatalogue() {
  const [fruits, setFruits] = useState([]);

  const searchFruit = () => {
    fetch("https://fruityvice.com/api/fruit/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setFruits(data);
        check(data);
      });
  };

  //Send response back into fruit catalogue function??

  function check(data) {
    // check if arr is array
    const result = Array.isArray(data);

    if (result) {
      console.log(`[${data}] is an array.`);
    } else {
      console.log(`${data} is not an array.`);
      let newArray = [].concat(data);
      console.log(newArray);
      console.log(newArray[0].id);
      console.log(newArray[0].family);
    }
  }

  //Render listings for all fruits in array
  const fruitListings = fruits.map((fruit) => {
    return (
      <div className="listing" key={fruit.id}>
        <h2>{fruit.name}</h2>
        <div className="listing-details">
          <div className="listing-info">
            <h3>Info</h3>
            <ul>
              <li>
                <span className="detail-headings">Genus: </span>
                {fruit.genus}
              </li>
              <li>
                <span className="detail-headings">Family: </span>
                {fruit.family}
              </li>
              <li>
                <span className="detail-headings">Order: </span>
                {fruit.order}
              </li>
            </ul>
          </div>
          <div className="listing-nutrition">
            <h3>Nutrition</h3>
            <ul>
              <li>
                <span className="detail-headings">Carbohydrates: </span>
                {fruit.nutritions.carbohydrates}
              </li>
              <li>
                <span className="detail-headings">Protein: </span>
                {fruit.nutritions.protein}
              </li>
              <li>
                <span className="detail-headings">Fat: </span>
                {fruit.nutritions.fat}
              </li>
              <li>
                <span className="detail-headings">Calories: </span>
                {fruit.nutritions.calories}
              </li>
              <li>
                <span className="detail-headings">Sugar: </span>
                {fruit.nutritions.sugar}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  });

  if (setFruits) {
    return (
      <div className="FruitCatalogue">
        <Button onClick={searchFruit}>View all fruits</Button>
        <div className="catalogue">{fruitListings}</div>
      </div>
    );
  } else {
    return (
      <div className="FruitCatalogue">
        <LoadingSpinner />
      </div>
    );
  }
}
