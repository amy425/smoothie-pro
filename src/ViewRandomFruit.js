import React from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";

export default function ViewRandomFruit() {
  //const [singleFruitSearch, setSingleFruitSearch] = useState("");

  function randomUrl() {
    fetch(`https://fruityvice.com/api/fruit/all`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //setSingleFruitSearch(data);
        const randomFruit = data[Math.floor(Math.random() * data.length)];
        console.log(randomFruit.name.toLowerCase());
      });
  }

  return (
    <div className="ViewRandomFruit">
      <Button onClick={randomUrl}>Random fruit</Button>
    </div>
  );
}
