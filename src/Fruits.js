import React, { useState } from "react";
import "./Home.css";
import Navigation from "./Navigation";
import Search from "./Search";
import ViewAllFruits from "./ViewAllFruits";
import Sort from "./Sort";
import Dropdowns from "./Dropdowns";
import SingleFruit from "./SingleFruit";
import MultipleFruits from "./MultipleFruits";
import Footer from "./Footer";
//import SmoothieRecipe from "./SmoothieRecipe";
import NoResults from "./NoResults";

import Listing from "./Listing";

export default function Fruits() {
  const [searchData, setSearchData] = useState("");
  //const [familyData, setFamilyData] = useState("");
  //const [allData, setAllData] = useState("");

  const searchToFruit = (searchData) => {
    setSearchData(searchData);
  };

  let singleFruit = `${searchData}`;
  let singleFruitUrl = `https://fruityvice.com/api/fruit/${singleFruit}`;

  /*
  const allToFruit = (allData) => {
    setAllData(allData);
  };*/

  let multipleFruitsUrl = `https://fruityvice.com/api/fruit/all`;

  /*
  const familyToFruit = (familyData) => {
    setFamilyData(familyData);
  };

  let familyFruit = `${familyData}`;
  let familyFruitUrl = `https://fruityvice.com/api/fruit/family/${familyFruit}`;
*/

  return (
    <div className="Fruits">
      <Navigation />
      <div className="container-fluid">
        <h1>Fruits</h1>
        <Search searchToFruit={searchToFruit} />
        <div className="other-search-options">
          <ViewAllFruits />
        </div>
      </div>
      <hr className="divider" />

      <div className="main">
        <div className="left-main">
          <Dropdowns />
        </div>
        <div className="right-main">
          <div className="sort-section">
            <Sort />
          </div>
          <Listing />
          <SingleFruit url={singleFruitUrl} />
          <MultipleFruits url={multipleFruitsUrl} />
          <NoResults />
        </div>
      </div>
      <Footer />
    </div>
  );
}
