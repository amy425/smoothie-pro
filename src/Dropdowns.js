import React from "react";
import "./Dropdowns.css";
import DropdownFamily from "./DropdownFamily";
import DropdownOrder from "./DropdownOrder";
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
