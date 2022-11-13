import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import MultipleFruits from "./MultipleFruits";
import Sort from "./Sort";
import "./Dropdowns.css";

export default function ViewAllFruits({ singleFruitUrl, url, searchToFruit }) {
  const [showFruit, setShowFruits] = useState(false);
  const [sortBy, setSortBy] = useState("Name");
  const [active, setActive] = useState("");

  function allFruits() {
    searchToFruit("");
    setShowFruits(true);
    setShowRandomFruit(0);
    setActive("");
  }
  const [showRandomFruit, setShowRandomFruit] = useState(0);

  function randomUrl() {
    setShowRandomFruit(showRandomFruit + 1);
    searchToFruit("");
    setShowFruits(false);
    setActive("deactivated");
  }

  return (
    <div>
      <div className="ViewAllFruits">
        <Button onClick={allFruits}>View all fruits</Button>
        <Button onClick={randomUrl}>Random fruit</Button>
      </div>
      <div className="fruit-display">
        <div className={"sort-section " + active}>
          <Sort sortBy={sortBy} setSortBy={setSortBy} />
        </div>
        <div className="main">
          {(showFruit || showRandomFruit > 0) && (
            <MultipleFruits
              showRandomFruit={showRandomFruit}
              url={url}
              singleFruitUrl={singleFruitUrl}
              sortBy={sortBy.toLowerCase()}
            />
          )}
        </div>
      </div>
    </div>
  );
}
