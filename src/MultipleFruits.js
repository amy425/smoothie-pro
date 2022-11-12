import React from "react";
import "./MultipleFruits.css";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import LoadingSpinner from "./LoadingSpinner";
import "./Smoothies.css";
import Card from "react-bootstrap/Card";

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
import none from "./images/fruits/none.jpg";

export default function MultipleFruits() {
  const [fruits, setFruits] = useState([]);

  const imageMapping = {
    apple: apple,
    apricot: apricot,
    avocado: avocado,
    banana: banana,
    blackberry: blackberry,
    blueberry: blueberry,
    cherry: cherry,
    dragonfruit: dragonfruit,
    durian: durian,
    feijoa: feijoa,
    fig: fig,
    gooseberry: gooseberry,
    greenapple: greenapple,
    grape: grape,
    grapes: grapes,
    guava: none,
    kiwi: none,
    kiwifruit: none,
    lemon: lemon,
    lime: lime,
    lingonberry: lingonberry,
    lychee: lychee,
    mango: none,
    melon: melon,
    morus: none,
    orange: orange,
    papaya: papaya,
    passionfruit: passionfruit,
    pear: pear,
    persimmon: persimmon,
    pineapple: none,
    pitahaya: pitahaya,
    plum: plum,
    pomegranate: pomegranate,
    raspberry: raspberry,
    strawberry: strawberry,
    tangerine: tangerine,
    tomato: tomato,
    watermelon: watermelon,
  };

  const searchFruit = () => {
    fetch("https://fruityvice.com/api/fruit/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setFruits(data);
        check(data);
      });
  };

  function check(data) {
    const result = Array.isArray(data);

    if (result === true) {
      console.log(`[${data}] is an array.`);
    } else {
      console.log(`${data} is not an array.`);
      let newArray = [].concat(data);
      console.log(newArray);
      console.log(newArray[0].id);
      console.log(newArray[0].family);
    }
  }

  //Render listings for all fruits in array
  const fruitListings = fruits.map((fruit) => {
    return (
      <div className="Listing" key={fruit.id}>
        <Card className="bg-dark text-white smoothie-listing">
          <Card.Img
            src={imageMapping[fruit.name.toLowerCase()]}
            alt={fruit.name}
            className="smoothie-images"
          />
          <Card.ImgOverlay>
            <Card.Title className="smoothie-title">{fruit.name}</Card.Title>
          </Card.ImgOverlay>
          <Card.Body>
            <div className="listing-details">
              <div className="listing-info">
                <h4>Info</h4>
                <ul>
                  <li>
                    <span className="detail-headings">Genus: </span>
                    {fruit.genus}
                  </li>
                  <li>
                    <span className="detail-headings">Family: </span>
                    {fruit.family}
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
                    {fruit.nutritions.carbohydrates}
                  </li>
                  <li>
                    <span className="detail-headings">Protein: </span>
                    {fruit.nutritions.protein}
                  </li>
                  <li>
                    <span className="detail-headings">Fat: </span>
                    {fruit.nutritions.fat}
                  </li>
                  <li>
                    <span className="detail-headings">Calories: </span>
                    {fruit.nutritions.calories}
                  </li>
                  <li>
                    <span className="detail-headings">Sugar: </span>
                    {fruit.nutritions.sugar}
                  </li>
                </ul>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  });

  if (setFruits) {
    return (
      <div className="MultipleFruits">
        <div className="section">
          <Button onClick={searchFruit}>View all fruits</Button>

          <div className="catalogue">{fruitListings}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="MultipleFruits">
        <LoadingSpinner />
      </div>
    );
  }
}

/*

        <div className="listing-details">
          <div className="listing-info">
            <h4>Info</h4>
            <ul>
              <li>
                <span className="detail-headings">Genus: </span>
                {fruit.genus}
              </li>
              <li>
                <span className="detail-headings">Family: </span>
                {fruit.family}
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
                {fruit.nutritions.carbohydrates}
              </li>
              <li>
                <span className="detail-headings">Protein: </span>
                {fruit.nutritions.protein}
              </li>
              <li>
                <span className="detail-headings">Fat: </span>
                {fruit.nutritions.fat}
              </li>
              <li>
                <span className="detail-headings">Calories: </span>
                {fruit.nutritions.calories}
              </li>
              <li>
                <span className="detail-headings">Sugar: </span>
                {fruit.nutritions.sugar}
              </li>
            </ul>
          </div>
        </div>
        */
