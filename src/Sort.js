import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./Dropdowns.css";

export default function Sort({ setSortBy, sortBy }) {
  return (
    <div className="Sort">
      <div className="sort-dropdown">
        <DropdownButton
          variant="secondary"
          className="dropdown-button sort-title"
          title={`Sort By ${sortBy}`}
          onSelect={setSortBy}
        >
          <Dropdown.Item eventKey="Name">Name A - Z</Dropdown.Item>
          <Dropdown.Item eventKey="Family">
            Family (A - Z)
          </Dropdown.Item>
          <Dropdown.Item eventKey="Order">Order (A - Z)</Dropdown.Item>
          <Dropdown.Item eventKey="Carbohydrates">
            Carbs (Low-High)
          </Dropdown.Item>
          <Dropdown.Item eventKey="Protein">
            Protein (Low-High)
          </Dropdown.Item>
          <Dropdown.Item eventKey="Fat">
            Fat (Low-High)
          </Dropdown.Item>
          <Dropdown.Item eventKey="Calories">
            Calories (Low-High)
          </Dropdown.Item>
          <Dropdown.Item eventKey="Sugar">
            Sugar (Low-High)
          </Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
}
