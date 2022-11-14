import React, { useCallback, useEffect, useState } from "react";
import "./MultipleFruits.css";
import LoadingSpinner from "./LoadingSpinner";
import Card from "react-bootstrap/Card";
import SingleFruit from "./SingleFruit";

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
import pineapple from "./images/fruits/pineapple.jpg";

export const imageMapping = {
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
};

function RenderFruit({ fruit }) {
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
}

export default function MultipleFruits({
  singleFruitUrl,
  showRandomFruit,
  url,
  sortBy,
}) {
  const [fruits, setFruits] = useState([]);
  const [loading, setLoading] = useState(false);

  function sortProducts(data) {
    const sortedFruits = data.sort((a, b) => {
      if (a[sortBy])
        return a[sortBy].toLowerCase() > b[sortBy].toLowerCase() ? 1 : -1;
      else return a.nutritions[sortBy] > b.nutritions[sortBy] ? 1 : -1;
    });
    setFruits([...sortedFruits]);
    setLoading(false);
  }
  const setData = useCallback(() => {
    setLoading(true);
    if (fruits.length > 0) {
      sortProducts(fruits);
    } else searchFruit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy]);

  useEffect(() => {
    setData();
  }, [sortBy, setData]);

  useEffect(() => {}, []);

  const searchFruit = () => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        sortProducts(data);
      });
  };

  if (loading)
    return (
      <div className="MultipleFruits">
        <div className="catalogue">
          <LoadingSpinner />
        </div>
      </div>
    );
  if (singleFruitUrl) return <SingleFruit url={singleFruitUrl} />;

  if (showRandomFruit && fruits.length) {
    const random = Math.floor(Math.random() * fruits.length);
    return (
      <div className="fruit">
        <div className="catalogue">
          <RenderFruit fruit={fruits[random]} />
        </div>
      </div>
    );
  }

  return (
    <div className="MultipleFruits">
      <div className="catalogue">
        {fruits.map((fruit) => (
          <RenderFruit key={fruit.id} fruit={fruit} />
        ))}
      </div>
    </div>
  );
}
