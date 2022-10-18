import React from "react";
import "./Dropdowns.css";
import DropdownFamily from "./DropdownFamily";
import DropdownOrder from "./DropdownOrder";

export default function Dropdowns() {
  return (
    <div className="Dropdowns">
      <div className="dropdown-section">
        <div className="filter-section">
          <p>Filter by:</p>
          <DropdownFamily />
          <DropdownOrder />
        </div>
      </div>
    </div>
  );
}
