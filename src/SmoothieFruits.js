import React from "react";
import "./MultipleFruits.css";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import LoadingSpinner from "./LoadingSpinner";
import "./Smoothies.css";

import Card from "react-bootstrap/Card";
import cherry from "./images/fruits/cherry.jpg";

export default function SmoothieFruits() {
  const [fruits, setFruits] = useState([]);

  const searchFruit = () => {
    fetch("https://fruityvice.com/api/fruit/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setFruits(data);
      });
  };

  //Render listings for all fruits in array
  const fruitListings = fruits.map((fruit) => {
    return (
      <div className="Listing" key={fruit.id}>
        <Card className="bg-dark text-white smoothie-listing">
          <Card.Img src={cherry} alt="cherry" className="smoothie-images" />
          <Card.ImgOverlay>
            <Card.Title className="smoothie-title">{fruit.name}</Card.Title>
          </Card.ImgOverlay>
          <Card.Body>
            <div className="listing-details">
              <div className="listing-info">
                <h4>Info</h4>
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
                <h4>Nutrition</h4>
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
          </Card.Body>
        </Card>
      </div>
    );
  });

  if (setFruits) {
    return (
      <div className="MultipleFruits">
        <div className="section">
          <Button onClick={searchFruit}>View all fruits</Button>

          <div className="catalogue">{fruitListings}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="MultipleFruits">
        <LoadingSpinner />
      </div>
    );
  }
}
