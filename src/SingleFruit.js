import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./MultipleFruits.css";
import LoadingSpinner from "./LoadingSpinner";
import Card from "react-bootstrap/Card";
import FruitImage from "./FruitImage.js";

export default function SingleFruit(props) {
  const [singleFruitSearch, setSingleFruitSearch] = useState("");

  const searchFruit = () => {
    fetch(`${props.url}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSingleFruitSearch(fruitListing(data));
      });
  };

  const fruitListing = (data) => {
    return (
      <div className="listing">
        <Card style={{ width: "18rem" }}>
          <div className="new">
            <FruitImage fruit={data.name} alt={data.name} />
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>
                <div className="listing-details">
                  <div className="listing-info">
                    <h3>Info</h3>
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
                    <h3>Nutrition</h3>
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
              </Card.Text>
            </Card.Body>
          </div>
        </Card>
      </div>
    );
  };
  if (fruitListing) {
    return (
      <div className="SingleFruit">
        <Button onClick={searchFruit}>
          show fruit fed down from home component
        </Button>
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
