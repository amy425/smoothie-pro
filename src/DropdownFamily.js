import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./Dropdowns.css";
import { useEffect, useState } from "react";

export default function DropdownFamily() {
  const [familyFilterOptions, setFamilyFilterOptions] = useState("");

  function filterByFamily(props) {
    //setOrderTitle
    let familyDropdownTitle = document.getElementsByClassName("family-title");
    console.log(props.target.innerHTML);
    familyDropdownTitle.innerHTML = `Family: ${props.target.innerHTML}`;
  }

  function tidyData(data) {
    let familyList = [
      data[0].family,
      data[1].family,
      data[2].family,
      data[3].family,
      data[4].family,
      data[5].family,
      data[6].family,
      data[7].family,
      data[8].family,
      data[9].family,
      data[10].family,
      data[11].family,
      data[12].family,
      data[13].family,
      data[14].family,
      data[15].family,
      data[16].family,
      data[17].family,
      data[18].family,
      data[19].family,
      data[20].family,
      data[21].family,
      data[22].family,
      data[23].family,
      data[24].family,
      data[25].family,
      data[26].family,
      data[27].family,
      data[28].family,
      data[29].family,
      data[30].family,
    ];

    let sortedFamilyList = familyList.sort();

    //Change to filter not map!!
    const currentFamilyList = new Set(sortedFamilyList);
    setFamilyFilterOptions(Array.from(currentFamilyList));
  }

  const dropdownOptions = (currentFamilyList) =>
    currentFamilyList.map((family, index) => {
      return (
        <Dropdown.Item key={index} onClick={filterByFamily} href="#/action-1">
          {family}
        </Dropdown.Item>
      );
    });
  const fetchFamilies = () => {
    fetch("https://fruityvice.com/api/fruit/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        tidyData(data);
      });
  };

  useEffect(fetchFamilies, []);

  return (
    <div className="DropdownFamily">
      <div className="family-dropdown">
        <DropdownButton
          variant="secondary"
          className="dropdown-button family-title"
          title="Family"
        >
          {dropdownOptions(Array.from(familyFilterOptions))}
        </DropdownButton>
      </div>
      <div></div>
    </div>
  );
}