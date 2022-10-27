import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import jugs from "./jugs.jpg";

export default function About() {
  return (
    <div className="About">
      <Navigation />
      <div className="container">
        <h1>About</h1>
        <div className="section">
          <p className="about">Established since 2022, Smoothie Pro started when three friends Amy, Yasmine and Muhammad came together after learning they all had a shared interest in starting a business which involved healthy juices. Since starting our business we are thrilled to announce Smoothie Pro is now London's leading independent smoothie distribution.
Our aim is to deliver freshly prepared juices to your door. We offer set smoothies which include our customers favourtie 'Energizer' or simply create your own. So head on to our Menu page and get started.</p>
        </div>
        <div className="photo">
      <img src={jugs} alt="jugs"></img>
      </div>
      </div>
      <Footer />
    </div>
  );
}
