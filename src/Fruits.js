import React from "react";
import "./Home.css";
import Navigation from "./Navigation";
import Search from "./Search";
import ViewAllFruits from "./ViewAllFruits";
import ViewRandomFruit from "./ViewRandomFruit";
import FruitCatalogue from "./FruitCatalogue";
import Footer from "./Footer";

export default function Fruits() {
  return (
    <div className="Fruits">
      <Navigation />
      <div className="container section">
        <Search />
        <div className="other-search-options">
          <ViewAllFruits />
          <ViewRandomFruit />
        </div>
      </div>
      <hr></hr>
      <FruitCatalogue />
      <Footer />
    </div>
  );
}
