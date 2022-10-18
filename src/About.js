import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function About() {
  return (
    <div className="About">
      <Navigation />
      <div className="container">
        <h1>About</h1>
        <div className="section">
          <p>Lorem ipsum</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
