import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import MultipleFruits from "./MultipleFruits";
import Dropdowns from "./Dropdowns";
import Sort from "./Sort";
import Listing from "./Listing";

export default function ViewAllFruits({ singleFruitUrl, url, searchToFruit }) {
  const [showFruit, setShowFruits] = useState(false);
  const [sortBy, setSortBy] = useState("Name");

  function allFruits() {
    searchToFruit("");
    setShowFruits(true);
    setShowRandomFruit(0);
  }
  const [showRandomFruit, setShowRandomFruit] = useState(0);

  function randomUrl() {
    setShowRandomFruit(showRandomFruit + 1);
    searchToFruit("");
    setShowFruits(false);
  }

  return (
    <div>
      <div className="ViewAllFruits">
        <Button onClick={allFruits}>View all fruits</Button>
        <Button onClick={randomUrl}>Random fruit</Button>
      </div>
      <div className="main">
        <div className="left-main">
          <Dropdowns />
        </div>
        {(showFruit || showRandomFruit > 0) && (
          <MultipleFruits
            showRandomFruit={showRandomFruit}
            url={url}
            singleFruitUrl={singleFruitUrl}
            sortBy={sortBy.toLowerCase()}
          />
        )}
        <div className="right-main">
          <div className="sort-section">
            <Sort sortBy={sortBy} setSortBy={setSortBy} />
          </div>
          <Listing />
        </div>
      </div>
    </div>
  );
}
