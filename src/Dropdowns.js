import React from "react";
import "./Dropdowns.css";
import UpdatedDropdown from "./UpdatedDropdown";

export default function Dropdowns() {
  return (
    <div className="Dropdowns">
      <div className="dropdown-section">
        <div className="filter-section">
          <UpdatedDropdown />
        </div>
      </div>
    </div>
  );
}
