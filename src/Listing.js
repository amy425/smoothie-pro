import React from "react";
import Card from "react-bootstrap/Card";
import "./Listing.css";
import cherry from "./images/fruits/cherry.jpg";

export default function Listing() {
  <div className="Listing">
    <Card className="bg-dark text-white listing">
      <Card.Img src={cherry} alt="cherry" className="listing-images" />
      <Card.ImgOverlay>
        <Card.Title className="listing-title">Cherry</Card.Title>
      </Card.ImgOverlay>
    </Card>
  </div>;
}
