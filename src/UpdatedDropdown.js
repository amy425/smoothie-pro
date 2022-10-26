import React from "react";
import Accordion from "react-bootstrap/Accordion";
import DropdownFamily from "./DropdownFamily";
import DropdownOrder from "./DropdownOrder";

export default function UpdatedDropdown() {
  return (
    <div className="dropdowns">
      <p>Filter by:</p>
      <Accordion defaultActiveKey={["0"]} alwaysOpen flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>FAMILY</Accordion.Header>
          <Accordion.Body>
            <DropdownFamily />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>ORDER</Accordion.Header>
          <Accordion.Body>
            <DropdownOrder />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
