import React from "react";
import apricot from "./images/apricot.jpg";
/*import banana from "./images/banana.jpg";
import blackberry from "./images/blackberry.jpg";
import cherry from "./images/cherry.jpg";
import durian from "./images/durian.jpg";
import fig from "./images/fig.jpg";
import grape from "./images/grape.jpg";
import lemon from "./images/lemon.jpg";
import orange from "./images/orange.jpg";
import raspberry from "./images/raspberry.jpg";
import strawberry from "./images/strawberry.jpg";
import tangerine from "./images/tangerine.jpg";
import watermelon from "./images/watermelon.jpg";
import "./FruitImage.css";*/

export default function FruitImage(props) {
  //let image = props.fruit.toLowerCase();

  return (
    <div className="FruitImage">
      <img src={apricot} alt={props.name} width="250" />
    </div>
  );
}
