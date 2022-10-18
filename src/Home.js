import React from "react";
import "./Home.css";
import Search from "./Search";
import ViewAllFruits from "./ViewAllFruits";
import ViewRandomFruit from "./ViewRandomFruit";

export default function Home() {
  return (
    <div className="Home">
      <div className="container">
        <h1>Smoothie Pro</h1>
        <Search />
        <div className="other-search-options">
          <ViewAllFruits />
          <ViewRandomFruit />
        </div>
      </div>
    </div>
  );
}
