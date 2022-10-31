import React from "react";
//import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import durian from "./images/durian.jpg";

import grape from "./images/grape.jpg";
import fig from "./images/fig.jpg";
import smoothie from "./images/smoothies/smoothie.jpg";
import "./Smoothies.css";
import Navigation from "./Navigation";
//import SmoothieRecipe from "./SmoothieRecipe";

export default function Smoothies() {
  //const [showSmoothie, setShowSmoothie] = useState("");
  //const [showRecipe, setShowRecipe] = useState("");

  /*function test(event) {
    console.log(event.target.innerHTML);
  }*/
  /*
  let smoothieMenu = [
    {
      name: "Tropical Twist",
      ingredients: ["Raspberry", "Banana", "Blueberry"],
    },
    {
      name: "Strawberry Splash",
      ingredients: ["Raspberry", "Banana", "Blueberry"],
    },
    {
      name: "Energizer",
      ingredients: ["Strawberry", "Banana", "Apple"],
    },
    {
      name: "Berry Blast",
      ingredients: ["Raspberry", "Banana", "Blueberry"],
    },
  ];

  smoothieMenu.forEach((smoothie) => {
    return (
      <div>
        <Card className="bg-dark text-white smoothie-listing">
          <Card.Img
            src={durian}
            alt={smoothie.name}
            className="smoothie-images"
          />
          <Card.ImgOverlay>
            <Card.Title className="smoothie-title">{smoothie.name}</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </div>
    );
  });*/

  return (
    <div className="Smoothies">
      <Navigation />
      <div className="smoothie-section">
        <Card className="bg-dark text-white smoothie-listing">
          <Card.Img
            src={smoothie}
            alt="Tropical twist smoothie"
            className="smoothie-images"
          />
          <Card.ImgOverlay>
            <Card.Title className="smoothie-title">Tropical Twist</Card.Title>
          </Card.ImgOverlay>
        </Card>
        <Card className="bg-dark text-white smoothie-listing">
          <Card.Img
            src={durian}
            alt="Tropical twist smoothie"
            className="smoothie-images"
          />
          <Card.ImgOverlay>
            <Card.Title className="smoothie-title">
              Strawberry Splash
            </Card.Title>
          </Card.ImgOverlay>
        </Card>
        <Card className="bg-dark text-white smoothie-listing">
          <Card.Img
            src={fig}
            alt="Tropical twist smoothie"
            className="smoothie-images"
          />
          <Card.ImgOverlay>
            <Card.Title className="smoothie-title">Energizer</Card.Title>
          </Card.ImgOverlay>
        </Card>
        <Card className="bg-dark text-white smoothie-listing">
          <Card.Img
            src={grape}
            alt="Tropical twist smoothie"
            className="smoothie-images"
          />
          <Card.ImgOverlay>
            <Card.Title className="smoothie-title">Berry Blast</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </div>
    </div>
  );
}

//smoothieMenu.forEach((smoothies) => console.log(smoothies.ingredients));

/*if (smoothieName === smoothieMenu[0].name) {
      
    }*/

/*function show() {
    console.log(smoothieMenu[0].name);
    console.log(smoothieMenu[1].name);
    console.log(smoothieMenu[2].name);
    console.log(smoothieMenu[3].name);
    //setShowRecipe(smoothieMenu);

    return (
      <div>
        <Card className="bg-dark text-white smoothie-listing" onClick={test}>
          <Card.Img
            src={smoothie}
            alt="Tropical twist smoothie"
            className="smoothie-images"
          />
          <Card.ImgOverlay>
            <Card.Title className="smoothie-title">Tropical Twist</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </div>
    );
  }*/

/*return (
    <div className="Smoothies">
      <div>
        <Card className="bg-dark text-white smoothie-listing" onClick={test}>
          <Card.Img
            src={smoothie}
            alt="Tropical twist smoothie"
            className="smoothie-images"
          />
          <Card.ImgOverlay>
            <Card.Title className="smoothie-title">Tropical Twist</Card.Title>
          </Card.ImgOverlay>
        </Card>
        <Card className="bg-dark text-white smoothie-listing">
          <Card.Img
            src={durian}
            alt="Tropical twist smoothie"
            className="smoothie-images"
          />
          <Card.ImgOverlay>
            <Card.Title className="smoothie-title">
              Strawberry Splash
            </Card.Title>
          </Card.ImgOverlay>
        </Card>
        <Card className="bg-dark text-white smoothie-listing">
          <Card.Img
            src={fig}
            alt="Tropical twist smoothie"
            className="smoothie-images"
          />
          <Card.ImgOverlay>
            <Card.Title className="smoothie-title">Energizer</Card.Title>
          </Card.ImgOverlay>
        </Card>
        <Card className="bg-dark text-white smoothie-listing">
          <Card.Img
            src={grape}
            alt="Tropical twist smoothie"
            className="smoothie-images"
          />
          <Card.ImgOverlay>
            <Card.Title className="smoothie-title">Berry Blast</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </div>
      <div>
        <SmoothieRecipe />
      </div>
    </div>
  );
}*/
