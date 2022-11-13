import React, { useState } from "react";
import "./Home.css";
import Navigation from "./Navigation";
import Search from "./Search";
import ViewAllFruits from "./ViewAllFruits";
import Footer from "./Footer";

export default function Fruits() {
  const [searchData, setSearchData] = useState("");

  const searchToFruit = (searchData) => {
    setSearchData(searchData);
  };

  let singleFruitUrl = searchData
    ? `https://fruityvice.com/api/fruit/${searchData}`
    : null;

  let multipleFruitsUrl = `https://fruityvice.com/api/fruit/all`;

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
