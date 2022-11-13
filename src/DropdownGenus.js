import React from "react";
import { useEffect, useState } from "react";
import "./Dropdowns.css";

export default function DropdownGenus() {
  const [genusFilterOptions, setGenusFilterOptions] = useState("");

  function filterByGenus(props) {
    let genusDropdownTitle = document.getElementById("genus-title");
    console.log(props.target.innerHTML);
    genusDropdownTitle.innerHTML = `Genus: ${props.target.innerHTML}`;
  }

  function tidyData(data) {
    let genusList = [
      data[0].genus,
      data[1].genus,
      data[2].genus,
      data[3].genus,
      data[4].genus,
      data[5].genus,
      data[6].genus,
      data[7].genus,
      data[8].genus,
      data[9].genus,
      data[10].genus,
      data[11].genus,
      data[12].genus,
      data[13].genus,
      data[14].genus,
      data[15].genus,
      data[16].genus,
      data[17].genus,
      data[18].genus,
      data[19].genus,
      data[20].genus,
      data[21].genus,
      data[22].genus,
      data[23].genus,
      data[24].genus,
      data[25].genus,
      data[26].genus,
      data[27].genus,
      data[28].genus,
      data[29].genus,
      data[30].genus,
    ];

    let sortedGenusList = genusList.sort();

    //Change to filter not map!!
    const currentGenusList = new Set(sortedGenusList);
    setGenusFilterOptions(Array.from(currentGenusList));
  }

  const dropdownOptions = (currentGenusList) =>
    currentGenusList.map((genus, index) => {
      return (
        <div key={index}>
          <label onClick={filterByGenus}>
            <input type="checkbox" />
            {genus}
          </label>
        </div>
      );
    });

  const fetchGenus = () => {
    fetch("https://fruityvice.com/api/fruit/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        tidyData(data);
      });
  };

  useEffect(fetchGenus, []);

  return (
    <div className="DropdownGenus">
      {dropdownOptions(Array.from(genusFilterOptions))}
    </div>
  );
}
