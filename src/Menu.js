import React from "react";
import { useState } from "react";
import "./Recipes.css";
import Navigation from "./Navigation";
import Button from "react-bootstrap/esm/Button";
import Footer from "./Footer";

export default function Recipes() {
  const [smoothieName, setSmoothieName] = useState("");
  const [smoothieFruits, setSmoothieFruits] = useState("");

  let tropical = ["Pineapple", "Mango", "Banana"];

  function showSmoothie(event) {
    setSmoothieName(event.target.innerHTML);
    let ingredients = tropical.map((ingredient, index) => {
      return (
        <div className="listing" key={index}>
          <h2>{ingredient}</h2>
          <div className="listing-details">
            <div className="listing-info">
              <h3>Info</h3>
              <ul>
                <li>
                  <span className="detail-headings">Genus: </span>
                </li>
                <li>
                  <span className="detail-headings">Family: </span>
                </li>
                <li>
                  <span className="detail-headings">Order: </span>
                </li>
              </ul>
            </div>
            <div className="listing-nutrition">
              <h3>Nutrition</h3>
              <ul>
                <li>
                  <span className="detail-headings">Carbohydrates: </span>
                </li>
                <li>
                  <span className="detail-headings">Protein: </span>
                </li>
                <li>
                  <span className="detail-headings">Fat: </span>
                </li>
                <li>
                  <span className="detail-headings">Calories: </span>
                </li>
                <li>
                  <span className="detail-headings">Sugar: </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    });
    setSmoothieFruits(ingredients);
  }

  return (
    <div className="Recipes">
      <Navigation />
      <div className="container">
        <h1>Menu</h1>
        <h2 className="price">All Smoothies For £3 | 2 For £5 | 5 For £10 </h2>
        <div className="section smoothie-bar">
          <Button onClick={showSmoothie}>Tropical Twist</Button>
          <Button onClick={showSmoothie}>Strawberry Splash</Button>
          <Button onClick={showSmoothie}>Energizer</Button>
          <Button onClick={showSmoothie}>Berry Blast</Button>
        </div>
      </div>

      <hr></hr>

      <div className="container section">
        <h1>{smoothieName}</h1>
        <div className="smoothies">{smoothieFruits}</div>
      </div>
      <Footer />
    </div>
  );
}
