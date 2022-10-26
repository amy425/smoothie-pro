import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./Dropdowns.css";
import { useEffect, useState } from "react";

export default function DropdownOrder() {
  const [orderFilterOptions, setOrderFilterOptions] = useState("");

  function filterByOrder(props) {
    //setOrderTitle
    let orderDropdownTitle = document.getElementById("order-title");
    console.log(props.target.innerHTML);
    orderDropdownTitle.innerHTML = `Order: ${props.target.innerHTML}`;
  }

  function tidyData(data) {
    let orderList = [
      data[0].order,
      data[1].order,
      data[2].order,
      data[3].order,
      data[4].order,
      data[5].order,
      data[6].order,
      data[7].order,
      data[8].order,
      data[9].order,
      data[10].order,
      data[11].order,
      data[12].order,
      data[13].order,
      data[14].order,
      data[15].order,
      data[16].order,
      data[17].order,
      data[18].order,
      data[19].order,
      data[20].order,
      data[21].order,
      data[22].order,
      data[23].order,
      data[24].order,
      data[25].order,
      data[26].order,
      data[27].order,
      data[28].order,
      data[29].order,
      data[30].order,
    ];

    let sortedOrderList = orderList.sort();

    //Change to filter not map!!
    const currentOrderList = new Set(sortedOrderList);
    setOrderFilterOptions(Array.from(currentOrderList));
  }

  const dropdownOptions = (currentOrderList) =>
    currentOrderList.map((order, index) => {
      return (
        <div>
          <label key={index} onClick={filterByOrder}>
            <input type="checkbox" />
            {order}
          </label>
        </div>
      );
    });

  const fetchOrders = () => {
    fetch("https://fruityvice.com/api/fruit/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        tidyData(data);
      });
  };

  useEffect(fetchOrders, []);

  return (
    <div className="DropdownOrder">
      {dropdownOptions(Array.from(orderFilterOptions))}
    </div>
  );
}
