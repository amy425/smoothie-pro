import React from "react";
import Button from "react-bootstrap/Button";
import FruitApi from "./FruitApi";
import { useState } from "react";
export default function ViewAllFruits() {
  const [showFruit, setShowFruits] = useState(false);
  return (
    <div>
      <div className="ViewAllFruits">
        <Button onClick={() => setShowFruits(true)}>View all fruits</Button>
      </div>
      {showFruit && <FruitApi />}
    </div>
  );
}
