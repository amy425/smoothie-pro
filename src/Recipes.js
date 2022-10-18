import React from "react";
import { useState } from "react";
import "./Recipes.css";
import Navigation from "./Navigation";
import Button from "react-bootstrap/esm/Button";

export default function Recipes() {
  const [smoothieName, setSmoothieName] = useState("");
  const [smoothieFruits, setSmoothieFruits] = useState("");

  let tropical = ["pineapple", "mango", "banana"];

  function showSmoothie(event) {
    setSmoothieName(event.target.innerHTML);
    let ingredients = tropical.map((ingredient, index) => {
      return <li key={index}>{ingredient}</li>;
    });
    setSmoothieFruits(ingredients);
  }

  return (
    <div className="Recipes">
      <Navigation />
      <div className="container">
        <h1>Recipes</h1>
        <div className="section smoothie-bar">
          <Button onClick={showSmoothie}>Tropical</Button>

          <Button onClick={showSmoothie}>Smoothie 2</Button>

          <Button onClick={showSmoothie}>Smoothie 3</Button>

          <Button onClick={showSmoothie}>Smoothie 4</Button>

          <Button onClick={showSmoothie}>Smoothie 5</Button>

          <Button onClick={showSmoothie}>Smoothie 6</Button>
        </div>
      </div>

      <hr></hr>
      <div className="container">
        <div className="section">
          <h1>{smoothieName}</h1>
          <ul>{smoothieFruits}</ul>
        </div>
      </div>
    </div>
  );
}
