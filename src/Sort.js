import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./Dropdowns.css";

export default function Sort() {
  const [sortTitle, setSortTitle] = useState("Sorted by: Name A-Z (default)");

  function sortByNutrition(event) {
    setSortTitle(`Sorted by: ${event.target.innerHTML}`);
  }

  return (
    <div className="Sort">
      <div className="sort-dropdown">
        <DropdownButton
          variant="secondary"
          className="dropdown-button sort-title"
          title={sortTitle}
        >
          <Dropdown.Item onClick={sortByNutrition}>Name A - Z</Dropdown.Item>
          <Dropdown.Item onClick={sortByNutrition}>
            Family (A - Z)
          </Dropdown.Item>
          <Dropdown.Item onClick={sortByNutrition}>Order (A - Z)</Dropdown.Item>
          <Dropdown.Item onClick={sortByNutrition}>
            Carbs (Low-High)
          </Dropdown.Item>
          <Dropdown.Item onClick={sortByNutrition}>
            Protein (Low-High)
          </Dropdown.Item>
          <Dropdown.Item onClick={sortByNutrition}>
            Fat (Low-High)
          </Dropdown.Item>
          <Dropdown.Item onClick={sortByNutrition}>
            Calories (Low-High)
          </Dropdown.Item>
          <Dropdown.Item onClick={sortByNutrition}>
            Sugar (Low-High)
          </Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
}
