import React from "react";
import Accordion from "react-bootstrap/Accordion";
import DropdownFamily from "./DropdownFamily";
import DropdownOrder from "./DropdownOrder";
import "./Dropdowns.css";

export default function UpdatedDropdown() {
  return (
    <div className="dropdowns">
      <p>Filter by:</p>
      <Accordion defaultActiveKey={["0"]} alwaysOpen flush className="">
        <Accordion.Item eventKey="0" className="">
          <Accordion.Header>FAMILY</Accordion.Header>
          <Accordion.Body>
            <DropdownFamily />
            <div>
              <p>RESET</p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="">
          <Accordion.Header>ORDER</Accordion.Header>
          <Accordion.Body>
            <DropdownOrder />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
