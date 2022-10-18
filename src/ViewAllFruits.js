import React from "react";
import Button from "react-bootstrap/Button";

export default function ViewAllFruits() {
  function allUrl() {
    console.log(`all`);
  }

  return (
    <div className="ViewAllFruits">
      <Button onClick={allUrl}>View all fruits</Button>
    </div>
  );
}
