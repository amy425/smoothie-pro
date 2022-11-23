import React from "react";
//import React, { useEffect } from "react";
import { useState } from "react";
import "./Menu.css";
import Navigation from "./Navigation";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
import Footer from "./Footer";

//Animations
import pineapple from "./images/animation/pineapple.png";
import orange from "./images/animation/orange.png";
import strawberry from "./images/animation/strawberry.png";
import mango from "./images/animation/mango.png";

//Smoothie Images
import tropicaltwist from "./images/smoothies/tropicaltwist.jpg";
import strawberrysplash from "./images/smoothies/strawberrysplash.jpg";
import energizer from "./images/smoothies/energizer.jpg";
import berryblast from "./images/smoothies/berryblast.jpg";

//Fruit Images
import kiwi from "./images/fruits/kiwi.jpg";
import raspberry from "./images/fruits/raspberry.jpg";
import banana from "./images/fruits/banana.jpg";
import strawberry2 from "./images/fruits/strawberry2.jpg";
import mango3 from "./images/fruits/mango3.jpg";
import pineapple2 from "./images/fruits/pineapple2.jpg";
import blueberry from "./images/fruits/blueberry.jpg";
import lemon from "./images/fruits/lemon.jpg";
import passionfruit from "./images/fruits/passionfruit.jpg";
import papaya from "./images/fruits/papaya.jpg";
import lychee from "./images/fruits/lychee.jpg";
import pineapple3 from "./pineapple3.png";

let imageMapping = {
  banana,
  kiwi,
  raspberry,
  strawberry2,
  mango3,
  pineapple2,
  blueberry,
  lemon,
  passionfruit,
  papaya,
  lychee,
};

export default function Menu(props) {
  const [smoothieName, setSmoothieName] = useState("");
  const [smoothieFruits, setSmoothieFruits] = useState("");
  const [fruit, setFruit] = useState("");

  let tropicalTwist = ["papaya", "lychee", "passionfruit"];
  let strawberrySplash = ["strawberry2", "lemon", "banana"];
  let berryBlast = ["raspberry", "blueberry", "strawberry2"];
  let Energizer = ["banana", "kiwi", "blueberry"];

  function showSmoothie(event, props) {
    //   let drink=[{
    //      name: "tropicalTwist",
    //      fruit1:"papaya",
    //      fruit2:"lychee",
    //      fruit3:"passionfruit"
    //   },
    //   {
    //     name: "strawberrySplash",
    //     fruit1:"strawberry2",
    //     fruit2:"lemon",
    //     fruit3:"banana"
    //   },
    //   {
    //     name: "berryBlast",
    //     fruit1:"raspberry",
    //     fruit2:"blueberry",
    //     fruit3:"banana"
    //   },
    //   {
    //     name: "Energizer",
    //     fruit1:"banana",
    //     fruit2:"kiwi",
    //     fruit3:"blueberry"
    //   }
    // ]

    setSmoothieName(event.target.innerHTML);
    let ingredients = tropicalTwist.map((ingredient, index) => {
      return (
        <div className="listing-card" key={index}>
          <Card className="bg-dark text-white smoothie-listing">
            <Card.Img
              src={props.name}
              alt={props.fruit.img}
              className="card-image"
            />
            <Card.ImgOverlay>
              <Card.Title className="smoothie-title">
                {tropicalTwist.name}
              </Card.Title>
            </Card.ImgOverlay>
            <h3>{ingredient}</h3>
            <Card.Body>
              <div className="listing-details">
                <div className="listing-info">
                  <h4>Info</h4>
                  <ul>
                    <li>
                      <span className="detail-headings">Genus: </span>
                      {/* {fruit.genus} */}
                    </li>
                    <li>
                      <span className="detail-headings">Family: </span>
                      {/* {fruit.family} */}
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
                      {/* {fruit.nutritions.carbohydrates} */}
                    </li>
                    <li>
                      <span className="detail-headings">Protein: </span>
                      {/* {fruit.nutritions.protein} */}
                    </li>
                    <li>
                      <span className="detail-headings">Fat: </span>
                      {/* {fruit.nutritions.fat} */}
                    </li>
                    <li>
                      <span className="detail-headings">Calories: </span>
                      {/* {fruit.nutritions.calories} */}
                    </li>
                    <li>
                      <span className="detail-headings">Sugar: </span>
                      {/* {fruit.nutritions.sugar} */}
                    </li>
                  </ul>
                </div>
              </div>
            </Card.Body>
          </Card>
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
          <smoothieFruits />
          <Button onClick={showSmoothie}>Tropical Twist</Button>
          <Button onClick={showSmoothie}>Strawberry Splash</Button>
          <Button onClick={showSmoothie}>Energizer</Button>
          <Button onClick={showSmoothie}>Berry Blast</Button>
        </div>
      </div>
      <div className="container section">
        <div className="recipe-info">
          <h2 className="smoothie name">{smoothieName}</h2>
          <p>SERVES 2</p>
          <h4>Ingredients:</h4>
          <ul>
            <li>7 Strawberries</li>
            <li>1/2 Pineapple</li>
            <li>1/2 Banana</li>
            <li>2 tbsp Yoghurt</li>
          </ul>

          <Card className="bg-dark text-white smoothie-listing">
            <Card.Img
              src={berryblast}
              alt="Tropical twist smoothie"
              className="smoothie-images"
            />
            <Card.ImgOverlay>
              <Card.Title className="smoothie-title">{smoothieName}</Card.Title>
            </Card.ImgOverlay>
          </Card>

          <div className="smoothies">{smoothieFruits}</div>
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
      </div>
      <hr className="divider" />
      <Footer />
    </div>
  );
}
