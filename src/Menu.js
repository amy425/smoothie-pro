import React from "react";
import { useState } from "react";
import "./Menu.css";
import Navigation from "./Navigation";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
import Footer from "./Footer";
import pineapple2 from "./images/animation/pineapple.png";
import orange2 from "./images/animation/orange.png";
import strawberry2 from "./images/animation/strawberry.png";
import mango2 from "./images/animation/mango.png";

//Smoothies
import tropicaltwist from "./images/smoothies/tropicaltwist.jpg";
import strawberrysplash from "./images/smoothies/strawberrysplash.jpg";
import energizer from "./images/smoothies/energizer.jpg";
import berryblast from "./images/smoothies/berryblast.jpg";

//Fruits
import apple from "./images/fruits/apple.jpg";
import apricot from "./images/fruits/apricot.jpg";
import avocado from "./images/fruits/avocado.jpg";
import banana from "./images/fruits/banana.jpg";
import blackberry from "./images/fruits/blackberry.jpg";
import blueberry from "./images/fruits/blueberry.jpg";
import cherry from "./images/fruits/cherry.jpg";
import dragonfruit from "./images/fruits/dragonfruit.jpg";
import durian from "./images/fruits/durian.jpg";
import feijoa from "./images/fruits/feijoa.jpg";
import fig from "./images/fruits/fig.jpg";
import gooseberry from "./images/fruits/gooseberry.jpg";
import grape from "./images/fruits/grape.jpg";
import grapes from "./images/fruits/grapes.jpg";
import greenapple from "./images/fruits/greenapple.jpg";
import lemon from "./images/fruits/lemon.jpg";
import lime from "./images/fruits/lime.jpg";
import lingonberry from "./images/fruits/lingonberry.jpg";
import lychee from "./images/fruits/lychee.jpg";
import melon from "./images/fruits/melon.jpg";
import orange from "./images/fruits/orange.jpg";
import papaya from "./images/fruits/papaya.jpg";
import passionfruit from "./images/fruits/passionfruit.jpg";
import pear from "./images/fruits/pear.jpg";
import persimmon from "./images/fruits/persimmon.jpg";
import pitahaya from "./images/fruits/pitahaya.jpg";
import plum from "./images/fruits/plum.jpg";
import pomegranate from "./images/fruits/pomegranate.jpg";
import raspberry from "./images/fruits/raspberry.jpg";
import strawberry from "./images/fruits/strawberry.jpg";
import tangerine from "./images/fruits/tangerine.jpg";
import tomato from "./images/fruits/tomato.jpg";
import watermelon from "./images/fruits/watermelon.jpg";
import kiwi from "./images/fruits/kiwi.jpg";
import kiwifruit from "./images/fruits/kiwifruit.jpg";
import guava from "./images/fruits/guava.jpg";
import mango from "./images/fruits/mango.jpg";
import morus from "./images/fruits/morus.jpeg";
import pineapple from "./images/fruits/pineapple.png";

const imageMapping = {
  apple,
  apricot,
  avocado,
  banana,
  blackberry,
  blueberry,
  cherry,
  dragonfruit,
  durian,
  feijoa,
  fig,
  gooseberry,
  greenapple,
  grape,
  grapes,
  guava,
  kiwi,
  kiwifruit,
  lemon,
  lime,
  lingonberry,
  lychee,
  mango,
  melon,
  morus,
  orange,
  papaya,
  passionfruit,
  pear,
  persimmon,
  pineapple,
  pitahaya,
  plum,
  pomegranate,
  raspberry,
  strawberry,
  tangerine,
  tomato,
  watermelon,
  tropicaltwist,
  strawberrysplash,
  energizer,
  berryblast,
};

export default function Menu() {
  const [smoothieName, setSmoothieName] = useState("");
  const [smoothieFruits, setSmoothieFruits] = useState("");
  //const [smoothieImage, setSmoothieImage] = useState("");

  const smoothieRecipes = [
    {
      name: "Tropical Twist",
      ingredients: ["Pineapple", "Mango", "Banana"],
      id: "0",
      img: { tropicaltwist },
    },
    {
      name: "Strawberry Splash",
      ingredients: ["Strawberry", "Banana", "Pineapple", "Orange", "Raspberry"],
      id: "1",
      img: { strawberrysplash },
    },
    {
      name: "Energizer",
      ingredients: ["GreenApple", "Kiwi", "Lime"],
      id: "2",
      img: { energizer },
    },
    {
      name: "Berry Blast",
      ingredients: ["Raspberry", "Apple", "Banana"],
      id: "3",
      img: { berryblast },
    },
  ];

  function showSmoothie0(e) {
    setSmoothieName(e.target.innerHTML);
    setSmoothieFruits(smoothieRecipes[0].ingredients);
  }

  function showSmoothie1(e) {
    setSmoothieName(e.target.innerHTML);
    setSmoothieFruits(smoothieRecipes[1].ingredients);
  }

  function showSmoothie2(e) {
    setSmoothieName(e.target.innerHTML);
    setSmoothieFruits(smoothieRecipes[2].ingredients);
  }

  function showSmoothie3(e) {
    setSmoothieName(e.target.innerHTML);
    setSmoothieFruits(smoothieRecipes[3].ingredients);
  }

  return (
    <div className="Menu">
      <Navigation />
      <div className="container">
        <h1>Menu</h1>
        <h2 className="price">All Smoothies For £3 | 2 For £5 | 5 For £10 </h2>
        <div className="column">
          <img className="pine" src={pineapple2} alt="pineapple.png"></img>
        </div>
        <div className="column">
          <img className="orange" src={orange2} alt="orange.png"></img>
        </div>
        <div className="column">
          <img
            className="strawberry"
            src={strawberry2}
            alt="strawberry.png"
          ></img>
        </div>
        <div className="column">
          <img className="mango" src={mango2} alt="mango.png"></img>
        </div>
        <div className="section smoothie-bar">
          <Button onClick={showSmoothie0}>Tropical Twist</Button>
          <Button onClick={showSmoothie1}>Strawberry Splash</Button>
          <Button onClick={showSmoothie2}>Energizer</Button>
          <Button onClick={showSmoothie3}>Berry Blast</Button>
        </div>
      </div>
      <div className="SmoothieRecipe">
        <div className="recipe">
          <div>
            <img
              src={tropicaltwist}
              alt="Tropical twist smoothie"
              className="smoothie-images"
            />
          </div>
          <div className="recipe-info">
            <h2>{smoothieName}</h2>
            <p>SERVES 2</p>

            <h4>Ingredients:</h4>
            <div>{smoothieFruits}</div>
          </div>
        </div>
      </div>
      <hr className="divider" />
      <Footer />
    </div>
  );
}
