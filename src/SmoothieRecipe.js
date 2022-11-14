import React from "react";
import "./SmoothieRecipe.css";
import Card from "react-bootstrap/Card";
import tropicaltwist from "./images/smoothies/tropicaltwist.jpg";
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

export default function SmoothieRecipe() {
  /*const imageMapping = {
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
  };*/

  return (
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
          <h2>Tropical Twist</h2>
          <p>Lorem ipsum sit dolor amet.</p>
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
              src={pineapple}
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
