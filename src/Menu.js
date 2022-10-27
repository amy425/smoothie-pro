import React from "react";
import { useState } from "react";
import "./Menu.css";
import Navigation from "./Navigation";
import Button from "react-bootstrap/esm/Button";
import Footer from "./Footer";
import pineapple from "./pineapple.png";
import orange from "./orange.png";
import strawberry from "./strawberry.png";
import mango2 from "./mango2.png";
import FruitImage from "./FruitImage";

export default function Menu() {
  const [smoothieName, setSmoothieName] = useState("");
  const [smoothieFruits, setSmoothieFruits] = useState("");

  //let smoothies = [];

  let tropicalTwist = ["Pineapple", "Mango", "Banana"];
  //let berryBlast = ["Strawberry", "Raspberry", "Banana", "Blueberry"];
  //let strawberrySplash = ["Strawberry", "Apple", "Banana", "Peach"];
  //let energizer = ["", "Apple", "Banana", "Peach"];

  function showSmoothie(event) {
    setSmoothieName(event.target.innerHTML);
    let ingredients = tropicalTwist.map((ingredient, index) => {
      return (
        <div className="listing-card" key={index}>
          <div className="listing-image">
            <FruitImage />
          </div>
          <div className="listing">
            <h3>{ingredient}</h3>
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
      <img className="pine"src={pineapple} alt="pineapple.png"></img>
      </div>
      <div className="column">
      <img className="orange"src={orange} alt="orange.png"></img>
      </div>
      <div className="column">
      <img className="strawberry"src={strawberry} alt="strawberry.png"></img>
      </div>
      <div className="column">
      <img className="mango"src={mango2} alt="mango2.png"></img>
      </div>
        <div className="section smoothie-bar">
          <Button onClick={showSmoothie}>Tropical Twist</Button>
          <Button onClick={showSmoothie}>Strawberry Splash</Button>
          <Button onClick={showSmoothie}>Energizer</Button>
          <Button onClick={showSmoothie}>Berry Blast</Button>
          <Button onClick={showSmoothie}>Create Your Own</Button>
        </div>
      </div>

      <hr></hr>

      <div className="container section">
        <h2>{smoothieName}</h2>
        <div className="smoothies">{smoothieFruits}</div>
      </div>
      <Footer />
    </div>
  );
}
