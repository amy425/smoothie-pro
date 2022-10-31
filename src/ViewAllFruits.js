import React from "react";
import Button from "react-bootstrap/Button";
//import FruitApi from "./FruitApi";
//import { useState } from "react";
export default function ViewAllFruits() {
  //const [showFruit, setShowFruits] = useState(false);

  function allFruits() {
    console.log(`all`);
  }

  return (
    <div className="ViewAllFruits">
      <Button onClick={allFruits}>View all fruits</Button>
    </div>
  );
}
