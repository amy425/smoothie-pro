import React from "react";
import "./Home.css";
import Navigation from "./Navigation";
import Search from "./Search";
import ViewAllFruits from "./ViewAllFruits";
import ViewRandomFruit from "./ViewRandomFruit";
import Sort from "./Sort";
import Dropdowns from "./Dropdowns";
import SingleFruit from "./SingleFruit";
import MultipleFruits from "./MultipleFruits";
import Footer from "./Footer";
//import SmoothieRecipe from "./SmoothieRecipe";

import Listing from "./Listing";

export default function Fruits() {
  let singleFruit = `apricot`;
  let singleFruitUrl = `https://fruityvice.com/api/fruit/${singleFruit}`;

  return (
    <div className="Fruits">
      <Navigation />
      <div className="container">
        <h1>Fruits</h1>
        <Search />
        <div className="other-search-options">
          <ViewAllFruits />
          <ViewRandomFruit />
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="sort-section">
          <Sort />
        </div>
        <div className="main">
          <div className="left-main">
            <Dropdowns />
          </div>
          <div className="right-main">
            <Listing />
            <SingleFruit url={singleFruitUrl} />
            <MultipleFruits />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
