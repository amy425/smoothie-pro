import React from "react";
import { useState, useEffect } from "react";
import "./MultipleFruits.css";
import LoadingSpinner from "./LoadingSpinner";
import Card from "react-bootstrap/Card";
import NoResults from "./NoResults";

import apricot from "./images/apricot.jpg";
import banana from "./images/banana.jpg";
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

export default function SingleFruit(props) {
  const [singleFruitSearch, setSingleFruitSearch] = useState("");

  const imageMapping = {
    apricot: apricot,
    banana: banana,
    blackberry: blackberry,
    cherry: cherry,
    durian: durian,
    fig: fig,
    grape: grape,
    lemon: lemon,
    orange: orange,
    raspberry: raspberry,
    strawberry: strawberry,
    tangerine: tangerine,
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
