import React, { useState } from "react";
import "./Home.css";
import Navigation from "./Navigation";
import Search from "./Search";
import ViewAllFruits from "./ViewAllFruits";
import Footer from "./Footer";

export default function Fruits() {
  const [searchData, setSearchData] = useState("");
  //const [familyData, setFamilyData] = useState("");
  //const [allData, setAllData] = useState("");

  const searchToFruit = (searchData) => {
    setSearchData(searchData);
  };

  let singleFruitUrl = searchData
    ? `https://fruityvice.com/api/fruit/${searchData}`
    : null;

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
    <div className="Home">
      <Navigation />
      <div className="container-fluid">
        <h1>Smoothie Pro</h1>
        <Search searchToFruit={searchToFruit} />
        <div className="other-search-options">
          <ViewAllFruits
            searchToFruit={searchToFruit}
            singleFruitUrl={singleFruitUrl}
            url={multipleFruitsUrl}
          />
        </div>
      </div>
      <hr className="divider" />
      <Footer />
    </div>
  );
}
