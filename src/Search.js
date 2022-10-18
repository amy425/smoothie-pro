import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  let [singleFruit, setSingleFruit] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (singleFruit === "") {
      alert(`Please enter the name of a fruit!`);
    } else {
      console.log(singleFruit);
    }
  }

  function updateFruit(event) {
    let fruitName = event.target.value.toLowerCase().trim().replace(/\s/g, "");
    setSingleFruit(fruitName);
  }

  return (
    <div className="Search">
      <form id="search-form" onSubmit={handleSubmit}>
        <input
          id="home-search-bar"
          type="search"
          placeholder="Search for a fruit..."
          onChange={updateFruit}
          autoFocus="{true}"
        />
        <input id="home-submit-button" type="submit" value="➜" />
      </form>
    </div>
  );
}
