import React from "react";
import { useState, useEffect } from "react";
import "./MultipleFruits.css";
import LoadingSpinner from "./LoadingSpinner";
import Card from "react-bootstrap/Card";
import NoResults from "./NoResults";

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

export default function SingleFruit(props) {
  const [singleFruitSearch, setSingleFruitSearch] = useState("");

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

  useEffect(() => {
    fetch(`${props.url}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSingleFruitSearch(fruitListing(data));
      });
  });

  const fruitListing = (data) => {
    return (
      <div className="Listing">
        <Card className="bg-dark text-white smoothie-listing">
          <Card.Img
            src={imageMapping[data.name.toLowerCase()]}
            alt={data.name}
            className="smoothie-images"
          />
          <Card.ImgOverlay>
            <Card.Title className="smoothie-title">{data.name}</Card.Title>
          </Card.ImgOverlay>
          <Card.Body>
            <div className="listing-details">
              <div className="listing-info">
                <h4>Info</h4>
                <ul>
                  <li>
                    <span className="detail-headings">Genus: </span>
                    {data.genus}
                  </li>
                  <li>
                    <span className="detail-headings">Family: </span>
                    {data.family}
                  </li>
                  <li>
                    <span className="detail-headings">Order: </span>
                    {data.order}
                  </li>
                </ul>
              </div>
              <div className="listing-nutrition">
                <h4>Nutrition</h4>
                <ul>
                  <li>
                    <span className="detail-headings">Carbohydrates: </span>
                    {data.nutritions.carbohydrates}
                  </li>
                  <li>
                    <span className="detail-headings">Protein: </span>
                    {data.nutritions.protein}
                  </li>
                  <li>
                    <span className="detail-headings">Fat: </span>
                    {data.nutritions.fat}
                  </li>
                  <li>
                    <span className="detail-headings">Calories: </span>
                    {data.nutritions.calories}
                  </li>
                  <li>
                    <span className="detail-headings">Sugar: </span>
                    {data.nutritions.sugar}
                  </li>
                </ul>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  };
  if (fruitListing) {
    return (
      <div className="SingleFruit">
        <div className="catalogue">{singleFruitSearch}</div>
      </div>
    );
  }
  if (fruitListing === null) {
    return (
      <div className="SingleFruit">
        <NoResults />
      </div>
    );
  } else {
    return (
      <div className="SingleFruit">
        <LoadingSpinner />
      </div>
    );
  }
}

/*

<div className="listing-image">
            <FruitImage />
          </div>

          */
