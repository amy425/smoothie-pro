import React from "react";
import "./SmoothieRecipe.css";
import smoothie from "./images/smoothies/smoothie.jpg";
import strawberry from "./images/fruits/strawberry.jpg";
import banana from "./images/fruits/banana.jpg";
import pineapple3 from "./pineapple3.png";

import Card from "react-bootstrap/Card";

export default function SmoothieRecipe() {
  return (
    <div className="SmoothieRecipe">
      <div className="recipe">
        <div>
          <img
            src={smoothie}
            alt="Tropical twist smoothie"
            className="smoothie-images"
          />
        </div>
        <div className="recipe-info">
          <h2>Tropical Twist</h2>
          <h4>Ingredients:</h4>
          <p>SERVES 2</p>
          <ul>
            <li>7 Strawberries</li>
            <li>1/2 Pineapple</li>
            <li>1/2 Banana</li>
            <li>2 tbsp Yoghurt</li>
          </ul>
        </div>
      </div>
      <hr></hr>
      <div>
        <h3>Fruit in your box:</h3>
        <div className="box-info">
          <Card className="bg-dark text-white smoothie-listing">
            <Card.Img
              src={strawberry}
              alt="Tropical twist smoothie"
              className="smoothie-images"
            />
            <Card.ImgOverlay>
              <Card.Title className="smoothie-title">Strawberry</Card.Title>
            </Card.ImgOverlay>
          </Card>
          <Card className="bg-dark text-white smoothie-listing">
            <Card.Img
              src={pineapple3}
              alt="Tropical twist smoothie"
              className="smoothie-images"
            />
            <Card.ImgOverlay>
              <Card.Title className="smoothie-title">Pineapple</Card.Title>
            </Card.ImgOverlay>
          </Card>
          <Card className="bg-dark text-white smoothie-listing">
            <Card.Img
              src={banana}
              alt="Tropical twist smoothie"
              className="smoothie-images"
            />
            <Card.ImgOverlay>
              <Card.Title className="smoothie-title">Banana</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </div>
      </div>
    </div>
  );
}
