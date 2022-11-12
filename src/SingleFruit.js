import React from "react";
import { useState, useEffect } from "react";
import "./MultipleFruits.css";
import LoadingSpinner from "./LoadingSpinner";

import Card from "react-bootstrap/Card";
import cherry from "./images/cherry.jpg";

export default function SingleFruit(props) {
  const [singleFruitSearch, setSingleFruitSearch] = useState("");

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
          <Card.Img src={cherry} alt="cherry" className="smoothie-images" />
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
