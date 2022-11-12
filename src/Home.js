import React from "react";
import "./Home.css";
import Navigation from "./Navigation";
import Search from "./Search";
import ViewAllFruits from "./ViewAllFruits";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="Home">
      <Navigation />
      <div className="container section">
        <h1>Smoothie Pro</h1>
        <Search />
        <div className="other-search-options">
          <ViewAllFruits />
        </div>
      </div>
      <Footer />
    </div>
  );
}
