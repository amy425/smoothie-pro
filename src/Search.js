import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-form">
        <input
          id="home-search-bar"
          type="text"
          placeholder="Search for a fruit..."
        ></input>
        <input id="home-submit-button" type="submit" value="➜"></input>
      </form>
    </div>
  );
}
