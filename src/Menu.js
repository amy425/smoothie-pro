import React, { useState } from "react";
import "./Menu.css";
import Navigation from "./Navigation";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
import Footer from "./Footer";

//Animation Images
import pineappleAnimation from "./images/animation/pineapple.png";
import orangeAnimation from "./images/animation/orange.png";
import strawberryAnimation from "./images/animation/strawberry.png";
import mangoAnimation from "./images/animation/mango.png";

//Smoothie Images
import tropicaltwist from "./images/smoothies/tropicaltwist.jpg";
import strawberrysplash from "./images/smoothies/strawberrysplash.jpg";
import energizer from "./images/smoothies/energizer.jpg";
import berryblast from "./images/smoothies/berryblast.jpg";
import none from "./images/smoothies/none.jpg";

export default function Menu() {
  const [smoothieName, setSmoothieName] = useState("");
  const [smoothieIngredientOne, setSmoothieIngredientOne] = useState("");
  const [smoothieIngredientTwo, setSmoothieIngredientTwo] = useState("");
  const [smoothieIngredientThree, setSmoothieIngredientThree] = useState("");
  const [smoothieIngredientFour, setSmoothieIngredientFour] = useState("");
  const [smoothieIngredientFive, setSmoothieIngredientFive] = useState("");
  const [smoothieImage, setSmoothieImage] = useState(none);

  const drinks = [
    {
      name: "Tropical Twist",
      ingredients: ["Papaya", "Lychee", "Passionfruit", "Banana", "Cherry"],
    },
    {
      name: "Strawberry Splash",
      ingredients: ["Strawberry", "Banana", "Orange", "Raspberry", "Pineapple"],
    },
    {
      name: "Energizer",
      ingredients: ["Banana", "Kiwi", "Green Apple", "Lime"],
    },
    {
      name: "Berry Blast",
      ingredients: ["Raspberry", "Blueberry", "Strawberry", "Apple"],
    },
  ];

  function showSmoothie(event) {
    setSmoothieName(event.target.innerHTML);
    setSmoothieIngredientOne(drinks[0].ingredients[0]);
    setSmoothieIngredientTwo(drinks[0].ingredients[1]);
    setSmoothieIngredientThree(drinks[0].ingredients[2]);
    setSmoothieIngredientFour(drinks[0].ingredients[3]);
    setSmoothieIngredientFive(drinks[0].ingredients[4]);
    setSmoothieImage(tropicaltwist);
  }

  function showSmoothieOne(event) {
    setSmoothieName(event.target.innerHTML);
    setSmoothieIngredientOne(drinks[1].ingredients[0]);
    setSmoothieIngredientTwo(drinks[1].ingredients[1]);
    setSmoothieIngredientThree(drinks[1].ingredients[2]);
    setSmoothieIngredientFour(drinks[1].ingredients[3]);
    setSmoothieIngredientFive(drinks[1].ingredients[4]);
    setSmoothieImage(strawberrysplash);
  }

  function showSmoothieTwo(event) {
    setSmoothieName(event.target.innerHTML);
    setSmoothieIngredientOne(drinks[2].ingredients[0]);
    setSmoothieIngredientTwo(drinks[2].ingredients[1]);
    setSmoothieIngredientThree(drinks[2].ingredients[2]);
    setSmoothieIngredientFour(drinks[2].ingredients[3]);
    setSmoothieIngredientFive("");
    setSmoothieImage(energizer);
  }

  function showSmoothieThree(event) {
    setSmoothieName(event.target.innerHTML);
    setSmoothieIngredientOne(drinks[3].ingredients[0]);
    setSmoothieIngredientTwo(drinks[3].ingredients[1]);
    setSmoothieIngredientThree(drinks[3].ingredients[2]);
    setSmoothieIngredientFour(drinks[3].ingredients[3]);
    setSmoothieIngredientFive("");
    setSmoothieImage(berryblast);
  }

  return (
    <div className="Menu">
      <Navigation />
      <div className="container-fluid">
        <div>
          <h1>Menu</h1>
          <h2 className="price">
            All Smoothies For £3 | 2 For £5 | 5 For £10{" "}
          </h2>
          <div className="column">
            <img
              className="pine"
              src={pineappleAnimation}
              alt="pineapple.png"
            ></img>
          </div>
          <div className="column">
            <img
              className="orange"
              src={orangeAnimation}
              alt="orange.png"
            ></img>
          </div>
          <div className="column">
            <img
              className="strawberry"
              src={strawberryAnimation}
              alt="strawberry.png"
            ></img>
          </div>
          <div className="column">
            <img className="mango" src={mangoAnimation} alt="mango.png"></img>
          </div>
          <div className="section smoothie-bar">
            <Button onClick={showSmoothie}>Tropical Twist</Button>
            <Button onClick={showSmoothieOne}>Strawberry Splash</Button>
            <Button onClick={showSmoothieTwo}>Energizer</Button>
            <Button onClick={showSmoothieThree}>Berry Blast</Button>
            <div className="box-info">
              <Card className="bg-dark text-white smoothie-listing">
                <Card.Img
                  src={smoothieImage}
                  alt="smoothie"
                  className="smoothie-images"
                />
                <Card.ImgOverlay>
                  <Card.Title className="smoothie-title">
                    {smoothieName}
                  </Card.Title>
                </Card.ImgOverlay>
                <Card.Body>
                  <h4>Fruits in your box:</h4>
                  <ul>
                    <li>{smoothieIngredientOne}</li>
                    <li>{smoothieIngredientTwo}</li>
                    <li>{smoothieIngredientThree}</li>
                    <li>{smoothieIngredientFour}</li>
                    <li>{smoothieIngredientFive}</li>
                  </ul>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <hr className="divider" />
      <Footer />
    </div>
  );
}
