import React from "react";
import "./Home.css";
import Navigation from "./Navigation";
import Search from "./Search";
import ViewAllFruits from "./ViewAllFruits";
import ViewRandomFruit from "./ViewRandomFruit";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="Home">
      <h1>Smoothie Pro</h1>
      <Navigation />
      <div className="container section">
        <Search />
        <div className="other-search-options">
          <ViewAllFruits />
          <ViewRandomFruit />
        </div>
      </div>
      <Footer />
    </div>
  );
}
