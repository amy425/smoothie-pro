import React from "react";
import { useState } from "react";
import "./Menu.css";
import Navigation from "./Navigation";
import Button from "react-bootstrap/esm/Button";
import SmoothieRecipe from "./SmoothieRecipe";
import SmoothieFruits from "./SmoothieFruits";
import Footer from "./Footer";
import pineapple from "./images/animation/pineapple.png";
import orange from "./images/animation/orange.png";
import strawberry from "./images/animation/strawberry.png";
import mango from "./images/animation/mango.png";

export default function Menu() {
  const [smoothieName, setSmoothieName] = useState("");
  const [smoothieFruits, setSmoothieFruits] = useState("");

  let tropicalTwist = ["Pineapple", "Mango", "Banana"];

  function showSmoothie(event) {
    setSmoothieName(event.target.innerHTML);
    let ingredients = tropicalTwist.map((ingredient, index) => {
      return (
        <div className="listing-card" key={index}>
          <h3>{ingredient}</h3>
          <div className="listing-image"></div>
          <div className="listing-details">
            <div className="listing-info">
              <h4>Info</h4>
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
              <h4>Nutrition</h4>
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
    <div className="Menu">
      <Navigation />
      <div className="container">
        <h1>Menu</h1>
        <h2 className="price">All Smoothies For £3 | 2 For £5 | 5 For £10 </h2>
        <div className="column">
          <img className="pine" src={pineapple} alt="pineapple.png"></img>
        </div>
        <div className="column">
          <img className="orange" src={orange} alt="orange.png"></img>
        </div>
        <div className="column">
          <img
            className="strawberry"
            src={strawberry}
            alt="strawberry.png"
          ></img>
        </div>
        <div className="column">
          <img className="mango" src={mango} alt="mango.png"></img>
        </div>
        <div className="section smoothie-bar">
          <Button onClick={showSmoothie}>Tropical Twist</Button>
          <Button onClick={showSmoothie}>Strawberry Splash</Button>
          <Button onClick={showSmoothie}>Energizer</Button>
          <Button onClick={showSmoothie}>Berry Blast</Button>
        </div>
      </div>
      <div className="container section">
        <h2>{smoothieName}</h2>
        <div className="smoothies">{smoothieFruits}</div>
      </div>
      <div className="section">
        <SmoothieFruits />
      </div>
      <div className="section">
        <SmoothieRecipe />
      </div>
      <hr className="divider" />
      <Footer />
    </div>
  );
}
