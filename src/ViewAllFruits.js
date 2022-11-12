import React from "react";
import Button from "react-bootstrap/Button";
import FruitApi from "./FruitApi";
import { useState } from "react";

export default function ViewAllFruits() {
  const [showFruit, setShowFruits] = useState(false);

  function allFruits() {
    setShowFruits(true);
    setShowRandomFruit(0);
  }
  const [showRandomFruit, setShowRandomFruit] = useState(0);

  function randomUrl() {
    setShowRandomFruit(showRandomFruit + 1);
    setShowFruits(false);
  }

  return (
    <div>
      <div className="ViewAllFruits">
        <Button onClick={allFruits}>View all fruits</Button>
        <Button onClick={randomUrl}>Random fruit</Button>
      </div>
      {(showFruit || showRandomFruit > 0) && (
        <FruitApi showRandomFruit={showRandomFruit} />
      )}
    </div>
  );
}
